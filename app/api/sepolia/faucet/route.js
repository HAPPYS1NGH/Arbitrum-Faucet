import { sepoliaClient } from "@/lib/client"
import { faucetInfo } from "@/constants"

export async function GET() {
  try {
    const sepoliaFaucets = faucetInfo.Sepolia
    const addresses = sepoliaFaucets.map((faucet) => faucet.address)
    const balances = await Promise.all(
      addresses.map(async (address) => await sepoliaClient.getBalance(address))
    )
    console.log("balances", balances)
    const lastTransaction = await Promise.all(
      addresses.map(async (address) => {
        const transaction = await sepoliaClient.getTransaction(
          address,
          "latest"
        )
        console.log("transaction", transaction)
        return transaction
      })
    )
    console.log("lastTransaction", lastTransaction)

    return Response.json({ balances, lastTransaction })
  } catch (e) {
    console.log(e)
    return Response.error("Error")
  }
}
