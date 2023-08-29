import Header from "@/components/Header";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import IntroAnimation from "@/components/animation";
import Intro from "./intro";
import favicon from "@/public/favicon.ico";
import OGIMAGE from "@/public/jihyeon_portfolio.png";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:title" content="홍지현 포트폴리오" />
        <meta property="og:url" content="https://jihyeon.vercel.app/" />
        <meta property="og:image" content={`${OGIMAGE}`} />
        <meta
          property="og:description"
          content="웹디자이너, 웹퍼블리셔 홍지현 포트폴리오입니다"
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
