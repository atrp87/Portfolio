import SectionBuilder from '../layout/SectionBuilder';
export default function Profile({ image, title, p1, p2, children }) {

  return (
    <section className='profile'>
      <SectionBuilder>
        <figure>
          <div className='figure-img'>
            <img src={image} alt='Andrew Peattie' />
          </div>
          <figcaption>
            <div>
              <h1>{title}</h1>
            </div>
            <div className='title-to-text'>
              <p>{p1}</p>
            </div>
            <div className='text-to-text'>
              <p>{p2}</p>
            </div>
            <div className='title-to-text'>
              {children}
            </div>
          </figcaption>
        </figure>
      </SectionBuilder>
    </section>
  );
}