import React from 'react';

const Download= ({ handleDownload }) => {
  return (
    <button onClick={handleDownload} className="your-button-styles">
      Download Image
    </button>
  );
};

export default Download;
