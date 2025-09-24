import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Team from "@/components/sections/home1/Team"
import Features from "@/components/sections/home1/Features"
// Services1, Services2, Cta, Video, News removed from main page by request (components remain)
import Events from "@/components/sections/home1/Events"
import Testimonial from "@/components/sections/home1/Testimonial"
import Counter from "@/components/sections/home1/Counter"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <Events />
            </Layout>
        </>
    )
}