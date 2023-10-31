'use client'
import { useState, useEffect } from 'react'
import { networks } from '@/constants'
import Link from 'next/link'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

function NetworkInfo({ network }) {
    const [blockNumber, setBlockNumber] = useState(0)
    const [gasPrice, setGasPrice] = useState(0)
    const leftNetwork = networks[(networks.indexOf(network) - 1) == -1 ? networks.length - 1 : networks.indexOf(network) - 1]
    const rightNetwork = networks[(networks.indexOf(network) + 1) == networks.length ? 0 : networks.indexOf(network) + 1]


    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching data")
            try {
                const response = await fetch(`/api/${network.toLowerCase()}`);
                const data = await response.json();
                setBlockNumber(data.blockNumber);
                setGasPrice(data.gasPrice);
            } catch (error) {
                console.error('Error fetching block number and gas fee:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='text-white text-center mb-6  w-100 border-white rounded-lg border-3'>
            <div className='flex bg-electric-blue p-5  items-center justify-between'>
                <Link href={`/${leftNetwork}`}>
                    <AiOutlineArrowLeft className="text-white text-2xl" />
                </Link>
                <h1 className='mx-3 font-bold text-xl'>{network.toUpperCase()}</h1>
                <Link href={`/${rightNetwork}`}>
                    <AiOutlineArrowRight className="text-2xl" />
                </Link>
            </div>
            <div className='flex justify-around py-5  border-t-3 '>
                <div>
                    <p className='text-sm'>Latest Block</p>
                    <h1 className=' text-lg font-semibold '>{blockNumber}</h1>
                </div>
                <div>
                    <p className='text-sm'>Gas Price</p>
                    <h1 className=' text-lg font-semibold'>{gasPrice}</h1>
                </div>
            </div>
            <div className='bg-white text-navy text-xs py-2 tracking-wider '>
                <div style={{ position: 'relative' }}>
                    <div
                        style={{
                            animationName: 'slide-left',
                            animationDuration: '7s',
                            animationTimingFunction: 'linear',
                            animationIterationCount: 'infinite',
                        }}
                    >
                        Goerli is getting depraceted so move on to Sepolia.
                    </div>
                    <style>
                        {`
          @keyframes slide-left {
            0% {
              transform: translateX(100%); /* Move the element off-screen to the right */
            }
            100% {
              transform: translateX(-100%); /* Move the element off-screen to the left */
            }
          }
        `}
                    </style>
                </div>
            </div>

        </div>
    )
}

export default NetworkInfo

//  w-72 rounded-lg text-white font-bold text-xl tracking-wider border-4 border-white