import { Montserrat } from "next/font/google"
import "./globals.css"

import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Arbitrum Faucet App",
  description:
    "Arbitrum Faucet App to find the faucets and get testnet tokens for your next project.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}  text-center bg-navy`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
