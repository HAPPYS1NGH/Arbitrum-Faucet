import { stylusClient } from "@/lib/client"

export async function GET() {
  let blockNumber = await stylusClient.getBlockNumber()
  let gasPrice = await stylusClient.getGasPrice()
  blockNumber = blockNumber.toString()
  gasPrice = gasPrice.toString()
  gasPrice = gasPrice / 1e9
  gasPrice = gasPrice.toFixed(2)
  gasPrice = `${gasPrice} Gwei`
  console.log("blockNumber", blockNumber)
  console.log("gasPrice", gasPrice)
  return Response.json({ blockNumber, gasPrice })
}
