
export default function SocialBtn(props) {

  const btnContent = [
    {
      href: 'https://www.linkedin.com/in/andrew-peattie/',
      label: 'LinkedIn',
      path: 'M10.033 15.3h-1.6v-5.199h1.6V15.3zm-.8-5.866c-.577 0-.866-.267-.866-.8a.74.74 0 01.25-.567.868.868 0 01.616-.233c.577 0 .866.268.866.801s-.288.799-.866.799zm6.734 5.866h-1.633v-2.9c0-.755-.268-1.133-.801-1.133-.422 0-.699.211-.834.633-.043.067-.066.201-.066.4v3H11v-3.533c0-.8-.012-1.355-.033-1.666h1.4l.1.699c.367-.556.9-.833 1.633-.833.557 0 1.006.194 1.35.583.346.389.518.95.518 1.684V15.3zM12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7z'
    },
    {
      href: 'mailto:drewpeattie@hotmail.com',
      label: 'Email',
      path: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.466 0 2.961-.371 4.442-1.104l-.885-1.793C14.353 19.698 13.156 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8v1c0 .692-.313 2-1.5 2-1.396 0-1.494-1.819-1.5-2V8h-2v.025A4.954 4.954 0 0012 7c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.45 0 2.748-.631 3.662-1.621.524.89 1.408 1.621 2.838 1.621 2.273 0 3.5-2.061 3.5-4v-1c0-5.514-4.486-10-10-10zm0 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z'
    },
    {
      href: 'https://github.com/atrp87',
      label: 'GitHub',
      path: 'M12 21c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9zm0-16c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7zm1.565 7.626c.171 0 .316.084.441.255.124.169.187.378.187.625 0 .248-.062.457-.187.626-.125.169-.271.254-.441.254-.181 0-.337-.084-.461-.254-.124-.169-.187-.378-.187-.626s.062-.456.187-.625c.125-.171.281-.255.461-.255m2.21-2.289c.482.522.725 1.155.725 1.898 0 .482-.057.915-.166 1.301a3.196 3.196 0 01-.42.939 2.717 2.717 0 01-.627.635 3.26 3.26 0 01-.685.401c-.208.085-.446.15-.716.196a5.221 5.221 0 01-.606.079l-.44.009-.352.01-.488.011-.488-.011-.352-.01-.44-.009a5.168 5.168 0 01-.606-.079 3.272 3.272 0 01-.716-.196 3.189 3.189 0 01-.684-.401 2.74 2.74 0 01-.628-.635 3.196 3.196 0 01-.42-.939 4.78 4.78 0 01-.166-1.301c0-.743.242-1.376.725-1.898-.053-.026-.056-.286-.008-.782a4.65 4.65 0 01.319-1.37c.602.064 1.343.404 2.23 1.017.3-.078.71-.118 1.233-.118.549 0 .959.04 1.234.118a8.291 8.291 0 011.16-.666c.374-.168.644-.267.814-.293l.254-.058c.172.417.277.875.32 1.37.05.496.047.756-.006.782m-3.754 5.027c1.083 0 1.899-.129 2.454-.39.553-.26.833-.796.833-1.605 0-.469-.176-.861-.529-1.174a1.192 1.192 0 00-.638-.313c-.238-.039-.607-.039-1.104 0-.495.04-.834.058-1.016.058-.248 0-.517-.013-.851-.039l-.783-.049a2.408 2.408 0 00-.616.069 1.235 1.235 0 00-.55.273c-.336.3-.507.691-.507 1.174 0 .809.274 1.345.821 1.605.547.261 1.361.39 2.444.39m-1.524-2.737c.17 0 .316.084.44.255.124.169.187.378.187.625 0 .248-.062.457-.187.626-.124.169-.271.254-.44.254-.182 0-.337-.084-.462-.254-.124-.169-.187-.378-.187-.626s.062-.456.187-.625c.125-.171.28-.255.462-.255'
    }
  ];

  return (
    <div className='social__btn'>
      {btnContent.map(btn => (
        <a
          key={btn.label}
          aria-label={`Andrew Peattie's ${btn.label}`}
          rel='noreferrer'
          href={btn.href}
          target='_blank'>
          <svg
            baseProfile='tiny'
            viewBox='0 0 24 24'
            fill='currentColor'
            {...props}
          >
            <path d={btn.path} />
          </svg>
        </a>
      ))}
    </div >
  )
};