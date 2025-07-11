import Button from "./button";

export default function HeroSection() {
    return (
        <section className="font-overpass text-white text-center px-6 mt-20">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl">A modern publishing platform</h1>
            <p className="mt-4 text-lg">Grow your audience and build your online brand</p>
            <div className="font-bold space-x-4 mt-10">
                <Button text="Start for Free" textColor="text-light-red" bgColor="bg-white" padding="px-5 py-3" hoverTextColor="md:hover:text-white" />
                <Button text="Learn More" textColor="text-white" bgColor="transparent md:transparent" border="border-1" padding="px-5 py-3" hoverBgColor="md:hover:bg-white" hoverTextColor="md:hover:text-light-red" />
            </div>
        </section>
    )
}