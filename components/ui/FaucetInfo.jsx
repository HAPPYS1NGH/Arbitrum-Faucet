import Link from "next/link"
import Image from "next/image"
import { faucetInfo } from '@/constants'

function FaucetInfo({ network }) {
    const faucets = faucetInfo[network]
    console.log("FAUCETS ")
    console.log(faucets)

    return (<>
        {
            faucets.map((faucet) => {
                console.log(faucet)
                return (
                    <div className="border-3 border-white w-100 rounded-lg text-white  my-6
                     ">
                        <div className="flex p-5 gap-3">
                            <div>
                                <Link href={faucet.link}  >
                                    <Image src={`/${faucet.image}`} alt={faucet.name} width={60} height={60} />
                                </Link>
                            </div>
                            <div className="text-left flex flex-col leading-none gap-3  ">
                                <h1 className="text-2xl  leading-none font-bold">
                                    {faucet.name}
                                </h1>
                                <Link href={faucet.link} className="text-sm" >
                                    {faucet.link.replace("https://", "")}
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
                                <p className='text-sm'>Required</p>
                                <h1 className=' font-semibold'>{faucet.required}</h1>
                            </div>
                        </div>


                        <div className=" p-2 border-t-3 bg-electric-blue text-xs">
                            active 3 minutes ago
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
