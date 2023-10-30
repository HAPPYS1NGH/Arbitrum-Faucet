import React from 'react'
import { networks } from '@/constants'
import Link from 'next/link'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'

function NetworkInfo({ network }) {
    const leftNetwork = networks[(networks.indexOf(network) - 1) % networks.length]
    const rightNetwork = networks[(networks.indexOf(network) + 1) % networks.length]
    return (
        <div className='text-white text-center w-3/4'>
            <div className='flex bg-electric-blue p-3 border-white border-2 items-center justify-between'>
                <Link href={`/${leftNetwork}`}>
                    <FaRegArrowAltCircleLeft className="text-white text-2xl" />
                </Link>
                <h1 className='mx-3 font-bold text-xl'>{network.toUpperCase()}</h1>
                <Link href={`/${rightNetwork}`}>
                    <FaRegArrowAltCircleRight className="text-2xl" />
                </Link>
            </div>
            <div className=''>
                <div>
                    <p>Latest Block</p>
                    <h1>jjjj</h1>
                </div>
            </div>
        </div>
    )
}

export default NetworkInfo

//  w-72 rounded-lg text-white font-bold text-xl tracking-wider border-4 border-white