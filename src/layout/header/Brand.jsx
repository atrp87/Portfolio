import { Link } from 'react-router-dom';

export default function Brand() {

  return (
    <>
      <Link to='/' className='brand-logo'>
        <h1>
          <span>Andrew</span>
          <span>Peattie</span>
        </h1>
      </Link>
    </>
  );
}