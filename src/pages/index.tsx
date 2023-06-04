import Footer from "@/components/i18n/footer"
import Hero from "@/components/i18n/hero/"
import Timeline from "@/components/i18n/timeline"

export default function Index() {
  return (
    <>
      <main>
        <div className="bg-slate-700 bg-cover bg-center bg-hero px-4">
          <div className="max-w-screen-lg mx-auto sticky top-0 z-10">
            <nav>
              <div className="flex justify-end">
                <ul className="my-2 px-3 py-1.5 rounded backdrop-blur-sm list-none inline-flex gap-2 text-xl bg-slate-800/50">
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
                      🇺🇸
                      <span className="sr-only">English language version</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <Hero />
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
