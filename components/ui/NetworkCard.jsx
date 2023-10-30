import React from 'react'
import Link from 'next/link'

function NetworkCard({ name }) {
    return (
        <Link href={`/${name}`} className='my-5 '>
            <div className=' bg-electric-blue w-72 p-4 rounded-lg text-white font-bold text-xl tracking-wider border-4 border-white'>
                {name.toUpperCase()}
            </div>
        </Link>
    )
}

export default NetworkCard