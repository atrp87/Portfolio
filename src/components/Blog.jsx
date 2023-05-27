import SectionHeader from './SectionHeader';
import { Link } from 'react-router-dom';
import AnimateInView from '../layout/AnimateInView';

export default function Blog({ blogs }) {

  const bgColor = {
    react: '#61DAFB',
    javascript: '#F7DF1E',
    ruby: '#CC342D',
  };

  const blogList = blogs.map(blog => {
    return (
      <div className='card' key={blog.id}>
        <div
          style={{ backgroundImage: `url(${blog.img})` }}
          className='card__img'></div>
        <Link
          key={blog.id}
          to={`/article/${blog.id}`}
          aria-label={`Read ${blog.title} article`}
          className='card__link'
        ></Link>
        <div
          style={{ backgroundImage: `url(${blog.img})` }}
          className='card__img-hovered'>

        </div>
        <div className='card__body'>
          <div className='card__body-info'>
            <div
              className='card__body-info__tag'
              style={{ backgroundColor: bgColor[blog.tools.toLowerCase()] || null }}
            >
              {blog.tools}
            </div>
            <div className='card__body-info__time'>{blog.date}</div>
          </div>
          <div className='card__body__about'>
            <p>{blog.content}</p>
          </div>
          <div className='card__body__time'>{blog.readTime}</div>
        </div>
      </div>
    );
  })

  return (
    <section id='blog'>
      <AnimateInView direction='translateX(-200px)'>
        <div className='container'>
          <SectionHeader>
            <h2>
              Project Blogs
            </h2>
            <p>
              Each article will offer insight into my projects, detailing the challenges I faced, the valuable lessons I learned and my overall experience with each project. Each article is a concise read, taking only 3-5 minutes to cover all the essential information.
            </p>
            <p>
              If you would like a format that is brief and to the point, you can refer to my
              <a
                rel='noreferrer'
                href='https://github.com/atrp87'
                target='_blank'
                aria-label='Go to Andrew peattie&#39;s GitHub'
              > GitHub project repositories
              </a>
              .
            </p>
          </SectionHeader>
          <div className='card__container'>
            {blogList}
          </div>
        </div>
      </AnimateInView>
    </section >
  );
};