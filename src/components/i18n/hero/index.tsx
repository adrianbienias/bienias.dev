import Hero_en from "./hero_en"
import Hero_pl from "./hero_pl"

const locale = process.env.NEXT_PUBLIC_LOCALE

export default function Footer() {
  switch (locale) {
    case "en": {
      return <Hero_en />
    }
    case "pl": {
      return <Hero_pl />
    }
    default: {
      throw new Error("Missing locale")
    }
  }
}
