import { useState } from 'react';
import LinkButton from '../../components/buttons/LinkButton';
import Brand from './Brand';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import ResumePDF from '../../assets/Andrew_Peattie__Resume.pdf'

export default function Header({ handleCurLocClick }) {
  const [isShown, setIsShown] = useState(false);

  const toggleMobileMenu = () => {
    // e.stopPropagation();
    // setIsShown(prevIsShown => !prevIsShown);
    setIsShown(!isShown);
  };

  if (isShown) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (

    <header className='header'>
      <nav>
        <div className='nav-links'>
          <ul>
            <li>
              <a href='/#projects' onClick={handleCurLocClick}>Projects</a>
            </li>
            <li>
              <Link to='/blogs'>Blog</Link>
            </li>
            <li>
              <a href='#contact' onClick={handleCurLocClick}>Contact</a>
            </li>
          </ul>
        </div>
        <div className='nav-brand'>
          <Brand />
        </div>
        <div className="nav-spotlight">
          <LinkButton to={ResumePDF} type='external'>
            Resume
          </LinkButton>
        </div>
        <div className='mobile-menu-button'>
          <label className='hamburger-menu'>
            <input type="checkbox" onChange={toggleMobileMenu} />
          </label>
        </div>
        {/* {isShown && */}
        <MobileMenu isShown={isShown} toggleMobileMenu={toggleMobileMenu} />
        {/* } */}
      </nav>
    </header >

  );
}