import { Analytics } from "@vercel/analytics/react"
import { Montserrat } from "next/font/google"
import "./globals.css"

import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

const montserrat = Montserrat({ subsets: ["latin"] })
export const metadata = {
  title: "Arbitrum Faucet App",
  description:
    "Find Arbitrum faucets to get testnet tokens for your next project. Explore Arbitrum, Stylus, Sepolia, and Goerli testnet faucets.",
  keywords: [
    "arbitrum-faucet",
    "testnet tokens arbitrum",
    "Arbitrum",
    "Arbitrum faucet",
    "faucet",
    "Arb faucet",
    "Stylus",
    "Arb Stylus",
    "Arbitrum Stylus",
    "Arbitrum Stylus faucet",
    "Stylus faucet",
    "Sepolia faucet",
    "Goerli faucet",
    "testnet tokens",
    "crypto testnet",
    "blockchain development",
    "blockchain testnet",
    "Ethereum testnet",
    "Ethereum faucet",
    "Arbitrum testnet",
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}  text-center bg-navy`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
