import Link from "next/link"

function Footer() {
    return (
        <footer className="text-white m-20">

            <p>Made with 💙 By   <Link href={`https://twitter.com/HAPPYS1NGH/`} target="_blank" className=" underline">
                HappyS1ngh
            </Link>
            </p>
            <p className="mt-4">Contribute to the <Link href={`https://github.com/HAPPYS1NGH/Arbitrum-Faucet`} target="_blank" className=" underline">
                Repo
            </Link>
            </p>
        </footer>
    )
}

export default Footer