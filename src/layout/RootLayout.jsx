import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './nav/Nav';
import Contact from './Contact';
import { ThemeProvider } from '../context/ThemeContext';
import useTabFocus from '../hooks/useTabFocus';
export default function RootLayout() {
  const { firstElementRef, lastElementRef } = useTabFocus();
  const loc = useLocation();

  useEffect(() => {
    if (loc.hash) {
      let elem = document.getElementById(loc.hash.slice(1))

      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' })
      }
    }

  }, [loc])

  useEffect(() => {
    const focusableElements = document.querySelectorAll('a, button, input');

    focusableElements.forEach((element) => {
      element.tabIndex = 0;
    });
  }, []);

  return (
    <>
      <ThemeProvider>
        <Nav />
        <Outlet />
      </ThemeProvider>
      <Contact />
      <div className='footer_email'>
        <a
          style={{ fontSize: '1.2rem' }}
          aria-label='Send an email to Andrew Peattie'
          rel='noreferrer'
          href='mailto:drewpeattie@hotmail.com'
          target='_blank'>
          drewpeattie@hotmail.com
        </a>
      </div>
    </>
  );
}
