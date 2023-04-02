import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  console.log("pageProps: ", pageProps);
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
