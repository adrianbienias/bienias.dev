import Head from "next/head"

const locale = process.env.NEXT_PUBLIC_LOCALE

export default function Home_en() {
  return (
    <>
      <Head>
        <title>Adrian Bienias</title>
        <meta name="description" content="Story of Adrian Bienias" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  )
}
