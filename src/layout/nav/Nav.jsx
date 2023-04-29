import { NavLink, useLocation } from 'react-router-dom';
import ResumeBtn from '../../components/button/ResumeBtn';
import brandDark from '../../assets/brand/navBrandBlack.svg';
import brandLight from '../../assets/brand/navBrandWhite.svg';
import NavMobile from './NavMobile';
import { useState, useEffect, useContext, useRef } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function Nav({ firstElementRef }) {
  const [isShown, setIsShown] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { toggleTheme } = useContext(ThemeContext);
  const loc = useLocation();
  const isArticle = loc.pathname.startsWith('/article/');

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
      // update the state with the latest screen width value and check 
      // against the previous state value to determine whether the 
      // screen size has changed.
      if (newScreenWidth > 992) {
        setIsShown(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const toggleMobileMenu = () => {
    setIsShown(!isShown)
  };

  return (
    <nav className={isArticle
      ? (toggleTheme ? 'light-theme' : 'dark-theme ')
      : ''}>
      <div>
        <ul>
          <li>
            <NavLink
              to={{ pathname: '/', hash: '#project' }}
              aria-label='Go to project section'
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{ pathname: '/', hash: '#blog' }}
              aria-label='Go to blog section'
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to='#contact'
              aria-label='Go to contact section'
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='img-container'>
        <NavLink
          to='/'
          aria-label='Go to home'
          onClick={() => setIsShown(false)}
        >
          {isArticle && (
            <img src={
              toggleTheme
                ? (isShown ? brandLight : brandDark)
                : (isShown ? brandLight : brandLight)
            } alt='Andrew Peattie' />
          )}
          {!isArticle && (
            <img src={isShown ? brandLight : brandDark} alt='Andrew Peattie' />
          )}
        </NavLink>
      </div>
      <div>
        <ResumeBtn />
      </div>
      <button
        className='mobile-menu-button'
      >
        <label className={`hamburger-menu ${isShown ? 'open' : ''}`}>
          <input
            type='checkbox'
            onChange={toggleMobileMenu}
            checked={isShown}
          />
        </label>
      </button>
      {
        isShown &&
        <NavMobile
          isShown={isShown}
          toggleMobileMenu={toggleMobileMenu}
        />
      }
    </nav >
  );
}