import Head from "next/head"

const googleTagId = "G-Z6D26XKEDL"

export default function Head_pl() {
  return (
    <>
      <Head>
        <title>Adrian Bienias</title>
        <meta name="description" content="Historia Adriana Bieniasa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {process.env.NODE_ENV === "production" && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${googleTagId}', {
                    page_path: window.location.pathname,
                  });

                  window.gtag = gtag
                  `,
            }}
          />
        </>
      )}
    </>
  )
}
