export async function getLastTransactionTimestampForAddress(fromAddress) {
  console.log("GET request made");
  try {
    const res = await fetch(
      `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      {
        cache: "no-cache",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "alchemy_getAssetTransfers",
          params: [
            {
              fromBlock: "0x0",
              toBlock: "latest",
              fromAddress: fromAddress,
              category: ["external"],
              order: "desc",
              withMetadata: true,
              excludeZeroValue: true,
              maxCount: "0x1",
            },
          ],
          id: 1,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    console.log(data.result.transfers[0]);
    const date = new Date(data.result.transfers[0].metadata.blockTimestamp);
    const timestamp = date.getTime() / 1000;
    console.log("TIMESTAMP", timestamp);
    return timestamp;
  } catch (error) {
    console.error("Error in GET request:", error);
  }
}
