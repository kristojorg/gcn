import * as React from 'react';
import Head from 'next/head';
import Tabs from '../components/tabs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GCN | Home</title>
        <meta name="description" content="The source for cycling contnet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs />
    </div>
  );
}
