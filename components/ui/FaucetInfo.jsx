'use client';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import { faucetInfo } from '@/constants';
import { reduceLink } from '@/lib/utils';

function FaucetInfo({ network }) {
    const [faucetData, setFaucetData] = useState([]);
    const faucets = faucetInfo[network];

    useEffect(() => {
        console.log("useEffect triggered with network:", network);

        const getFaucetInfo = async () => {
            try {
                console.log('fetching faucet info for network:', network);
                const response = await fetch(`/api/${network.toLowerCase()}/faucet`, {
                    next: { revalidate: 600 }
                });
                const data = await response.json();
                setFaucetData(data.faucetData);
                console.log('Fetched faucet info:', data);
            } catch (error) {
                console.error('Error fetching faucet info:', error);
            }
        };

        getFaucetInfo();
    }, [network]);

    return (
        <>
            {faucets.map((faucet, index) => (
                <div key={faucet.name} className="border-3 border-white sm:w-100 w-96 rounded-lg text-white my-6">
                    <div className="flex p-5 gap-3">
                        <div>
                            <Link href={faucet.link} target="_blank">
                                <Image src={`/${faucet.image}`} alt={faucet.name} width={60} height={60} />
                            </Link>
                        </div>
                        <div className="text-left flex flex-col leading-none gap-3">
                            <h1 className="text-2xl leading-none font-bold">{faucet.name}</h1>
                            <Link href={faucet.link} className="text-sm" target="_blank">
                                {reduceLink(faucet?.link)}
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-around pb-5'>
                        <div>
                            <p className='text-sm'>Amount</p>
                            <h1 className='font-semibold '>
                                {faucet.maxAmount === faucet.minAmount ? faucet.maxAmount : `${faucet.minAmount}-${faucet.maxAmount}`}
                            </h1>
                        </div>
                        <div>
                            <p className='text-sm'>Gas Cost</p>
                            <h1 className='font-semibold'>1 Gwei</h1>
                        </div>
                        <div>
                            <p className='text-sm'>Daily Supply</p>
                            <h1 className='font-semibold'>{faucet.dailySupply}</h1>
                        </div>
                        <div>
                            <p className='text-sm none'>Required</p>
                            <h1 className='block sm:hidden font-semibold'>{faucet.required.length > 10 ? `${faucet.required.substring(0, 10)}..` : faucet.required}</h1>
                            <h1 className='hidden sm:block font-semibold'>{faucet.required}</h1>
                        </div>
                    </div>
                    <div className="p-2 border-t-3 bg-electric-blue text-xs">
                        active {faucetData.length ? faucetData[index]?.lastActive : "loading..."}
                    </div>
                </div>
            ))}
        </>
    );
}

export default FaucetInfo;
