import { stylusClient } from "@/lib/client";
import { faucetInfo } from "@/constants";
import cheerio from "cheerio"; // Import Cheerio for HTML parsing

export async function GET() {
  try {
    const faucets = faucetInfo.Stylus;
    console.log("faucets", faucets);
    const addresses = faucets.map((faucet) => faucet.address);
    console.log("addresses", addresses);
    const faucetData = await Promise.all(
      faucets.map(async ({ address, link }) => {
        let faucetDown = false;
        try {
          const bal = await stylusClient.getBalance({
            address: address,
          });

          // Convert Big Number and divide by 10^18 to get the balance in ETH and convert
          // the balance to 4 decimal places
          const balance =
            bal.toString().slice(0, -18) +
            "." +
            bal.toString().slice(-18).slice(0, 4);
          const res = await fetch(link, {
            cache: "no-store",
          });

          // Check if response status is OK
          if (res.ok) {
            const html = await res.text();
            const $ = cheerio.load(html); // Load HTML into Cheerio

            // Search for <p> tags containing specific text
            const maintenanceMessage = $(
              "p:contains('Arbitrum Stylus Faucet is undergoing maintenance, please try again later.')"
            ).text();

            // If the message is found, log it
            if (maintenanceMessage.trim() !== "") {
              faucetDown = true;
              console.log(
                "Maintenance message found:",
                maintenanceMessage.trim()
              );
            }
          } else {
            console.error("Failed to fetch HTML:", res.status);
          }

          return {
            balance: balance,
            lastActive: "few days ago",
            timestamp: 1716700808,
            address: address,
            faucetDown: faucetDown,
          };
        } catch (e) {
          return {
            balance: "0",
            lastActive: "0",
            timestamp: 0,
            address: address,
          };
        }
      })
    );
    console.log("faucetData", faucetData);

    return Response.json({ faucetData });
  } catch (e) {
    console.log(e);
    return Response.error("Error");
  }
}
