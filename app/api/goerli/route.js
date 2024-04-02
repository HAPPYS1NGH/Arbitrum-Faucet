import { goerliClient } from "@/lib/client"

export async function GET() {
  try {
    console.log("goerliClient", goerliClient)
    let blockNumber = await goerliClient.getBlockNumber()
    let gasPrice = await goerliClient.getGasPrice()
    blockNumber = blockNumber.toString()
    gasPrice = gasPrice.toString()
    gasPrice = gasPrice / 1e9
    gasPrice = gasPrice.toFixed(2)
    gasPrice = `${gasPrice} Gwei`
    console.log("blockNumber", blockNumber)
    console.log("gasPrice", gasPrice)
    return Response.json({ blockNumber, gasPrice })
  } catch (err) {
    console.log("error", err)
    return Response.error({ error: err })
  }
}
