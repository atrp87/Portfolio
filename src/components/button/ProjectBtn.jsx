import Btn from './Btn';

export default function ProjectButtons({ links, aria }) {
  return (
    <>
      {links.map((link) => (
        <Btn
          key={link.url}
          to={link.url}
          type='external'
          aria={link.type === 'live' ? `Open ${aria} live website` : `Open ${aria} Github`}
        >
          {link.type === 'live' ? 'Live' : 'GitHub'}
        </Btn>
      ))}
    </>
  );
}