import SectionBuilder from '../../layout/SectionBuilder';
import Card from './Card';
export default function CardGrid(cardData, sectionTitle, sectionDescription) {

  return (
    <section id='card-grid'>
      <SectionBuilder>
        <div className='section-headers'>
          <h2>{sectionTitle}</h2>
          <p>{sectionDescription}</p>
        </div>
        <Card cardData={cardData} />
      </SectionBuilder>
    </section>
  );
}