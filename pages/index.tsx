import Head from 'next/head';
import React from 'react';

const HomePage: React.FC = () => (
  <div className="flex flex-col bg-slate-700 p-2 h-screen">
    <Head>
      <title>Тест Некст</title>
      <meta
        content="next"
        name="keywords"
      />
    </Head>
    <h1>Main Page</h1>
  </div>
);

export default HomePage;
