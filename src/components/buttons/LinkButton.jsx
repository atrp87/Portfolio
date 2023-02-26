import { Link } from 'react-router-dom';

export default function LinkButton({ to, type, children }) {

  if (type === 'internal') {
    return (
      <Link
        to={to}
        className='link-btn internal'
      >
        {children}
      </Link>
    );
  } else if (type === 'external') {
    return (
      <a
        href={to}
        className='link-btn external'
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return null;
};



