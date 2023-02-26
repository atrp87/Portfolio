import SectionBuilder from '../layout/SectionBuilder'
import Card from './card/Card';

export default function Blog() {

  return (
    <section id='blog'>
      <SectionBuilder>
        <div className='section-headers'>
          <h2>Blog</h2>
          <p>Insight into my projects, including the challenges I faced, how I addressed them, lessons learned, and my overall experience.</p>
        </div>
        <Card />
      </SectionBuilder>
    </section>
  );
}