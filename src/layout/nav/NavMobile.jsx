import { NavLink } from 'react-router-dom';
import ResumeBtn from '../../components/button/ResumeBtn';
import { useState, useEffect } from 'react';

export default function NavMobile({ isShown, toggleMobileMenu }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isShown) {
      setAnimate(true);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      setAnimate(false);
      document.body.style.overflow = 'unset';
    };
  }, []);


  return (
    <aside className={`mobile-menu ${animate ? 'open' : ''}`}>
      <nav >
        <div>
          <NavLink
            to={{ pathname: '/', hash: '#project' }}
            onClick={toggleMobileMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to={{ pathname: '/', hash: '#blog' }}
            onClick={toggleMobileMenu}
          >
            Blogs
          </NavLink>
          <NavLink
            to='#contact'
            onClick={toggleMobileMenu}>
            Contact
          </NavLink>
          <ResumeBtn />
        </div>
      </nav>
    </ aside>
  );
}