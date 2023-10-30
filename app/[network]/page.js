import NetworkInfo from "@/components/ui/NetworkInfo"

export default function Page({ params }) {
  console.log(params)
  return (
    <div>
      <NetworkInfo network={params.network} />
      {params.network}
    </div>
  )
}
