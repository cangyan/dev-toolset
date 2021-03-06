import React from "react";
import { useEffect } from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/theme";
import { Provider } from 'react-redux'
import { useStore } from '../store'
import ErrorToast from "../components/ErrorToast/main";
import MainLayout from "../components/MainLayout/main"

export default function MyApp({ Component, pageProps }) {
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

        <link rel="stylesheet" href="/json/jsoneditor.min.css" />
        <link rel="stylesheet" href="/json/custom.css" />
        <script src="/json/jsoneditor.min.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-41772362-3"></script>
        <script src="/_baidu_tongji.js"></script>
        <script src="/_google.analytics.js"></script>
      </Head>

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
    </React.Fragment>
  );
}
