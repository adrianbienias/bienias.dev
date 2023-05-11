/** @type {import('next').NextConfig} */

function getDistDir() {
  if (process.env.NODE_ENV !== "production") {
    return null
  }

  const locale = process.env.NEXT_PUBLIC_LOCALE
  switch (locale) {
    case "pl": {
      return "adrianbienias.pl-pre"
    }
    case "en": {
      return "adrianbienias.com-pre"
    }
    default: {
      throw new Error("Missing 'NEXT_PUBLIC_LOCALE' env variable")
    }
  }
}

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: getDistDir(),
}

module.exports = nextConfig
