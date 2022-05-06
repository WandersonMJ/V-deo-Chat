import Head from "next/head";
import App from 'next/app'

import { ThemeProvider } from "styled-components";

import { ContextProvider } from 'context/SocketContext'

import GlobalTheme from "styles/global";
import theme from "styles/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    
    return (
      <ThemeProvider theme={theme}>
        <ContextProvider>

        <Head>
          <title>Vídeo-Chat</title>
          <meta name="theme-color" content={theme.colors.black} />
        </Head>

        <GlobalTheme />

        <Component {...pageProps} />
        </ContextProvider>
      </ThemeProvider>
    );
  }
}
