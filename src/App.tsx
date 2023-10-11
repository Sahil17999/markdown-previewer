//Vite provides an app template where we can only import packages instead of the mainstream CDN links.

import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown";

//placing the markdown as a string so that it can be parsed by the ReactMarkdown component as preview text.
const INITIAL_MARKDOWN = `
# React Markdown Previewer

## Type your Markdown in the Editor!

### Main functionality

- Preview window updates real time with markdown syntax
- The editor has some predefined input on page load

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

\`Is the syntax highlighting even working?\`
\`\`\`javascript
let s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

here is my [linkedIn](https://www.linkedin.com/in/sahil-butt/) and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.

![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)

Coded by **Sahil**
`;

function App() {

  //use state is a react hook which takes a current value to be stored in the current state and returns an array with the current state and set state method.
  const [markDownText, setMarkDownText] = useState(INITIAL_MARKDOWN);

  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: 'Rubik', fontSize: "5rem", textShadow: "5px 5px #333" }}>Markdown Previewer</h1>
      <div className="containers">
        <textarea name="editfield" id="editor" value={markDownText} onChange={(event) => { return setMarkDownText(event.target.value); } }></textarea>
        <div id="preview">
          <ReactMarkdown>{markDownText}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default App;
