import Footer from "@/components/i18n/footer"
import Home from "@/components/i18n/home"
import Timeline from "@/components/i18n/timeline"
import Links from "@/components/links"
import Obfuscate from "react-obfuscate"

export default function Index() {
  return (
    <>
      <Home />

      <main>
        <div className="bg-slate-700 bg-cover bg-center bg-hero">
          <div className="max-w-screen-sm mx-auto">
            <nav>
              <ul className="m-0 px-4 py-3 list-none flex justify-end gap-2 text-xl">
                <li>
                  <a
                    href="https://adrianbienias.pl"
                    className="inline-flex text-white no-underline hover:drop-shadow-lg hover:scale-125"
                  >
                    🇵🇱<span className="sr-only">Polska wersja językowa</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://adrianbienias.com"
                    className="inline-flex text-white no-underline hover:drop-shadow-lg hover:scale-125"
                  >
                    🇺🇸<span className="sr-only">English language version</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="px-4 py-8 md:py-16 lg:py-32 ">
            <div className="max-w-screen-sm mx-auto mb-16">
              <div>
                <div className="mb-16">
                  <h1 className="text-5xl mb-2 text-slate-50">
                    Adrian Bienias
                  </h1>

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
        </div>

        <div className="px-4 py-16">
          <div className="max-w-screen-sm mx-auto mb-16">
            <Timeline />
          </div>
        </div>
      </main>

      <div className="px-4">
        <Footer />
      </div>
    </>
  )
}
