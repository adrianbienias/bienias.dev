import { Media, Props as MediaProps } from "@/components/timeline-media"

type Props = {
  title: string
  date: string
  content?: React.ReactNode
  medias?: MediaProps[]
}

export function TimelineItem({ title, date, content, medias }: Props) {
  return (
    <li className="group">
      <div className="grid grid-cols-[32px_1fr]">
        <div className="row-span-2 relative flex flex-col items-center">
          <div className="absolute w-8 h-8 -mt-0.5 flex items-center justify-center bg-slate-100 rounded-full ring-8 ring-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V3q0-.425.288-.713T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.713T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Zm7-6q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm-4 0q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm8 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14Zm-4 4q-.425 0-.713-.288T11 17q0-.425.288-.713T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18Zm-4 0q-.425 0-.713-.288T7 17q0-.425.288-.713T8 16q.425 0 .713.288T9 17q0 .425-.288.713T8 18Zm8 0q-.425 0-.713-.288T15 17q0-.425.288-.713T16 16q.425 0 .713.288T17 17q0 .425-.288.713T16 18Z"
              />
            </svg>
          </div>
          <div className="group-[:not(:last-of-type)]:bg-slate-200 bg-gradient-to-b from-slate-100 to-transparent w-[2px] h-full pb-24"></div>
        </div>

        <div className="order-none flex justify-start mb-8 ml-4">
          <div className="text-left">
            <h3 className="flex items-center mb-1 text-xl font-normal">
              {title}
            </h3>

            <time className="text-slate-500 font-mono">{date}</time>
          </div>
        </div>

        <div className="text-base font-normal text-gray-500 mb-16 ml-4">
          {content}

          {medias && (
            <div
              className={`mt-8 grid gap-4 grid-cols-[repeat(auto-fill,minmax(130px,1fr))]`}
            >
              {medias.map((media, index) => (
                <Media media={media} key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

// Alternative two columns layout
//
// <div className="grid grid-cols-[60px_1fr] lg:grid-cols-[1fr_60px_1fr]">
//   <div className="order-first lg:order-none row-span-2 lg:row-auto relative flex flex-col items-center">
//     ...
//   </div>
//
//   <div className="order-none lg:order-first flex justify-start lg:justify-end">
//     <div className="text-left lg:text-right">...</div>
//   </div>
// </div>
