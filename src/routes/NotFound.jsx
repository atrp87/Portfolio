import AnimateInView from '../layout/AnimateInView';

export default function NotFound() {
  return (

    <section className='not-found'>
      <AnimateInView direction='translateY(200px)'>
        <div className='container'>
          <div className='content'>
            <div>
              <h2>
                Either you made a spelling mistake, or I broke something
              </h2>
            </div>
            <div>
              <p>
                Use the navigation in the header or footer to find what you’re looking for.
              </p>
              <br />
              <p>
                And if you can’t find it — send me an email
                ( <a
                  rel='noreferrer'
                  href='mailto:drewpeattie@hotmail.com'
                  target='_blank'>
                  drewpeattie@hotmail.com
                </a> )
                or a DM
                ( <a
                  rel='noreferrer'
                  href='https://www.linkedin.com/in/andrew-peattie/'
                  target='_blank'>
                  linkedin.com/in/andrew-peattie
                </a> )
                and let me know.
              </p>
              <br />
            </div>
          </div>
        </div>
      </AnimateInView>
    </section>
  );
};