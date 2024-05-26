import Link from "next/link"
import Image from "next/image"
import { faucetInfo } from '@/constants'
import { reduceLink } from '@/lib/utils'

async function getFaucetInfo(network) {
    try {
        const response = await fetch(`${process.env.DOMAIN_NAME}/api/${network.toLowerCase()}/faucet`, {
            next: {
                revalidate: 600
            }
        })
        const data = await response.json()
        console.log("/////////FAUCEt DATA//////////");
        return data.faucetData
    } catch (error) {
        console.error('Error fetching faucet info:', error)
    }
}
async function FaucetInfo({ network }) {
    const faucets = faucetInfo[network]
    const faucetData = await getFaucetInfo(network)
    console.log("FAUCETS ")
    console.log(faucets)
    console.log("FAUCET DATA")
    console.log(faucetData)

    return (<>
        {
            faucets.map((faucet, index) => {
                console.log(faucet)
                return (
                    <div key={faucet.name} className="border-3 border-white sm:w-100 w-96 rounded-lg text-white  my-6
                     ">
                        <div className="flex p-5 gap-3">
                            <div>
                                <Link href={faucet.link} target="_blank" >
                                    <Image src={`/${faucet.image}`} alt={faucet.name} width={60} height={60} />
                                </Link>
                            </div>
                            <div className="text-left flex flex-col leading-none gap-3  ">
                                <h1 className="text-2xl  leading-none font-bold">
                                    {faucet.name}
                                </h1>
                                <Link href={faucet.link} className="text-sm" target="_blank" >
                                    {
                                        reduceLink(faucet?.link)
                                    }
                                </Link>
                            </div>
                        </div>
                        <div className='flex justify-around pb-5'>
                            <div>
                                <p className='text-sm'>Amount</p>
                                <h1 className='  font-semibold '>
                                    {
                                        faucet.maxAmount == faucet.minAmount ?
                                            faucet.maxAmount
                                            :
                                            faucet.minAmount + "-" + faucet.maxAmount
                                    }
                                </h1>
                            </div>
                            <div>
                                <p className='text-sm'>Gas Cost</p>
                                <h1 className='  font-semibold'>1 Gwei</h1>
                            </div>
                            <div>
                                <p className='text-sm'>Daily Supply</p>
                                <h1 className='  font-semibold '>{faucet.dailySupply}</h1>
                            </div>
                            <div>
                                <p className='text-sm none'>Required</p>
                                <h1 className='block sm:hidden font-semibold'>  {faucet.required.length > 10 ? faucet.required.substring(0, 10) + '..' : faucet.required}</h1>
                                <h1 className='hidden sm:block font-semibold'>{faucet.required}</h1>

                            </div>
                        </div>


                        <div className=" p-2 border-t-3 bg-electric-blue text-xs">
                            active {faucetData[index].lastActive}
                        </div>
                    </div>
                )

            }
            )
        }
    </>
    )
}

export default FaucetInfo
