// import { useImmerLocalStorageState } from "../lib/hooks";
import GlobalStyle from "../styles";
import useSWR from "swr";
import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

import { createContext, useState } from "react";
import { fetcher, URL } from "../lib/utils";
import heart from "../assets/heart.svg";
import heart1 from "../assets/heart1.png";

export const myDataContext = createContext();
export const favoriteButton = createContext();

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState(heart1);

  console.log("App: " + artPiecesInfo);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{"ERROR: " + error.message}</h1>;
  }
  return (
    <>
      {/* <SWRConfig value={{ fetcher }}> */}
      <favoriteButton.Provider value={artPiecesInfo}>
        <myDataContext.Provider value={data}>
          <GlobalStyle />
          <Layout />
          <Component {...pageProps} />
        </myDataContext.Provider>
      </favoriteButton.Provider>
      {/* </SWRConfig> */}
    </>
  );
}
