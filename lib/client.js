import { createPublicClient, http } from "viem"
import { arbitrumGoerli, arbitrumSepolia } from "viem/chains"

const goerliClient = createPublicClient({
  chain: arbitrumGoerli,
  transport: http(),
})

export const goerliBlockNumber = await goerliClient.getBlockNumber()

const sepoliaClient = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(),
})

export const sepoliaBlockNumber = await sepoliaClient.getBlockNumber()
