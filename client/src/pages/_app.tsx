import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { Footer, Header } from "@/components";
import { StoreProvider } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <>
        <Header />
        <Component {...pageProps} />
        <ToastContainer />
        <Footer />
      </>
    </StoreProvider>
  );
}
