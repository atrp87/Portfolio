import { Link } from 'react-router-dom';

export default function Btn({ to, type, children, aria }) {

  if (type === 'internal') {
    return (
      <Link to={to} className='btn internal' aria-label={aria}>
        {children}
      </Link>
    );
  } else if (type === 'external') {
    return (
      <a
        href={to}
        className='btn external'
        target='_blank'
        rel='noopener noreferrer'
        aria-label={aria}
      >
        {children}
      </a>
    );
  }

  return null;
};
