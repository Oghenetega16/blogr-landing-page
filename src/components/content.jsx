export default function Content() {

    const bgSize = '36rem'
    const bgPosition = 'center -14.5rem'

    return (
        <section className="mt-20 font-overpass">
            <h1 className="text-center mb-10 text-2xl font-medium text-very-dark-blue">Designed for the future</h1>
            <div className="space-y-10 px-6 md:flex md:items-center md:justify-center md:pt-10 md:space-y-0 md:gap-15 md:pr-15 md:pl-0">
                <picture className="flex justify-center">
                    <source srcSet="/assets/images/illustration-editor-desktop.svg" media="(min-width: 768px)"></source>
                    <img src="/assets/images/illustration-editor-mobile.svg" alt="mobile editor image" />
                </picture>
                <div className="text-center space-y-10 md:text-left">
                    <div>
                        <h2 className="text-xl w-50 mx-auto font-medium text-very-dark-blue mb-5 md:mx-0 md:text-lg">Introducing an extensible editor</h2>
                        <p className="w-75 mx-auto text-very-dark-gray-blue md:text-xs">Blogr features an exceedingly intuitive interface which lets you focus on one thing:
                        creating content. The editor supports management of multiple blogs and allows easy
                        manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins
                        and themes provide easy ways to add functionality or change the looks of a blog.</p>
                    </div>
                    <div>
                        <h2 className="text-xl w-50 mx-auto font-medium text-very-dark-blue mb-5 md:mx-0 md:text-lg">Robust content management</h2>
                        <p className="w-75 mx-auto text-very-dark-gray-blue md:text-xs">Flexible content management enables users to easily move through posts.
                        Increase the usability of your blog by adding customized categories, sections,
                        format, or flow. With this functionality, you’re in full control.</p>
                    </div>
                </div>
            </div>

            <aside className="mt-65 pb-25 bg-very-dark-black-blue sm:mt-100" style={{ borderTopRightRadius: '100px', borderBottomLeftRadius: '90px' }}>
                <div className="bg-[url('/assets/images/bg-pattern-circles.svg')] bg-no-repeat bg-top relative" style={{backgroundSize: bgSize, backgroundPosition: bgPosition}}>
                    <div className="flex justify-center"><img src="/assets/images/illustration-phones.svg" alt="mobile phones" className="absolute -top-45 sm:-top-80" /></div>
                    <div className="text-center px-6 pt-50 text-white">
                        <h1 className="text-3xl my-5">State of the Art Infrastructure</h1>
                        <p className="w-65 mx-auto text-sm leading-6 font-extralight sm:text-base"> With reliability and speed in mind, worldwide data centers provide the backbone
                        for ultra-fast connectivity. This ensures your site will load instantly, no matter
                        where your readers are, keeping your site competitive.</p>
                    </div>
                </div>
            </aside>
            
            <div className="space-y-10 px-6 md:flex md:justify-center md:pt-20 md:pr-15 md:pl-0">
                <picture className="mt-15 flex justify-center md:mt-0">
                    <source srcSet="/assets/images/illustration-laptop-desktop.svg" media="(min-width: 768px)"></source>
                    <img src="/assets/images/illustration-laptop-mobile.svg" alt="laptop" className="" />
                </picture>
                <div className="text-center space-y-10 md:text-left">
                    <div>
                        <h2 className="text-xl w-50 mx-auto font-medium text-very-dark-blue mb-5 md:mx-0 md:text-lg">Free, open, simple</h2>
                        <p className="w-75 mx-auto text-very-dark-gray-blue md:text-xs">Blogr is a free and open source application
                        backed by a large community of helpful developers. It supports features such as code syntax highlighting,
                        RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics.
                        The architecture is clean and is relatively easy to learn.</p>
                    </div>
                    <div>
                        <h2 className="text-xl w-50 mx-auto font-medium text-very-dark-blue mb-5 md:mx-0 md:text-lg">Powerful tooling</h2>
                        <p className="w-75 mx-auto text-very-dark-gray-blue md:text-xs">Batteries included. We built a simple and straightforward
                        CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated
                        sites.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}