import Footer_en from "./footer_en"
import Footer_pl from "./footer_pl"

const locale = process.env.NEXT_PUBLIC_LOCALE

export default function Footer() {
  switch (locale) {
    case "en": {
      return <Footer_en />
    }
    case "pl": {
      return <Footer_pl />
    }
    default: {
      throw new Error("Missing locale")
    }
  }
}
