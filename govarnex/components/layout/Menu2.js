import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* Home variants 2 & 3 removed */}

            <ul className="main-menu__list one-page-scroll-menu">
                
                
                <li className="scrollToLink"><Link href="#home">Home</Link></li>
                <li className="scrollToLink"><Link href="#about">About</Link></li>
                <li className="scrollToLink"><Link href="#services1">Services</Link></li>
                <li className="scrollToLink"><Link href="#team">Team</Link></li>
                <li className="scrollToLink"> <Link href="#news">News</Link> </li>
                <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="/">Home Page 01</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}
