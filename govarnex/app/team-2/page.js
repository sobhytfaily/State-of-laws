"use client"
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function TeamTwo() {
    const items = Array.from({ length: 36 })
    const perPage = 20
    const [page, setPage] = useState(1)
    const totalPages = Math.max(1, Math.ceil(items.length / perPage))
    const visible = items.slice((page - 1) * perPage, page * perPage)

    const renderPagination = () => {
        const pages = []
        const delta = 1
        const left = Math.max(1, page - delta)
        const right = Math.min(totalPages, page + delta)

        pages.push(1)
        if (left > 2) pages.push('left-ellipsis')
        for (let p = left; p <= right; p++) {
            if (p !== 1 && p !== totalPages) pages.push(p)
        }
        if (right < totalPages - 1) pages.push('right-ellipsis')
        if (totalPages > 1) pages.push(totalPages)

        return (
            <div className="team-pagination">
                <button
                    onClick={() => setPage(Math.max(1, page - 1))}
                    aria-label="Previous"
                    className="pagination-arrow"
                    disabled={page === 1}
                >
                    ‹
                </button>

                {pages.map((p, i) => {
                    if (p === 'left-ellipsis' || p === 'right-ellipsis') return <span key={i} className="pagination-ellipsis">…</span>
                    const isActive = p === page
                    return (
                        <button
                            key={p}
                            onClick={() => setPage(p)}
                            className={`pagination-page ${isActive ? 'active' : ''}`}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {p}
                        </button>
                    )
                })}

                <button
                    onClick={() => setPage(Math.min(totalPages, page + 1))}
                    aria-label="Next"
                    className="pagination-arrow"
                    disabled={page === totalPages}
                >
                    ›
                </button>
            </div>
        )
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team 2">
                <div>
                    <section className="team-top-map team-pages__top">
                        <div className="auto-container">
                            <div className="team-panel">
                                <div className="team-map-placeholder">Map / Large Image Placeholder</div>
                            </div>
                        </div>
                    </section>

                    <section className="team-pages__title-section">
                        <div className="auto-container text-center">
                            <h3 className="team-pages__title">المرشحين</h3>
                        </div>
                    </section>

                    <section className="team-grid">
                        <div className="auto-container">
                            <div className="row team-grid-row">
                                {visible.map((_, idx) => (
                                    <div key={idx} className="team-card">
                                        <div className="team-card__image" />
                                        <div style={{ textAlign: 'center' }}>
                                            <div className="team-card__role">الوظيفة</div>
                                            <div className="team-card__name">اسم المرشح</div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            <div className="team-pagination-wrapper">
                                {renderPagination()}
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}

// import Link from "next/link"
// export default function Home() {

//     return (
//         <>
//             <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Team 2">
//                 <div>
//                 {/*Start Team Style2 */}
//                 <section className="team-style2 team-style2--style3 team-style2--style3--team2">
//                     <div className="auto-container">
//                         <div className="sec-title text-center">
//                                             {/* Become Volunteer content removed per request */}
//                             {/*Start Team Style2 Single */}
//                             <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
//                                 <div className="team-style2__single">
//                                     <div className="team-style2__single-img">
//                                         <div className="inner">
//                                             <img src="assets/images/team/team-v3-img1.jpg" alt="#" />
//                                             <div className="team-style2__single-content text-center">
//                                                 <h2><Link href="/team-details">Robert Gates</Link></h2>
//                                                 <p>Director</p>
//                                                 <ul className="social-links clearfix">
//                                                     <li><Link href="mailto:yourmail@email.com"><span
//                                                                 className="icon-mail-1"></span></Link></li>
//                                                     <li className="share"><Link href="#"><span className="icon-share"></span></Link>
//                                                         <ul className="social-links-inner">
//                                                             <li><Link href="#"><i className="icon-twitter"></i></Link>
//                                                             </li>
//                                                             <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
//                                                             <li><Link href="#"><i className="icon-instagram"></i></Link></li>
//                                                         </ul>
//                                                     </li>
//                                                     <li><Link href="tel:1234567890"><span className="icon-telephone"></span></Link></li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/*End Team Style2 Single */}

//                             {/*Start Team Style2 Single */}
//                             <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
//                                 <div className="team-style2__single">
//                                     <div className="team-style2__single-img">
//                                         <div className="inner">
//                                             <img src="assets/images/team/team-v3-img2.jpg" alt="#" />
//                                             <div className="team-style2__single-content text-center">
//                                                 <h2><Link href="/team-details">Nicholas Cage</Link></h2>
//                                                 <p>Director</p>
//                                                 <ul className="social-links clearfix">
//                                                     <li><Link href="mailto:yourmail@email.com"><span
//                                                                 className="icon-mail-1"></span></Link></li>
//                                                     <li className="share"><Link href="#"><span className="icon-share"></span></Link>
//                                                         <ul className="social-links-inner">
//                                                             <li><Link href="#"><i className="icon-twitter"></i></Link>
//                                                             </li>
//                                                             <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
//                                                             <li><Link href="#"><i className="icon-instagram"></i></Link></li>
//                                                         </ul>
//                                                     </li>
//                                                     <li><Link href="tel:1234567890"><span className="icon-telephone"></span></Link></li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/*End Team Style2 Single */}

//                             {/*Start Team Style2 Single */}
//                             <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="500ms" data-wow-duration="1500ms">
//                                 <div className="team-style2__single">
//                                     <div className="team-style2__single-img">
//                                         <div className="inner">
//                                             <img src="assets/images/team/team-v3-img3.jpg" alt="#" />
//                                             <div className="team-style2__single-content text-center">
//                                                 <h2><Link href="/team-details">Keanu Reeves</Link></h2>
//                                                 <p>Mayor Assistant</p>
//                                                 <ul className="social-links clearfix">
//                                                     <li><Link href="mailto:yourmail@email.com"><span
//                                                                 className="icon-mail-1"></span></Link></li>
//                                                     <li className="share"><Link href="#"><span className="icon-share"></span></Link>
//                                                         <ul className="social-links-inner">
//                                                             <li><Link href="#"><i className="icon-twitter"></i></Link>
//                                                             </li>
//                                                             <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
//                                                             <li><Link href="#"><i className="icon-instagram"></i></Link></li>
//                                                         </ul>
//                                                     </li>
//                                                     <li><Link href="tel:1234567890"><span className="icon-telephone"></span></Link></li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/*End Team Style2 Single */}

//                             {/*Start Team Style2 Single */}
//                             <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
//                                 <div className="team-style2__single">
//                                     <div className="team-style2__single-img">
//                                         <div className="inner">
//                                             <img src="assets/images/team/team-v3-img4.jpg" alt="#" />
//                                             <div className="team-style2__single-content text-center">
//                                                 <h2><Link href="/team-details">Brendan Fraser</Link></h2>
//                                                 <p>Ambassador</p>
//                                                 <ul className="social-links clearfix">
//                                                     <li><Link href="mailto:yourmail@email.com"><span
//                                                                 className="icon-mail-1"></span></Link></li>
//                                                     <li className="share"><Link href="#"><span className="icon-share"></span></Link>
//                                                         <ul className="social-links-inner">
//                                                             <li><Link href="#"><i className="icon-twitter"></i></Link>
//                                                             </li>
//                                                             <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
//                                                             <li><Link href="#"><i className="icon-instagram"></i></Link></li>
//                                                         </ul>
//                                                     </li>
//                                                     <li><Link href="tel:1234567890"><span className="icon-telephone"></span></Link></li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/*End Team Style2 Single */}

//                             {/*Start Team Style2 Single */}
//                             <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
//                                 <div className="team-style2__single">
//                                     <div className="team-style2__single-img">
//                                         <div className="inner">
//                                             <img src="assets/images/team/team-v3-img5.jpg" alt="#" />
//                                             <div className="team-style2__single-content text-center">
//                                                 <h2><Link href="/team-details">Mel Gibson</Link></h2>
//                                                 <p>Director</p>
//                                                 <ul className="social-links clearfix">
//                                                     <li><Link href="mailto:yourmail@email.com"><span
//                                                                 className="icon-mail-1"></span></Link></li>
//                                                     <li className="share"><Link href="#"><span className="icon-share"></span></Link>
//                                                         <ul className="social-links-inner">
//                                                             <li><Link href="#"><i className="icon-twitter"></i></Link>
//                                                             </li>
//                                                             <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
//                                                             <li><Link href="#"><i className="icon-instagram"></i></Link></li>
//                                                         </ul>
//                                                     </li>
//                                                     <li><Link href="tel:1234567890"><span className="icon-telephone"></span></Link></li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/*End Team Style2 Single */}

//                             {/*Start Team Style2 Single */}
//                             <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="500ms" data-wow-duration="1500ms">
//                                 <div className="team-style2__single">
//                                     <div className="team-style2__single-img">
//                                         <div className="inner">
//                                             <img src="assets/images/team/team-v3-img6.jpg" alt="#" />
//                                             <div className="team-style2__single-content text-center">
//                                                 <h2><Link href="/team-details">Harrison Ford</Link></h2>
//                                                 <p>Assistant</p>
//                                                 <ul className="social-links clearfix">
//                                                     <li><Link href="mailto:yourmail@email.com"><span
//                                                                 className="icon-mail-1"></span></Link></li>
//                                                     <li className="share"><Link href="#"><span className="icon-share"></span></Link>
//                                                         <ul className="social-links-inner">
//                                                             <li><Link href="#"><i className="icon-twitter"></i></Link>
//                                                             </li>
//                                                             <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
//                                                             <li><Link href="#"><i className="icon-instagram"></i></Link></li>
//                                                         </ul>
//                                                     </li>
//                                                     <li><Link href="tel:1234567890"><span className="icon-telephone"></span></Link></li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/*End Team Style2 Single */}
//                         </div>
//                     </div>
//                 </section>
//                 {/*End Team Style2 */}

//                 {/* Become Volunteer CTA removed per request */}
//                 </div>

//             </Layout>
//         </>
//     )
// }