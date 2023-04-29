import Header from '../components/Header';
import About from '../components/About';
import Project from '../components/Project';
import Blog from '../components/Blog';
import contentData from '../data/contentData';
import aboutData from '../data/aboutData';

const [summary1, summary2] = aboutData;

export default function Home() {

  return (
    <main className='App'>
      <article>
        <Header />
        <About summary={summary1} />
        <Project projects={contentData.projects} />
        <About summary={summary2} />
        <Blog blogs={contentData.blogs} />
      </article>
    </main>
  );
}
