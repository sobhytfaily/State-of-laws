import Link from "next/link"

export default function Footer1() {
    return (
        <>
            {/*Start footer area */}
            <footer className="footer-area">
                <div className="footer-area__shape1">
                    <img src="assets/images/shapes/footer-v1-shape1.png" alt="#" />
                </div>
                {/*Start Footer */}
                <div className="footer">
                    <div className="auto-container">
                        <div className="row">
                            {/*Start single footer widget */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="single-footer-widget">
                                    <div className="our-company-info">
                                        <div className="footer-logo-style1">
                                            <Link href="/">
                                                <img src="assets/images/footer/footer-logo-1.png" alt="Awesome Logo"
                                                    title="" />
                                            </Link>
                                        </div>
                                        <div className="our-company-info__text">
                                            <p>Tincidunt neque pretium lectus donec risus. Mauris mi tempor nunc orc leo
                                                consequat vitae erat gravida lobortis nec et sagittis.</p>
                                        </div>
                                        <ul className="our-company-info__social-link">
                                            <li>
                                                <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                            </li>
                                            <li>
                                                <Link href="#"><span className="icon-twitter"></span></Link>
                                            </li>
                                            <li>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End single footer widget */}


                            {/*Start single footer widget */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="single-footer-widget single-footer-widget--explore">
                                    <div className="title">
                                        <h3>Explore</h3>
                                    </div>
                                    <div className="footer-widget-links">
                                        <ul>
                                            <li><Link href="#">Employment & Jobs</Link></li>
                                            <li><Link href="#">Government & Elections</Link></li>
                                            <li><Link href="#">Real Estate & Buildings</Link></li>
                                            <li><Link href="#">Health & Medical</Link></li>
                                            <li><Link href="#">Trasport & Traffic</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End single footer widget */}


                            {/*Start single footer widget */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="single-footer-widget single-footer-widget--links">
                                    <div className="title">
                                        <h3>Usefull Links</h3>
                                    </div>
                                    <div className="footer-widget-links">
                                        <ul>
                                            <li><Link href="#">Administration</Link></li>
                                            <li><Link href="#">Fire Services</Link></li>
                                            <li><Link href="#">Business & Taxation</Link></li>
                                            <li><Link href="#">Circular’s And Go’s</Link></li>
                                            <li><Link href="#">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End single footer widget */}


                            {/*Start single footer widget */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.7s">
                                <div className="single-footer-widget footer-widget--contact">
                                    <div className="title">
                                        <h3>Contact</h3>
                                    </div>
                                    <div className="footer-widget--contact-info">
                                        <div className="footer-widget--contact-info-text">
                                            <p>Tortor neque sed tellus est eget dui id ante tristique tristique dolor.</p>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-pin"></span>
                                                </div>
                                                <div className="text">
                                                    <p>New Hyde Park, NY 11040</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-mail-1"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link href="mailto:example@stateoflaws.com">example@stateoflaws.com</Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-telephone"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link href="tel:3336660000">333 666 0000</Link></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End single footer widget */}
                        </div>
                    </div>
                </div>
                {/*End Footer */}

                <div className="footer-bottom">
                    <div className="container">
                        <div className="bottom-inner text-center">
                                <div className="copyright">
                                <p>Copyright 2024 by <Link href="#">State of laws</Link> All Right Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            {/*End footer area */}

        </>
    )
}
