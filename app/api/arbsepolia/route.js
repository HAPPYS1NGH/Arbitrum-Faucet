import { arbitrumSepoliaClient } from "@/lib/client";

export async function GET() {
  let blockNumber = await arbitrumSepoliaClient.getBlockNumber();
  let gasPrice = await arbitrumSepoliaClient.getGasPrice();
  blockNumber = blockNumber.toString();
  gasPrice = gasPrice.toString();
  gasPrice = gasPrice / 1e9;
  gasPrice = gasPrice.toFixed(2);
  gasPrice = `${gasPrice} Gwei`;
  return Response.json({ blockNumber, gasPrice });
}
