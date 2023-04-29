import React, { useState, useEffect, useContext } from 'react';
import Markdown from 'markdown-to-jsx';
import { useParams } from 'react-router-dom';
import Btn from '../components/button/Btn';
import Code from '../utils/CodeMD';
import AnimateInView from '../layout/AnimateInView';
import { ThemeContext } from '../context/ThemeContext';

export default function Article() {
  const params = useParams();
  const { toggleTheme, toggleThemeColor } = useContext(ThemeContext)
  const [article, setArticle] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const req = await fetch(`/data/markdown/${params.id}.md`);
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
        </div>
      </AnimateInView>
    </article >
  );
}
