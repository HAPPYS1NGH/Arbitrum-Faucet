import { createPublicClient, http, fallback } from "viem";
import { arbitrumSepolia, sepolia } from "viem/chains";

const sepoliaRpc = process.env.SEPOLIA_RPC;
const arbitrumSepoliaRpc = process.env.ARBITRUM_SEPOLIA_RPC;

export const sepoliaClient = createPublicClient({
  chain: sepolia,
  transport: fallback([
    http(sepoliaRpc, {
      batch: true,
    }),
    http("https://eth-sepolia.public.blastapi.io"),
  ]),
});

export const arbitrumSepoliaClient = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(arbitrumSepoliaRpc, {
    batch: true,
  }),
});
