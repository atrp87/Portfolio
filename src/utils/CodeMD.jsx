import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeMD({ children, language }) {

  return (
    <div className='code'>
      <SyntaxHighlighter
        language={language}
        style={materialDark}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}