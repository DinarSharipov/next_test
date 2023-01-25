import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFViewer: React.FC = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.js">
      <div style={{ height: '750px' }}>
        <Viewer
          fileUrl="../../assets/lis.pdf"
          plugins={[
            defaultLayoutPluginInstance,
          ]}
        />
      </div>
    </Worker>
  );
};

export default PDFViewer;
