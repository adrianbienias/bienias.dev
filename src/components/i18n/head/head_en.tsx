import Head from "next/head"

const googleTagId = "G-QKF51E14VM"

export default function Head_en() {
  return (
    <>
      <Head>
        <title>Adrian Bienias</title>
        <meta name="description" content="Story of Adrian Bienias" />
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
