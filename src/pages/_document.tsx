import { Html, Head, Main, NextScript } from "next/document"

const locale = process.env.NEXT_PUBLIC_LOCALE

export default function Document() {
  return (
    <Html lang={locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
