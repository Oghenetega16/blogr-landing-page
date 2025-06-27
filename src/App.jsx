import Content from "./components/content";
import Footer from "./components/footer";
import HeroSection from "./components/herosection";
import NavBar from "./components/navbar";

export default function App() {

    const bgSize = '120rem'
    const bgPosition = 'center center'

    return (
        <main className="min-h-screen relative">
            <section className="bg-[url('./assets/images/bg-pattern-intro-mobile.svg')] bg-no-repeat" style={{ borderBottomLeftRadius: '90px', backgroundSize: bgSize, backgroundPosition: bgPosition }}>
                <div className="bg-gradient-to-br from-[hsl(13,100%,72%)] to-[hsl(353,100%,62%)] opacity-90 pb-30" style={{ borderBottomLeftRadius: '90px' }}>
                    <NavBar />
                    <HeroSection />
                </div>
            </section>

            <Content />
            <Footer />
        </main>
    )
}

