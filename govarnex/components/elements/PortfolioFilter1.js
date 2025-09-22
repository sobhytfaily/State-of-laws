
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")

    // Count items for each category by checking rendered DOM nodes.
    // This avoids changing data models in the template and works with the static markup here.
    const countFor = (cat) => {
        try {
            const container = document.querySelector('.items-container')
            if (!container) return 0
            const items = Array.from(container.querySelectorAll('.masonry-item'))
            if (cat === '*') return items.length
            return items.filter(i => i.classList.contains(cat)).length
        } catch (e) {
            return 0
        }
    }



    return (
        <>

            <div className="portfolio-style1--grid__menu-box clearfix">
                <ul className="filter-tabs filter-btns clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>VIEW ALL <span className="count">{countFor('*')}</span></li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>CONFERENCE <span className="count">{countFor('cat-1')}</span></li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>CELEBRATION <span className="count">{countFor('cat-2')}</span></li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>TURIST <span className="count">{countFor('cat-3')}</span></li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>GOVERNMENT <span className="count">{countFor('cat-4')}</span></li>
                </ul>
            </div>
            <div className="items-container row clearfix">
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12">
                <div className="portfolio-style1__single">
                    <div className="portfolio-style1__single-img">
                        <div className="inner">
                            <img src="assets/images/resources/portfolio-grid-img1.jpg" alt="#" />
                            <div className="text-box">
                                <p>Metro Train</p>
                                <h2><Link href="#">City Metro Train</Link></h2>
                            </div>
                            <div className="portfolio-style1__link">
                                <Link className="img-popup"
                                    href="assets/images/resources/portfolio-grid-img1.jpg"><span
                                        className="icon-plus"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-2 col-lg-4 col-md-6 col-sm-12">
                <div className="portfolio-style1__single">
                    <div className="portfolio-style1__single-img">
                        <div className="inner">
                            <img src="assets/images/resources/portfolio-grid-img2.jpg" alt="#" />
                            <div className="text-box">
                                <p>Tourist Guide</p>
                                <h2><Link href="#">Main Tourist Spots</Link></h2>
                            </div>
                            <div className="portfolio-style1__link">
                                <Link className="img-popup"
                                    href="assets/images/resources/portfolio-grid-img2.jpg"><span
                                        className="icon-plus"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-1 cat-2 cat-4 col-lg-4 col-md-6 col-sm-12">
                <div className="portfolio-style1__single">
                    <div className="portfolio-style1__single-img">
                        <div className="inner">
                            <img src="assets/images/resources/portfolio-grid-img3.jpg" alt="#" />
                            <div className="text-box">
                                <p>Golf day</p>
                                <h2><Link href="#">Mayor Golf Day</Link></h2>
                            </div>
                            <div className="portfolio-style1__link">
                                <Link className="img-popup"
                                    href="assets/images/resources/portfolio-grid-img3.jpg"><span
                                        className="icon-plus"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-2 cat-3 col-lg-4 col-md-6 col-sm-12">
                <div className="portfolio-style1__single">
                    <div className="portfolio-style1__single-img">
                        <div className="inner">
                            <img src="assets/images/resources/portfolio-grid-img4.jpg" alt="#" />
                            <div className="text-box">
                                <p>Visit Museum</p>
                                <h2><Link href="#">City Great Museum</Link></h2>
                            </div>
                            <div className="portfolio-style1__link">
                                <Link className="img-popup"
                                    href="assets/images/resources/portfolio-grid-img4.jpg"><span
                                        className="icon-plus"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-2 cat-1 col-lg-4 col-md-6 col-sm-12">
                <div className="portfolio-style1__single">
                    <div className="portfolio-style1__single-img">
                        <div className="inner">
                            <img src="assets/images/resources/portfolio-grid-img5.jpg" alt="#" />
                            <div className="text-box">
                                <p>Visit Museum</p>
                                <h2><Link href="#">
                                        Town of Maximonia</Link></h2>
                            </div>
                            <div className="portfolio-style1__link">
                                <Link className="img-popup"
                                    href="assets/images/resources/portfolio-grid-img5.jpg"><span
                                        className="icon-plus"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-3  col-lg-4 col-md-6 col-sm-12">
                <div className="portfolio-style1__single">
                    <div className="portfolio-style1__single-img">
                        <div className="inner">
                            <img src="assets/images/resources/portfolio-grid-img6.jpg" alt="#" />
                            <div className="text-box">
                                <p>Visit Museum</p>
                                <h2><Link href="#">Ancient Roman Sculpture</Link></h2>
                            </div>
                            <div className="portfolio-style1__link">
                                <Link className="img-popup"
                                    href="assets/images/resources/portfolio-grid-img6.jpg"><span
                                        className="icon-plus"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
