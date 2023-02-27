import Card from '../components/card/Card';
import SectionBuilder from '../layout/sectionBuilder';
import cardData from '../data/cardData'
import LinkButton from '../components/buttons/LinkButton';

export default function Blogs() {

  return (
    <>
      <section id='blogs'>
        <SectionBuilder>
          <div className='section-headers'>
            <h2>Blogs</h2>
            <p>something breif about proojcts</p>
            <LinkButton to='blogs' type='internal'>FILTER</LinkButton>
          </div>
          <div className="grid">
            <Card cardData={cardData.blogs} />
          </div>
        </SectionBuilder>
      </section>
    </>
  );
}