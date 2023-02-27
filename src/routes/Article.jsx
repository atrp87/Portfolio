import SectionBuilder from '../layout/SectionBuilder'
import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { useParams } from 'react-router-dom';

export default function Article() {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    async function fetchMarkdown() {
      const response = await fetch(`/src/data/markdown/${id}.md`);
      const text = await response.text();
      setMarkdown(text);
    }
    fetchMarkdown();
  }, [id]);

  return (
    <section id='article'>
      <SectionBuilder>
        <Markdown>
          {markdown}
        </Markdown>
      </SectionBuilder>
    </section>
  );
}
