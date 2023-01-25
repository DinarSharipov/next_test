import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFViewer: React.FC = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [fileUrl, setFileUrl] = useState<string>();

  return (
    <div>
      <input
        onChange={(e) => {
          if (e.target.files) {
            const url = URL.createObjectURL(e.target.files[0]);
            console.log(url);

            setFileUrl(url);
          }
        }}
        type="file"
      />
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.js">
        <div
          className="flex"
          style={{ height: '750px', display: 'flex', backgroundColor: 'red' }}
        >
          <Viewer
            fileUrl={fileUrl || 'sr'}
            plugins={[
              defaultLayoutPluginInstance,
            ]}
          />
        </div>
      </Worker>
    </div>
  );
};

export default PDFViewer;
