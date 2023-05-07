import SectionHeader from './SectionHeader';
import { Link } from 'react-router-dom';
import AnimateInView from '../layout/AnimateInView';

export default function Blog({ blogs }) {

  const bgColor = blogs.map(({ tools }) => {
    let color = tools.toLowerCase();

    if (color.includes('react')) {
      return '#61DAFB'
    }
    if (color.includes('javascript')) {
      return '#F7DF1E'
    }
    if (color.includes('ruby')) {
      return '#CC342D'
    }

    return null;
  });

  const blogList = blogs.map((blog, i) => (
    <div className='blog' key={blog.id}>
      <Link
        to={`/article/${blog.id}`}
        aria-label={`Read ${blog.title} article`}
        className='blog__link'
      >
        {blog.tools &&
          <div
            style={{ backgroundColor: bgColor[i] }}
            className='blog__bg'>
          </div>}
        <div className='blog__title'>
          <h3 >{blog.title}</h3>
        </div>
        <div className='blog__text'>
          {blog.tools}
        </div>
        <div className='blog__text'>
          {blog.info}
        </div>
      </Link>
    </div>
  ));

  return (
    <section id='blog'>
      <AnimateInView direction='translateX(-200px)'>
        <div className='container'>
          <SectionHeader>
            <h2>
              Project Blog
            </h2>
            <p>
              Look back at the code you write and see how you have improved and what you could change etc
              ALOWS ME TO RE ITERATE OVER WHAT I ACTUALY DID
              My blog posts will offer insight into my projects, detailing the challenges I faced, the solutions I devised to overcome them, the valuable lessons I learned, and my overall experience with each project. Each article is a concise read, taking only 3-5 minutes to cover all the essential information</p>
            <p>
              If you would like a format that is brief and to the point, you can refer to my
              <a
                rel='noreferrer'
                href='https://github.com/atrp87'
                target='_blank'
                aria-label='Go to Andrew peattie&#39;s GitHub'
              > GitHub project repositories
              </a>.
            </p>
          </SectionHeader>
          <div className='blog-wrapper'>
            {blogList}
          </div>
        </div>
      </AnimateInView>
    </section >
  );
};