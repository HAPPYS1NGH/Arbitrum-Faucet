import FaucetInfo from "@/components/ui/FaucetInfo";
import NetworkInfo from "@/components/ui/NetworkInfo";

export default async function Page({ params }) {
  const { network } = await params;
  return (
    <div className="flex flex-col items-center ">
      <NetworkInfo network={network} />
      <FaucetInfo network={network} />
    </div>
  );
}
