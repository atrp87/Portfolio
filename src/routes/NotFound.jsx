import { useRouteError } from "react-router-dom";
import SectionBuilder from '../layout/sectionBuilder';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <section id="not-found">
        <SectionBuilder>
          <div className="content">
            <div>
              <h1>Either you made a spelling mistake, or I broke something</h1>
            </div>
            <div className='title-to-text'>
              <hr />
            </div>
            <div className='title-to-text'>
              <p>Use the navigation in the header or footer to find what you’re looking for.</p>
            </div>
            <div className='text-to-text'>
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
            </div>
          </div>
        </SectionBuilder>
      </section>
    </>
  );
}