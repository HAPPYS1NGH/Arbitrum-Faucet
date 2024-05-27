import { sepoliaClient } from "@/lib/client";
import { faucetInfo } from "@/constants";
import { getLastTransactionTimestampForAddress } from "@/lib/utils/arbitrumSDK";

export async function GET() {
  try {
    const faucets = faucetInfo.Sepolia;
    console.log("faucets", faucets);
    const addresses = faucets.map((faucet) => faucet.address);
    console.log("addresses", addresses);
    const faucetData = await Promise.all(
      addresses.map(async (address) => {
        try {
          const bal = await sepoliaClient.getBalance({
            address: address,
          });

          // Convert Big Number and divide by 10^18 to get the balance in ETH and convert
          // the balance to 4 decimal places
          const balance =
            bal.toString().slice(0, -18) +
            "." +
            bal.toString().slice(-18).slice(0, 4);

          const lastActive = await getLastTransactionTimestampForAddress(
            address
          );
          console.log("lastActive after data.result", lastActive);
          // Convert the time elapsed between the last active time and the current time in UTC accrodingly in minutes, hours, days, weeks, months or years
          const timeElapsed = Date.now() / 1000 - lastActive;
          console.log("timeElapsed", timeElapsed);
          let time = "";

          // Determine the appropriate unit based on the time elapsed
          let unit = "";
          if (timeElapsed < 60) {
            unit = timeElapsed === 1 ? "second" : "seconds";
            time = `${Math.floor(timeElapsed)} ${unit} ago`;
          } else if (timeElapsed < 3600) {
            unit = Math.floor(timeElapsed / 60) === 1 ? "minute" : "minutes";
            time = `${Math.floor(timeElapsed / 60)} ${unit} ago`;
          } else if (timeElapsed < 86400) {
            unit = Math.floor(timeElapsed / 3600) === 1 ? "hour" : "hours";
            time = `${Math.floor(timeElapsed / 3600)} ${unit} ago`;
          } else if (timeElapsed < 604800) {
            unit = Math.floor(timeElapsed / 86400) === 1 ? "day" : "days";
            time = `${Math.floor(timeElapsed / 86400)} ${unit} ago`;
          } else if (timeElapsed < 2628000) {
            unit = Math.floor(timeElapsed / 604800) === 1 ? "week" : "weeks";
            time = `${Math.floor(timeElapsed / 604800)} ${unit} ago`;
          } else if (timeElapsed < 31536000) {
            unit = Math.floor(timeElapsed / 2628000) === 1 ? "month" : "months";
            time = `${Math.floor(timeElapsed / 2628000)} ${unit} ago`;
          } else {
            unit = Math.floor(timeElapsed / 31536000) !== 1 ? "years" : "year";
            time = `${
              timeElapsed
                ? `${Math.floor(timeElapsed / 31536000)} ${unit} ago`
                : "1 year ago"
            } `;
          }

          return {
            balance: balance,
            lastActive: time,
            timestamp: lastActive,
            address: address,
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
