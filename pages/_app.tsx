import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
