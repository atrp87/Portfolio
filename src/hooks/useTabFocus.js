import { useEffect, useRef } from 'react';

export default function useTabFocus(elements = []) {
  const firstElementRef = useRef(null);
  const lastElementRef = useRef(null);

  useEffect(() => {
    if (elements.length > 0) {
      firstElementRef.current = elements[0];
      lastElementRef.current = elements[elements.length - 1];
    }
  }, [elements]);

  const handleKeyDown = (event) => {
    if (event.keyCode === 9 && elements.includes(event.target)) { // tab key
      event.preventDefault(); // prevent default behavior
      const currentIndex = elements.indexOf(event.target);
      const nextIndex = (currentIndex + (event.shiftKey ? -1 : 1)) % elements.length;
      elements[nextIndex].focus();
    }
    if (event.keyCode === 13) { // enter key
      if (event.target.tagName === 'BUTTON') {
        event.target.click();
      }
      if (event.target.tagName === 'A') {
        window.location.href = event.target.href;
      }
    }
  };

  useEffect(() => {
    if (elements.length > 0) {
      elements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.addEventListener('keydown', handleKeyDown);
        }
      });
      return () => {
        elements.forEach((element) => {
          if (element instanceof HTMLElement) {
            element.removeEventListener('keydown', handleKeyDown);
          }
        });
      };
    }
  }, [elements]);

  return { firstElementRef, lastElementRef };
}
