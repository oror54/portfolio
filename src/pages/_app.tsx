import Header from "@/components/Header";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import IntroAnimation from "@/components/animation";
import Intro from "./intro";
import favicon from "@/public/favicon.ico";
import imageUrl from "@/public/images/jihyeon_portfolio.png";

export default function App({ Component, pageProps }: AppProps) {
  let hostUrl = "https://portpolio-oror54.vercel.app/";
  let myImage = `${hostUrl}${imageUrl}`;
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="홍지현 포트폴리오" />
        <meta property="og:description" content="웹디자이너, 웹퍼블리셔" />
        <meta
          property="og:url"
          content="https://portpolio-oror54.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://jihyeon.vercel.app/public/images/jihyeon_portfolio.png"
        />
        <meta
          name="viewport"
          content="user-scalable=no,width=device-width,initial-scale=1"
        />
        <title>jihyeon portfolio</title>
        <link rel="ishortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <div className="wrap">
        <div className="main">
          <IntroAnimation />
          <Intro />
          <Header />
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
