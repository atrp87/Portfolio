import LinkButton from '../../components/buttons/LinkButton';
import { Link } from 'react-router-dom';
import ResumePDF from '../../assets/Andrew_Peattie__Resume.pdf'

export default function MobileMenu({ isShown, toggleMobileMenu }) {

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