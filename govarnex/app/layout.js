import "@/node_modules/react-modal-video/css/modal-video.css"

import "public/assets/css/style.css"


import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { DM_sans, poppins } from '@/lib/font'
export const metadata = {
    title: 'State of laws',
    description: 'State of laws — municipal and government information portal built with Next.js',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${poppins.variable} ${DM_sans.variable}`}>
            <body>{children}</body>
        </html>
    )
}
