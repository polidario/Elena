/*************************************************************************
 * 
 *  This file is copied from the tutorial of Shopify.
 *  For more information, visit their website:
 *  https://shopify.dev/tutorials/build-a-shopify-app-with-node-and-react/build-your-user-interface-with-polaris#extend-the-app-component
 * 
 * ***********************************************************************/

import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import translations from '@shopify/polaris/locales/en.json';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Elena App</title>
          <meta charSet="utf-8" />
        </Head>
        <AppProvider i18n={translations}>
            <Component {...pageProps} />
        </AppProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;