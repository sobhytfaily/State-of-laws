import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* Home variants 2 & 3 removed */}

            <ul className="main-menu__list">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">About</Link>
                    <ul>
                        <li><Link href="/about">About Our Company</Link></li>
                        <li><Link href="/history">Our History</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Services</Link>
                    <ul>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/departments-1">Departments One</Link></li>
                        <li><Link href="/departments-2">Departments Two</Link></li>
                        <li><Link href="/departments-details">Departments Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="/testimonials">Testimonials</Link></li>
                        <li><Link href="/faq">Faq</Link></li>
                        <li><Link href="/portfolio-grid">Portfolio One</Link></li>
                        <li><Link href="/portfolio-masonry">Portfolio Two</Link></li>
                        <li><Link href="/team-1">Team One</Link></li>
                        <li><Link href="/team-2">Team Two</Link></li>
                        <li><Link href="/team-details">Team Details</Link></li>
                        <li><Link href="/events-1">Events One</Link></li>
                        <li><Link href="/events-2">Events Two</Link></li>
                        <li><Link href="/event-details">Event Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">News</Link>
                    <ul>
                        <li><Link href="/blog-grid">News Grid</Link></li>
                        <li><Link href="/blog-standard">News Standard</Link></li>
                        <li><Link href="/blog-details">News Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Team</Link>
                    <ul>
                        <li><Link href="/team-1">Team One</Link></li>
                        <li><Link href="/team-2">Team Two</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}
