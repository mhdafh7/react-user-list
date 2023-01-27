import Layout from '../components/layout';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from 'react-query';
import React from 'react';

const queryClient = new QueryClient();

export default function App({Component, pageProps}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
