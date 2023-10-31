import Link from "next/link"

function Footer() {
    return (
        <footer className="text-white m-20">
            <Link href={`https://github.com/HAPPYS1NGH/Arbitrum-Faucet`} target="_blank">
                <p> By HappyS1ngh</p>
            </Link>
        </footer>
    )
}

export default Footer