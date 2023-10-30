import Link from "next/link"

function Footer() {
    return (
        <footer className="text-white m-20">
            <Link href={`https://twitter.com/happys1ngh`}>
                <p> By HappyS1ngh</p>
            </Link>
        </footer>
    )
}

export default Footer