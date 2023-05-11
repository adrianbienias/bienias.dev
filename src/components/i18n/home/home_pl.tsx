import Head from "next/head"

const locale = process.env.NEXT_PUBLIC_LOCALE

export default function Home_pl() {
  return (
    <>
      <Head>
        <title>Adrian Bienias</title>
        <meta name="description" content="Historia Adriana Bieniasa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  )
}
