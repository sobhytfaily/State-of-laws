'use client'
import Layout from "@/components/layout/Layout"
import TestimonialSlider03 from "@/components/slider/TestimonialSlider03"
import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
                <div>
                {/*Start About Style2 */}
                <section className="about-style2 about-style2--about">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-style2__img">
                                    <div className="shape1 rotate-me"><img src="assets/images/shapes/thm-shape1.png" alt="#" /></div>
                                    <div className="shape2 float-bob-y"><img src="assets/images/shapes/thm-shape1.png" alt="#" />
                                    </div>
                                    <div className="about-style2__img-video-box text-center">
                                        
                                        <a onClick={() => setOpen(true)} className="video-popup">
                                            <div className="about-style2__img-video-box-icon">
                                                <span className="icon-play-1"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                        <div className="title">
                                            <h3>Watch Leader <br /> Talk</h3>
                                        </div>
                                    </div>
                                    <div className="inner">
                                        <img src="assets/images/about/about-page-about-img1.jpg" alt="#" />
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-6">
                                <div className="about-style2__content">
                                    <div className="sec-title">
                                        <div className="sub-title">
                                            <h6>About State of laws</h6>
                                        </div>
                                        <h2>Welcome & Support <br /> To State of laws City Municipal</h2>
                                    </div>
                                    <div className="about-style2__content-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit mi
                                            urna nulla at tincidunt feugiat vulputate. Ante facilisis face pellentesque quis
                                            egestas metus, mauris dictum sollicitudin hendrerit quis in magna cras adipiscing
                                            posuere augue imperdiet arcu.</p>
                                    </div>

                                    <div className="about-style2__content-bottom">
                                        <div className="inner">
                                            <ul>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>Improving all types of opportunities</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>Quick solutions for daily problems</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>Community that grows larger</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <ul className="about-style2--about__social-links">
                                            <li><Link href="#"><span className="icon-facebook-app-symbol"></span></Link></li>
                                            <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                            <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End About Style2 */}

                {/* Services section removed per request */}


                
                {/*Start Government Voice */} 
                <section className="government-voice clearfix">
                    <div className="shape1 rotate-me"><img src="assets/images/shapes/thm-shape1.png" alt="#" /></div>
                    <div className="auto-container">
                        <div className="row">
                            {/*Start Government Voice Content */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="government-voice__content">
                                    <div className="sec-title">
                                        <div className="sub-title">
                                            <h6>Mayor of State of laws</h6>
                                        </div>
                                        <h2>Major Voice of City <br /> Government</h2>
                                    </div>
                                    <div className="government-voice__content-inner">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit mi
                                            urna nulla at tincidunt feugiat vulputate. Ante facilisis face pellentesque quis
                                            egestas metus, mauris dictum sollicitudin hendrerit quis in magna cras adipiscing
                                            posuere augue imperdiet arcu.</p>
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-mark"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Develop the Municipaity</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-mark"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Maintain Financial Integrity</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-mark"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Represent the Public</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Government Voice Content */}

                            {/*Start Government Voice Img */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="government-voice__img">
                                    <div className="shape2 float-bob-y"><img src="assets/images/shapes/thm-shape1.png" alt="#" />
                                    </div>
                                    <div className="inner wow slideInRight" data-wow-delay="500ms" data-wow-duration="2500ms">
                                        <img src="assets/images/resources/government-voice-img1.png" alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/*End Government Voice Img */}
                        </div>
                    </div>

                    {/*Start Government Voice Bottom */}
                    <div className="government-voice__bottom">
                        <div className="auto-container">
                            <div className="row">
                                {/*Start Government Voice Bottom Content */}
                                <div className="col-xl-7 col-lg-9">
                                    <div className="government-voice__bottom-content">
                                        <TestimonialSlider03/>
                                    </div>
                                </div>
                                {/*End Government Voice Bottom Content */}
                            </div>
                        </div>
                    </div>
                    {/*End Government Voice Bottom */}
                </section>
                {/*End Government Voice */}

                {/*Start Cta Style1 */}
                <section className="cta-style1 cta-style1--style2">
                    <div className="cta-style1__bg" style={{backgroundImage: 'url(assets/images/backgrounds/cta-v1-bg.png)'}}></div>
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="cta-style1__inner">
                                    <div className="cta-style1__title">
                                        <div className="sec-title">
                                            <div className="sub-title">
                                                <h6>Become Volunteer</h6>
                                            </div>
                                            <h2>Become a Volunteer, Service to Our <br /> City, & Make Difference!</h2>
                                        </div>
                                    </div>

                                    <div className="cta-style1__btn">
                                        <Link className="btn-one" href="#">
                                            <span className="txt">Become Volunteer</span>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Cta Style1 */}

                </div>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
            </Layout>
        </>
    )
}


