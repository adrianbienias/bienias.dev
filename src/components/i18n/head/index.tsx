import Head_en from "./head_en"
import Head_pl from "./head_pl"

const locale = process.env.NEXT_PUBLIC_LOCALE

export default function Head() {
  switch (locale) {
    case "en": {
      return <Head_en />
    }
    case "pl": {
      return <Head_pl />
    }
    default: {
      throw new Error("Missing locale")
    }
  }
}
