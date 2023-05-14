export type Props = {
  url: string
  thumbnail: {
    url?: string
    alt: string
  }
}

export function Media({ media }: { media?: Props }) {
  if (!media) {
    return null
  }

  const { url, thumbnail } = media
  const isYouTubeVideo = url.includes("youtube.com")
  const isVimeoVideo = url.includes("vimeo.com")
  const isVideo = isYouTubeVideo || isVimeoVideo

  if (!thumbnail.url) {
    if (isYouTubeVideo) {
      const youTubeVideoId = url.replace("https://www.youtube.com/watch?v=", "")
      thumbnail.url = `https://i3.ytimg.com/vi/${youTubeVideoId}/mqdefault.jpg`
    } else {
      thumbnail.url = url
    }
  }

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener"
        className="inline-flex rounded overflow-hidden text-slate-50/100 border-solid border-4 border-white drop-shadow-md hover:drop-shadow-lg hover:scale-105"
      >
        <div className="rounded overflow-hidden">
          {isVideo && (
            <div className="absolute w-full h-full flex justify-center items-center hover:animate-pulse text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40%"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m9.5 16.5l7-4.5l-7-4.5v9ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                />
              </svg>
            </div>
          )}

          <img
            src={thumbnail.url}
            alt={thumbnail.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </a>
    </>
  )
}
