
import LinkButton from '../buttons/LinkButton';

export default function CardItems({ card }) {

  return (
    <>
      <div className='card--img'>
        <img src={card.image.src} alt={card.image.alt} />
      </div>
      <div className='card-content'>
        <div className='card--title'>
          <h2>{card.title}</h2>
        </div>
        <div className='title-to-text'>
          <p>
            <strong>
              {card.languages}
            </strong>
          </p>
        </div>
        <div className='card--text'>
          <div className='text-to-text'>
            <p>{card.description}</p>
          </div>
          <div className='text-to-text'>
            <p>{card.description1}</p>
          </div>
          {card.learningLessons ?
            <div className='text-to-text'>
              <ul>
                {card.learningLessons.map((lesson, index) => (
                  <li key={index}>{lesson}</li>
                ))}
              </ul>
            </div>
            :
            null
          }
        </div>
        <div className='card-data-btn'>

          {card.links ?
            card.links.map((link) => {
              if (link.type === 'live') {
                return <LinkButton key={link.url} to={link.url} type='internal'>
                  live
                </LinkButton>
              } else if (link.type === 'github') {
                return <LinkButton key={link.url} to={link.url} type='internal'>
                  github
                </LinkButton>
              }
            })
            :
            <LinkButton to='/blogs' type='internal'>
              Read Article
            </LinkButton>
          }
        </div>
      </div>
    </>
  );
}