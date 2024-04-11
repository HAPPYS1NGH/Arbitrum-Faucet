import { createPublicClient, http, fallback } from "viem"
import { arbitrumGoerli, arbitrumSepolia, sepolia } from "viem/chains"
import { arbitrumStylus } from "@/lib/utils/arbitrumStylus"

const apiKey = process.env.NEXT_PUBLIC_API_KEY
const goerliRpc = process.env.NEXT_PUBLIC_GOERLI_RPC
const sepoliaRpc = process.env.NEXT_PUBLIC_SEPOLIA_RPC

export const goerliClient = createPublicClient({
  chain: arbitrumGoerli,
  transport: fallback([
    http(goerliRpc, {
      batch: true,
    }),
    http("https://arbitrum-goerli.public.blastapi.io"),
  ]),
})

export const arbitrumSepoliaClient = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(sepoliaRpc, {
    batch: true,
  }),
})

export const stylusClient = createPublicClient({
  chain: arbitrumStylus,
  transport: http("https://stylus-testnet.arbitrum.io/rpc"),
})
