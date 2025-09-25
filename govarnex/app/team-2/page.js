"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

// Mock data with the shape of Candidate interface
const mockCandidates = [
    {
        id: "1",
        name: "Nicholas Cage",
        role: "Director",
        image: "assets/images/team/team-v3-img2.jpg",
        details: "/team-details",
        email: "nicholas@example.com",
        phone: "123-456-7890"
    },
    {
        id: "2",
        name: "Keanu Reeves",
        role: "Mayor Assistant",
        image: "assets/images/team/team-v3-img3.jpg",
        details: "/team-details",
        email: "keanu@example.com",
        phone: "123-456-7891"
    },
    {
        id: "3",
        name: "Brendan Fraser",
        role: "Ambassador",
        image: "assets/images/team/team-v3-img4.jpg",
        details: "/team-details",
        email: "brendan@example.com",
        phone: "123-456-7892"
    },
    {
        id: "4",
        name: "Mel Gibson",
        role: "Director",
        image: "assets/images/team/team-v3-img5.jpg",
        details: "/team-details",
        email: "mel@example.com",
        phone: "123-456-7893"
    },
    {
        id: "5",
        name: "Harrison Ford",
        role: "Assistant",
        image: "assets/images/team/team-v3-img6.jpg",
        details: "/team-details",
        email: "harrison@example.com",
        phone: "123-456-7894"
    }
];

export default function TeamTwo() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [candidates, setCandidates] = useState(mockCandidates);
    const [page, setPage] = useState(1);
    const perPage = 4;

    useEffect(() => {
        const loadCandidates = async () => {
            setLoading(true);
            setError(null);
            try {
                // For now, simulate API call with mock data
                // const response = await fetchCandidates(page, perPage);
                // setCandidates(response.candidates);
                setCandidates(mockCandidates);
            } catch (err) {
                setError('Failed to load candidates. Please try again later.');
                console.error('Error loading candidates:', err);
            }
            setLoading(false);
        };

        loadCandidates();
    }, [page]);

    const totalPages = Math.max(1, Math.ceil(candidates.length / perPage));
    const visible = candidates.slice((page - 1) * perPage, page * perPage);
    const renderPagination = () => {
        const pages = [];
        const delta = 1;
        const left = Math.max(1, page - delta);
        const right = Math.min(totalPages, page + delta);
        pages.push(1);
        if (left > 2) pages.push('left-ellipsis');
        for (let p = left; p <= right; p++) {
            if (p !== 1 && p !== totalPages) pages.push(p);
        }
        if (right < totalPages - 1) pages.push('right-ellipsis');
        if (totalPages > 1) pages.push(totalPages);
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
                    if (p === 'left-ellipsis' || p === 'right-ellipsis') return <span key={i} className="pagination-ellipsis">…</span>;
                    const isActive = p === page;
                    return (
                        <button
                            key={p}
                            onClick={() => setPage(p)}
                            className={`pagination-page ${isActive ? 'active' : ''}`}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {p}
                        </button>
                    );
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
        );
    };
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team 2">
                <div>
                    {/* Map placeholder above team cards */}
                    <section className="team-top-map team-pages__top">
                        <div className="auto-container">
                            <div className="team-panel">
                                <div className="team-map-placeholder">Map / Large Image Placeholder</div>
                            </div>
                        </div>
                    </section>
                    {/*Start Team Style2 */}
                    <section className="team-style2 team-style2--style3 team-style2--style3--team2">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <div className="sub-title">
                                    <h6>Council Members</h6>
                                </div>
                                <h2>Meet Excellent Council <br /> Members</h2>
                            </div>
                            <div className="row">
                                {visible.map((candidate, idx) => (
                                    <div key={idx} className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay={`${idx * 300}ms`} data-wow-duration="1500ms">
                                        <div className="team-style2__single">
                                            <div className="team-style2__single-img">
                                                <div className="inner">
                                                    <img src={candidate.image} alt="#" />
                                                    <div className="team-style2__single-content text-center">
                                                        <h2><Link href={candidate.details}>{candidate.name}</Link></h2>
                                                        <p>{candidate.role}</p>
                                                        <ul className="social-links clearfix">
                                                            <li><Link href="mailto:yourmail@email.com"><span className="icon-mail-1"></span></Link></li>
                                                            <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                                                <ul className="social-links-inner">
                                                                    <li><Link href="#"><i className="icon-twitter"></i></Link></li>
                                                                    <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
                                                                    <li><Link href="#"><i className="icon-instagram"></i></Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><Link href="tel:1234567890"><span className="icon-telephone"></span></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="team-pagination-wrapper">
                                {renderPagination()}
                            </div>
                        </div>
                    </section>
                    {/*End Team Style2 */}
                </div>
            </Layout>
        </>
    );
}