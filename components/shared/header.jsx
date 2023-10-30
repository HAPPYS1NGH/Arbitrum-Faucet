import Link from "next/link"

function Header() {
    return (
        <header className="m-20 ">
            <Link
                className=" text-center font-bold text-6xl tracking-tight	 shover:cursor-pointer"
                href="/"
            >
                <span className=" text-electric-blue">ARBITRUM </span>
                <span className="text-moon">FAUCET</span>
            </Link>
        </header>
    )
}

export default Header