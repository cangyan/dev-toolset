import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import { Provider } from 'react-redux';
import ErrorToast from "../components/ErrorToast/main";
import MainLayout from "../components/MainLayout/main";
import theme from "../components/theme";
import { useStore } from '../store';

const clientSideEmotionCache = createCache({ key: 'css' });

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>程序员常用工具集</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#00bbd4" />
      </Head>

      {/* Scripts moved from Head to Script components */}
      <Script src="/json/jsoneditor.min.js" strategy="beforeInteractive" />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-41772362-3"
        strategy="afterInteractive"
      />
      <Script src="/_baidu_tongji.js" strategy="afterInteractive" />
      <Script src="/_google.analytics.js" strategy="afterInteractive" />

      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={store}>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
            <ErrorToast />
          </Provider>
        </ThemeProvider>
      </CacheProvider>
    </React.Fragment>
  );
}
