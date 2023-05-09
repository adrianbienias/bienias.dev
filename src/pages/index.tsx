import Links from "@/components/links"
import Timeline from "@/components/timeline"
import Head from "next/head"
import Obfuscate from "react-obfuscate"

export default function Home() {
  return (
    <>
      <Head>
        <title>Adrian Bienias | bienias.dev</title>
        <meta
          name="description"
          content="Brief information about Adrian Bienias"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <div className="px-4 py-10 md:py-20 lg:py-40 bg-slate-700 bg-cover bg-center bg-hero">
          <div className="max-w-screen-sm mx-auto mb-16">
            <div>
              <div className="mb-16">
                <h1 className="text-5xl mb-2 text-slate-50">Adrian Bienias</h1>

                <h2 className="font-light tracking-wide text-slate-100 mb-10">
                  Full-Stack Software Engineer
                </h2>

                <Obfuscate
                  email="adrian@bienias.dev"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center text-slate-50 text-xl no-underline hover:no-underline border-solid border-t-0 border-x-0 border-b hover:border-none border-b-slate-300"
                  obfuscateChildren={false}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z"
                    />
                  </svg>
                  <Obfuscate element="span" className="ml-2">
                    adrian@bienias.dev
                  </Obfuscate>
                </Obfuscate>
              </div>

              <div className="max-w-screen-sm mx-auto">
                <Links />
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-16">
          <div className="max-w-screen-sm mx-auto mb-16">
            <h2 className="mb-12">Moja historia</h2>
            <Timeline />
          </div>
        </div>

        {/* Prywatne lekcje, konsultacje, wsparcie w rozwoju projektów webowych */}
        {/* Personalny trening web developmentu */}
        {/* Co mówią o mnie inni (testimoniale) */}
      </main>

      <div className="px-4">
        <footer className="mb-4">
          <p className="text-slate-400 mb-0 text-sm text-center">
            Strona wykorzystuje pliki cookies i podobne technologie. Jeśli nie
            wyrażasz na to zgody, zmień ustawienia w swojej przeglądarce.
          </p>
        </footer>
      </div>
    </>
  )
}
