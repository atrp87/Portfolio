import LinkButton from '../../components/buttons/LinkButton';
import { Link } from 'react-router-dom';
import ResumePDF from '../../assets/Andrew_Peattie__Resume.pdf'
import { useLocation } from 'react-router-dom';

export default function MobileMenu({ isShown, toggleMobileMenu }) {

  const location = useLocation();

  console.log(location.pathname);

  return (
    <div className={`mobile-menu ${isShown ? 'shown' : ''}`}>
      <Link
        onClick={toggleMobileMenu}
        to='/#projects'
      >
        Projects
      </Link>
      <Link
        onClick={toggleMobileMenu}
        to='/blogs'
      >
        Blog
      </Link>
      <Link
        onClick={toggleMobileMenu}
        to='#contact'
      >
        Contact
      </Link>
      <LinkButton to={ResumePDF} type='external'>
        Resume
      </LinkButton>
    </div>
  );
}