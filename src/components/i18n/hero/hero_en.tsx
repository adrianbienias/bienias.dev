import Links from "@/components/links"
import Obfuscate from "react-obfuscate"

const introYouTubeId = "DoHID4hyyi4"

export default function Hero_en() {
  return (
    <>
      <div className="px-4 py-8 md:py-16 lg:py-32">
        <div className="max-w-screen-lg mx-auto mb-16 flex flex-col lg:flex-row gap-8 items-center justify-center">
          <div className="lg:w-full">
            <div className="mb-16">
              <h1 className="text-5xl mb-2 text-slate-50">Adrian Bienias</h1>

              <h2 className="font-light tracking-wide text-slate-100 mb-10">
                Full-Stack Software Engineer
              </h2>
            </div>

            <Links />
          </div>

          <div className="w-full max-w-lg">
            <div className="rounded-md overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${introYouTubeId}?controls=0&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="border-none w-full aspect-video"
              />
            </div>

            <div className="mt-4 p-4 flex flex-col sm:flex-row justify-center items-center gap-4 bg-black/10 backdrop-blur-md rounded-md">
              <span className="text-white text-xl">Contact me:</span>

              <Obfuscate
                email="adrian@bienias.dev"
                target="_blank"
                rel="noopener"
                className="inline-flex whitespace-nowrap items-center px-4 py-2 border border-solid border-gray-900 rounded-lg no-underline text-gray-200 hover:text-blue-400 bg-black"
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
          </div>
        </div>
      </div>
    </>
  )
}
