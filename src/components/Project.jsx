import SectionHeader from './SectionHeader';
import ProjectButtons from './button/ProjectBtn';
import AnimateInView from '../layout/AnimateInView';

export default function Project({ projects }) {

  const projectList = projects.map(prj => {
    const { url } = prj.links[0];

    return (
      <div className='prj' key={prj.id}>
        <div className='prj__content'>
          <a
            className='prj__img'
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Visit ${prj.title} project`}
            style={{ backgroundImage: `url(${prj.image.src}` }}
          >
            <picture>
              <source srcSet={`${prj.image.src}.avif`} type='image/webp' />
              <source srcSet={`${prj.image.src}.png`} type='image/png' />
              <img src={`${prj.image.src}.png`} alt='' />
            </picture>
          </a>
          <div className='prj__body'>
            <span>{prj.tools}</span>
            <div className='prj__title'>{prj.title}</div>
            <div className='prj__text'>{prj.summary} </div>
            <div className='prj__text'>{prj.summary1} </div>
            {prj.info &&
              <div className='prj__info'>{prj.info}</div>
            }
            <ul>
              {prj.lessons.map(lesson => (
                <li key={`${lesson}-${prj.id}`}>{lesson}</li>
              ))}
            </ul>
            <ProjectButtons
              aria={prj.title}
              links={prj.links}
            />
          </div>
        </div>
      </div >
    );
  });

  return (
    <section id='project'>
      <AnimateInView direction='translateX(200px)'>
        <div className='container'>
          <SectionHeader>
            <h2>
              Projects
            </h2>
          </SectionHeader>
          <div className='project-wrapper'>
            {projectList}
          </div>
        </div>
      </AnimateInView>
    </section>
  );
};