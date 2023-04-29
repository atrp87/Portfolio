import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AnimateInView({ children, direction }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className='animate-view' >
      <span
        style={{
          transform: isInView ? 'none' : `${direction}`,
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
      >
        {children}
      </span>
    </div>
  );
}