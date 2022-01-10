import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProvider } from "../src/context/app";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <ChakraProvider>
      <AppProvider value={{ selectedNews, setSelectedNews }}>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
