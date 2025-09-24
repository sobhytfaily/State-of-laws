'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            
            {/* End Mobile Menu */}
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}>
                    <i className="icon-plus"></i>
                    </span>
                    <div className="logo-box">
                    <Link href="/" aria-label="logo image">
                        <img src="assets/images/resources/mobile-nav-logo.png" alt="" />
                    </Link>
                    </div>
                    <div className="mobile-nav__container">
                        <ul className="main-menu__list">
                            <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                                <Link href="/#" onClick={handleMobileMenu}>Home</Link>
                                <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                    <li>
                                        <div className="megamenu-content-box">
                                            <div className="container">
                                                <div className="megamenu-content-box__inner">
                                                    <div className="row">

                                                        {/*Start Home Showcase Item */}
                                                        <div className="col-lg-4">
                                                            <div className="home-showcase__item">
                                                                <div className="home-showcase__image">
                                                                    <img src="assets/images/home-showcase/home-showcase-1-1.jpg"
                                                                        alt="" />
                                                                    <div className="home-showcase__buttons">
                                                                        <Link href="/"
                                                                            className="btn-one home-showcase__buttons__item top">
                                                                            <span className="txt" onClick={handleMobileMenu}>Multi
                                                                                Page</span>
                                                                        </Link>
                                                                        <Link href="/index-one-page"
                                                                            className="btn-one home-showcase__buttons__item">
                                                                            <span className="txt" onClick={handleMobileMenu}>One
                                                                                Page</span>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <h3 className="home-showcase__title">
                                                                    Home Page One
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/*End Home Showcase Item */}

                                                        {/*Start Home Showcase Item */}
                                                        <div className="col-lg-4">
                                                            <div className="home-showcase__item">
                                                                <div className="home-showcase__image">
                                                                    <img src="assets/images/home-showcase/home-showcase-1-2.jpg"
                                                                        alt="" />
                                                                    {/* Home Page Two removed */}
                                                                </div>
                                                                <h3 className="home-showcase__title">
                                                                    Home Page Two
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/*End Home Showcase Item */}

                                                        {/*Start Home Showcase Item */}
                                                        <div className="col-lg-4">
                                                            <div className="home-showcase__item">
                                                                <div className="home-showcase__image">
                                                                    <img src="assets/images/home-showcase/home-showcase-1-3.jpg"
                                                                        alt="" />
                                                                    {/* Home Page Three removed */}
                                                                </div>
                                                                <h3 className="home-showcase__title">
                                                                    Home Page Three
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/*End Home Showcase Item */}

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </li>
                                </ul>
                                <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}>
                                    <span className="fa fa-angle-right" />
                                </div>
                            </li>
                            
                            
                            
                            <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}>
                                <Link href="/#" onClick={handleMobileMenu}>About</Link>
                                <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                    <li><Link href="/about" onClick={handleMobileMenu}>About Our Company</Link></li>
                                    <li><Link href="/history" onClick={handleMobileMenu}>Our History</Link></li>
                                </ul>
                                <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}>
                                    <span className="fa fa-angle-right" />
                                </div>
                            </li>
                            <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}>
                                <Link href="/#" onClick={handleMobileMenu}>Services</Link>
                                <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                    <li><Link href="/services" onClick={handleMobileMenu}>Services</Link></li>
                                    <li><Link href="/departments-1" onClick={handleMobileMenu}>Departments One</Link></li>
                                    <li><Link href="/departments-2" onClick={handleMobileMenu}>Departments Two</Link></li>
                                    <li><Link href="/departments-details" onClick={handleMobileMenu}>Departments Details</Link></li>
                                </ul>
                                <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}>
                                    <span className="fa fa-angle-right" />
                                </div>
                            </li>
                            <li className={isActive.key == 6 ? "dropdown current" : "dropdown"}>
                                <Link href="/#" onClick={handleMobileMenu}>Pages</Link>
                                <ul style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                    <li><Link href="/testimonials" onClick={handleMobileMenu}>Testimonials</Link></li>
                                    <li><Link href="/faq" onClick={handleMobileMenu}>Faq</Link></li>
                                    <li><Link href="/portfolio-grid" onClick={handleMobileMenu}>Portfolio One</Link></li>
                                    <li><Link href="/portfolio-masonry" onClick={handleMobileMenu}>Portfolio Two</Link></li>
                                    <li><Link href="/team-1" onClick={handleMobileMenu}>Team One</Link></li>
                                    <li><Link href="/team-2" onClick={handleMobileMenu}>Team Two</Link></li>
                                    <li><Link href="/team-details" onClick={handleMobileMenu}>Team Details</Link></li>
                                    <li><Link href="/events-1" onClick={handleMobileMenu}>Events One</Link></li>
                                    <li><Link href="/events-2" onClick={handleMobileMenu}>Events Two</Link></li>
                                    <li><Link href="/event-details" onClick={handleMobileMenu}>Event Details</Link></li>
                                </ul>
                                <div className={isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(6)}>
                                    <span className="fa fa-angle-right" />
                                </div>
                            </li>
                            <li className={isActive.key == 7 ? "dropdown current" : "dropdown"}>
                                <Link href="/#" onClick={handleMobileMenu}>News</Link>
                                <ul style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                    <li><Link href="/blog" onClick={handleMobileMenu}>News Grid</Link></li>
                                    <li><Link href="/blog-2" onClick={handleMobileMenu}>News Standard</Link></li>
                                    <li><Link href="/blog-details" onClick={handleMobileMenu}>Blog Details</Link></li>
                                </ul>
                                <div className={isActive.key == 7 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(7)}>
                                    <span className="fa fa-angle-right" />
                                </div>
                            </li>
                            <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
                        </ul>






                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </li>
                    <li>
                        <i className="fa fa-phone-alt"></i>
                        <a href="tel:123456789">444 000 777 66</a>
                    </li>
                    </ul>
                    <div className="mobile-nav__social">
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-facebook-square"></a>
                    <a href="#" className="fab fa-pinterest-p"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
            </div>




            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

          

        </>
    )
}
