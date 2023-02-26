import blogImg from '../../assets/images/home/blog.png';
import LinkButton from '../buttons/LinkButton';
import CardItems from './CardItems';

const defaultCard =
  <div className='card'>
    <div className='card--img'>
      <img src={blogImg} alt='pen and paper on wooden bench' />
    </div>
    <div className='card-content'>
      <div className='card--title'>
        <h3>Articles</h3>
      </div>
      <div className='card--text title-to-text'>
        Write ups on the projects I built, problems i had and what i did about them, things i learnt and my experiance. all short 3 minute reads
      </div>
      <div className='text-to-text card-btn default-card-btn'>
        <LinkButton to='/blogs' type='internal'>
          View Blogs
        </LinkButton>
      </div>
    </div>
  </div>

export default function Card({ cardData }) {
  return (

    <>
      {
        cardData ?
          cardData.map((card) => (
            <div className='card' key={card.title}>
              <CardItems card={card} />
            </div>
          ))
          :
          defaultCard
      }
    </>
  );
}
