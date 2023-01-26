import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { toolbarPlugin, ToolbarSlot } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

const PDFViewer: React.FC = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [fileUrl, setFileUrl] = useState<string>();

  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

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
            >
              <Toolbar>
                {(props: ToolbarSlot) => {
                  const {
                    CurrentPageInput,
                    Download,
                    EnterFullScreen,
                    GoToNextPage,
                    GoToPreviousPage,
                    NumberOfPages,
                    Print,
                    ShowSearchPopover,
                    Zoom,
                    ZoomIn,
                    ZoomOut,
                  } = props;
                  return (
                    <div className="flex">
                      <div style={{ padding: '0px 2px' }}>
                        <ShowSearchPopover />
                      </div>
                      <div style={{ padding: '0px 2px' }}>
                        <ZoomOut />
                      </div>
                      <div style={{ padding: '0px 2px' }}>
                        <Zoom />
                      </div>
                      <div style={{ padding: '0px 2px' }}>
                        <ZoomIn />
                      </div>
                      <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                        <GoToPreviousPage />
                      </div>
                      <div style={{ padding: '0px 2px', width: '4rem' }}>
                        <CurrentPageInput />
                      </div>
                      <div style={{ padding: '0px 2px' }}>
                        /
                        {' '}
                        <NumberOfPages />
                      </div>
                      <div style={{ padding: '0px 2px' }}>
                        <GoToNextPage />
                      </div>
                      <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                        <EnterFullScreen />
                      </div>
                      <div style={{ padding: '0px 2px' }}>
                        <Download />
                      </div>
                      <div style={{ padding: '0px 2px' }}>
                        <Print />
                      </div>
                    </div>
                  );
                }}
              </Toolbar>
            </div>
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
