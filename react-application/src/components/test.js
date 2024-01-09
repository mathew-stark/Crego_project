import React from 'react';
import { Container } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Component = () => {
  const codeString = '(num) => num + 1';

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    </Container>
  );
};

export default Component;
