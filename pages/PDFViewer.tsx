import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

const PDFViewer: React.FC = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [fileUrl, setFileUrl] = useState<string>();

  return (
    <div>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
          style={{ height: '750px' }}
        >
          <div
            className="rpv-core__viewer"
            style={{
              border: '1px solid rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <div
              style={{
                alignItems: 'center',
                backgroundColor: '#eeeeee',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                display: 'flex',
                padding: '4px',
              }}
            />
          </div>
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
