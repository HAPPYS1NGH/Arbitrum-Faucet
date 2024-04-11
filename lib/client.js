import { createPublicClient, http, fallback } from "viem"
import { arbitrumSepolia, sepolia } from "viem/chains"
import { arbitrumStylus } from "@/lib/utils/arbitrumStylus"

const apiKey = process.env.NEXT_PUBLIC_API_KEY
const sepoliaRpc = process.env.NEXT_PUBLIC_SEPOLIA_RPC
const arbitrumSepoliaRpc = process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC

export const sepoliaClient = createPublicClient({
  chain: sepolia,
  transport: fallback([
    http(sepoliaRpc, {
      batch: true,
    }),
    http("https://eth-sepolia.public.blastapi.io"),
  ]),
})

export const arbitrumSepoliaClient = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(arbitrumSepoliaRpc, {
    batch: true,
  }),
})

export const stylusClient = createPublicClient({
  chain: arbitrumStylus,
  transport: http("https://stylus-testnet.arbitrum.io/rpc"),
})
