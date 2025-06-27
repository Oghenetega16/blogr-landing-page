import Content from "./components/content";
import Footer from "./components/footer";
import HeroSection from "./components/herosection";
import NavBar from "./components/navbar";

export default function App() {

    const bgSize = ''
    return (
        <main className="min-h-screen">
            <section className="bg-gradient-to-br from-[hsl(13,100%,72%)] to-[hsl(353,100%,62%)] pb-30" style={{ borderBottomLeftRadius: '90px' }}>
                <div className="bg-[url('./assets/images/bg-pattern-intro-mobile.svg')] bg-no-repeat bg-auto bg-contain">
                    <NavBar />
                    <HeroSection />
                </div>
            </section>

            <section>
                <Content />
            </section>

            <footer>
                <Footer />
            </footer>
        </main>
    )
}

