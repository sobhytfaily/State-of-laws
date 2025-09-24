import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Team from "@/components/sections/home1/Team"
import Features from "@/components/sections/home1/Features"
    import Events from "@/components/sections/home1/Events"
import Counter from "@/components/sections/home1/Counter"
import Video from "@/components/sections/index-one-page/Video"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <Counter />                
                <Events />
                <Video />
            </Layout>
        </>
    )
}