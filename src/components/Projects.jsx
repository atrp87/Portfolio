import SectionBuilder from '../layout/SectionBuilder'
import Card from './card/Card';
import cardData from '../data/cardData';

export default function Projects() {

  return (
    <section id='projects'>
      <SectionBuilder>
        <div className='section-headers'>
          <h2>Projects</h2>
          <p>something breif about proojcts</p>
        </div>
        <div className="grid">
          <Card cardData={cardData.projects} />
        </div>
      </SectionBuilder>
    </section>
  );
}