import SocialIcons from '../components/buttons/SocialIcons';
import SectionBuilder from './SectionBuilder';

export default function Footer() {

  const getYear = () => {
    return new Date().getFullYear();
  }

  return (
    <footer id='contact'>
      <SectionBuilder>
        <div className='section-headers'>
          <h2>Contact</h2>
          <p>Feel free to contact me on any platforms, I looking forward to hearing from you.</p>
        </div>
        <div>
          <SocialIcons />
        </div>
        <div>
          <hr />
        </div>
        <div>
          <a
            rel="noreferrer"
            href="mailto:drewpeattie@hotmail.com"
            target="_blank">drewpeattie@hotmail.com
          </a>
          <p>
            © {getYear()} Andrew Peattie
          </p>
        </div>
      </SectionBuilder >
    </footer >
  );
}