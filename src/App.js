import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown'

function App() {

  const [markdown, setMarkdown] = useState("# markdown preview");

  return (
  <main>
<section className="markdown">
    <textarea value={markdown} className="input" onChange={(e)=>setMarkdown(e.target.value)}></textarea>
    <article className="result">
    <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
</section>
</main>
  );
}

export default App;
