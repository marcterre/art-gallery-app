// import { useImmerLocalStorageState } from "../lib/hooks";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { fetcher } from "../lib/utils";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
