import Layout from "@/components/layout/Lalsyout"
import About from "@/components/sections/index-one-page/About"
import Banner from "@/components/sections/index-one-page/Banner"
import Services1 from "@/components/sections/index-one-page/Services1"
import Cta from "@/components/sections/index-one-page/Cta"
import Team from "@/components/sections/index-one-page/Team"
import Features from "@/components/sections/index-one-page/Features"
import News from "@/components/sections/index-one-page/News"
import Events from "@/components/sections/index-one-page/Events"
import Counter from "@/components/sections/index-one-page/Counter"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <Counter />
                <Events />
                <Team />
                <Cta />
                <News />
            </Layout>
        </>
    )
}