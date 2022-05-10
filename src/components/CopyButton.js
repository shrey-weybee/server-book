import React from 'react';

function CopyButton({ text }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <button className="btn btn-outline-secondary btn-sm h-100 me-2 rounded shadow-none" onClick={copyToClipboard}>
      <i className="fa-solid fa-copy"></i>
    </button>
  );
}

export default CopyButton;
