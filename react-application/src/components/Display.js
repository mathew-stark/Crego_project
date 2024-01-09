import React, { useContext, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from '../App';

const Display = () => {
  const { data } = useContext(Context);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    const jsonString = JSON.stringify(data, null, 2);
    navigator.clipboard.writeText(jsonString)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 2000);
      })
      .catch((err) => console.error('Unable to copy to clipboard', err));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">JSON Display</h2>
      <div className="mb-3">
        <button className="btn btn-primary mr-2" onClick={handleCopyClick}>
          Copy
        </button>
        {copySuccess && <div className="mt-2 text-success">Copied to clipboard!</div>}
      </div>
      <SyntaxHighlighter language="json" style={coy}>
        {JSON.stringify(data, null, 2)}
      </SyntaxHighlighter>
    </div>
  );
};

export default Display;
