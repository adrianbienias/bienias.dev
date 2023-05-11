import Timeline_en from "./timeline_en"
import Timeline_pl from "./timeline_pl"

const locale = process.env.NEXT_PUBLIC_LOCALE

export default function Timeline() {
  switch (locale) {
    case "en": {
      return <Timeline_en />
    }
    case "pl": {
      return <Timeline_pl />
    }
    default: {
      throw new Error("Missing locale")
    }
  }
}
