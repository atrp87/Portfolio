import React, { useState, useEffect, useContext } from 'react';
import Markdown from 'markdown-to-jsx';
import { useParams } from 'react-router-dom';
import Btn from '../components/button/Btn';
import Code from '../utils/CodeMD';
import AnimateInView from '../layout/AnimateInView';
import { ThemeContext } from '../context/ThemeContext';
import authorImg from '../assets/brand/andrew_author.jpg';

export default function Article() {
  const params = useParams();
  const { toggleTheme, toggleThemeColor } = useContext(ThemeContext)
  const [article, setArticle] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const req = await fetch(`/markdown/${params.id}.md`);
        // const req = await fetch(`/src/data/markdown/${params.id}.md`);
        const resp = await req.text();
        setArticle(resp);

      } catch (err) {
        console.log(err);
      }
    }
    fetchArticle();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    return () => {
      return null;
    }
  }, [])

  return (
    <article id='article' className={toggleTheme ? 'light-theme' : 'dark-theme'}>
      <AnimateInView direction='translateY(200px)'>
        <div className='container'>
          <div className='article__content'>
            <div className='article__content-btns'>
              <Btn to='/#blog' type='internal' aria-label='return to all blogs section'>
                All Blogs
              </Btn>
              <label className='switch'>
                <input
                  type='checkbox'
                  checked={toggleTheme}
                  onChange={toggleThemeColor}
                  aria-label='Toggle theme'
                />
                <span className='slider'></span>
              </label>
            </div>
            <Markdown options={{
              overrides: {
                Code: {
                  component: Code
                }
              }
            }}>
              {article}
            </Markdown>
          </div>
          <div className='article__end'>
            <p>I appreciate you taking the time to read about my experience on this project. Thank you for your support.</p>
          </div>
          <section className='article__footer'>
            <div className='article__footer-img-container'>
              <img src={authorImg} alt='Andrew Peattie' />
            </div>
            <div className='article__footer-description'>
              <p>
                Written By&nbsp;
                <a
                  href='https://www.linkedin.com/in/andrew-peattie/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Go to Andrew Peatties&#39;s LinkedIn'
                >
                  Andrew Peattie
                </a>
              </p>
              <p>
                As a web developer, I am passionate about creating responsive and user-friendly websites. Experience working with various front-end technologies, I’m continuously pursuing professional and personal growth.
              </p>
            </div>
          </section>
        </div>
      </AnimateInView >
    </article >
  );
}
