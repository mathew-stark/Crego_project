import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';

const JsonDisplay = ({ jsonData }) => {
  const jsonRef = useRef(null);

  const copyToClipboard = () => {
    jsonRef.current.select();
    document.execCommand('copy');
  };

  return (
    <div>
      <pre>
        <code>
          <textarea
            ref={jsonRef}
            value={JSON.stringify(jsonData, null, 2)}
            readOnly
            style={{ width: '100%', height: '200px', border: 'none', resize: 'none' }}
          />
        </code>
      </pre>
      <Button variant="success" onClick={copyToClipboard}>
        Copy JSON
      </Button>
    </div>
  );
};

export default JsonDisplay;
