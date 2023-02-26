import Card from '../components/card/Card';
import SectionBuilder from '../layout/sectionBuilder';
import cardData from '../data/cardData'
import LinkButton from '../components/buttons/LinkButton';
// import Markdown from 'markdown-to-jsx';
// import { useState, useEffect } from 'react';

export default function Blogs() {

  // const [markdownContent, setMarkdownContent] = useState('');

  // useEffect(() => {
  //   import('../data/markdown/article.md')
  //     .then(res => {
  //       fetch(res.default)
  //         .then(res => res.text())
  //         .then(res => setMarkdownContent(res))
  //         .catch(err => console.log(err))
  //     });
  // }, []);


  return (
    <>
      <section id='blogs'>
        <SectionBuilder>

          <div className='section-headers'>
            <h2>Blogs</h2>
            <p>something breif about proojcts</p>
            <LinkButton to='blogs' type='internal'>FILTER</LinkButton>
          </div>
          <div className="grid">
            <Card cardData={cardData.blogs} />
          </div>
        </SectionBuilder>
      </section>
    </>
  );
}