// pages/_app.js
import customTheme from "../styles/theme";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "../context/AuthContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ChakraProvider theme={customTheme}>
        <Head>
          <title>PokeApp - Team Building App</title>
          <link rel="icon" href="/img/pokeball-icon.png" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
