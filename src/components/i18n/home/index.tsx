import Home_en from "./home_en"
import Home_pl from "./home_pl"

const locale = process.env.NEXT_PUBLIC_LOCALE

export default function Home() {
  switch (locale) {
    case "en": {
      return <Home_en />
    }
    case "pl": {
      return <Home_pl />
    }
    default: {
      throw new Error("Missing locale")
    }
  }
}
