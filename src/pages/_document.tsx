import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>nttare — @nttare0 · Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of nttare (@nttare0), a software engineer in Rwanda building for the web — 32 public repos, 22 original projects, mostly TypeScript. Hireable."
        />
        <meta property="og:title" content="nttare — @nttare0 · Software Engineer" />
        <meta
          property="og:description"
          content="Portfolio of nttare, a software engineer in Rwanda building for the web."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
