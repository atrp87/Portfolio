import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function SocialIcons() {
  return (
    <div className='social-btn'>
      <a
        rel='noreferrer'
        href='mailto:drewpeattie@hotmail.com'
        target='_blank'>
        <FontAwesomeIcon
          icon={faSquareEnvelope}
          size={'3x'}
        />
      </a>
      <a
        rel='noreferrer'
        href='https://www.linkedin.com/in/andrew-peattie/'
        target='_blank'>
        <FontAwesomeIcon
          icon={faLinkedin}
          size={'3x'}
        />
      </a>
      <a
        rel='noreferrer'
        href='https://github.com/atrp87'
        target='_blank'>
        <FontAwesomeIcon
          icon={faSquareGithub}
          size={'3x'}
        />
      </a>
    </div>
  );
}
