import Content from "./components/content";
import HeroSection from "./components/herosection";
import NavBar from "./components/navbar";

export default function App() {
    return (
        <main className="min-h-screen">
            <section className="bg-gradient-to-br from-[hsl(13,100%,72%)] to-[hsl(353,100%,62%)] pb-30 rounded-bl-3xl">
                <div className="bg-[url('./assets/images/bg-pattern-intro-mobile.svg')] bg-no-repeat bg-cover">
                    <NavBar />
                    <HeroSection />
                </div>
            </section>

            <section>
                <Content />
            </section>
        </main>
    )
}

