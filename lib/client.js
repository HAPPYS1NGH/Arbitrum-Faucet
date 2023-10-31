import { createPublicClient, http } from "viem"
import { arbitrumGoerli, arbitrumSepolia } from "viem/chains"
import { arbitrumStylus } from "@/lib/utils/arbitrumStylus"
const apiKey = process.env.NEXT_PUBLIC_API_KEY
const goerliRpc = process.env.NEXT_PUBLIC_GOERLI_RPC

export const goerliClient = createPublicClient({
  chain: arbitrumGoerli,
  transport: http(goerliRpc),
})

export const sepoliaClient = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(`https://arbitrum-sepolia.blastapi.io/${apiKey}`),
})

export const stylusClient = createPublicClient({
  chain: arbitrumStylus,
  transport: http(),
})
