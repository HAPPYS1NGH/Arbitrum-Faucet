import { arbitrumSepoliaClient } from "@/lib/client"
import { faucetInfo } from "@/constants"

export async function GET() {
  try {
    const faucets = faucetInfo.ArbSepolia
    console.log("faucets", faucets)
    const addresses = faucets.map((faucet) => faucet.address)
    console.log("addresses", addresses)
    const balances = await Promise.all(
      addresses.map(async (address) => {
        const bal = await arbitrumSepoliaClient.getBalance({ address: address })
        return bal
      })
    )
    console.log("balances", balances)
    const lastTransaction = await Promise.all(
      addresses.map(async (address) => {
        console.log("address", address)
        const transaction = await arbitrumSepoliaClient.getTransaction({
          address,
          blockTag: "latest",
        })
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
