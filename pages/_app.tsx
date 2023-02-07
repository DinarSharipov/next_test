import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import '@react-pdf-viewer/core/lib/styles/index.css';
import MainLayout from '../components/Layouts/MainLayout';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </Provider>
);

export default App;
