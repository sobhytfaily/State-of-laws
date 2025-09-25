
"use client"
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function TeamOne() {
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

        // always show first
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
                    if (p === 'left-ellipsis' || p === 'right-ellipsis') {
                        return <span key={i} className="pagination-ellipsis">…</span>
                    }
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team 1">
                <div>
                    {/* Top map/image placeholder */}
                    <section className="team-top-map team-pages__top">
                        <div className="auto-container">
                            <div className="team-panel">
                                {/* Map image placeholder - left empty for later */}
                                <div className="team-map-placeholder">Map / Large Image Placeholder</div>
                            </div>
                        </div>
                    </section>

                    {/* Arabic centered title */}
                    <section className="team-pages__title-section">
                        <div className="auto-container text-center">
                            <h3 className="team-pages__title">المرشحين</h3>
                        </div>
                    </section>

                    {/* Grid of placeholders */}
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

                            {/* Styled, functional pagination */}
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