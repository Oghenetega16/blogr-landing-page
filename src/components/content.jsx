import { useEffect, useState } from "react"

export default function Content() {

    const [deviceType, setDeviceType] = useState('mobile')

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            if (width >= 1024) {
                setDeviceType('desktop')
            } else {
                setDeviceType('mobile')
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize) 
    })

    const bgPosition = {
        mobile: 'center -14.5rem',
        desktop: '-8rem -33rem'
    }

    const bgSize = {
        mobile: '36rem',
        desktop: '59rem'
    }


    return (
        <section className="mt-20 font-overpass lg:mt-25">
            <h1 className="text-center mb-10 text-2xl font-medium text-very-dark-blue lg:-mb-20">Designed for the future</h1>
            <div className="space-y-10 px-6 md:flex md:items-center md:justify-center md:flex-row-reverse md:pt-10 md:space-y-0 md:gap-15 md:pr-0 md:pl-15 lg:pl-30 lg:pt-0">
                <picture className="flex justify-center lg:-mr-50 lg:w-200">
                    <source srcSet="/assets/images/illustration-editor-desktop.svg" media="(min-width: 768px)"></source>
                    <img src="/assets/images/illustration-editor-mobile.svg" alt="mobile editor image" />
                </picture>
                <div className="text-center space-y-10 md:text-left">
                    <div>
                        <h2 className="text-xl w-50 mx-auto font-medium text-very-dark-blue mb-5 md:mx-0 md:text-lg md:w-fit md:mb-3">Introducing an extensible editor</h2>
                        <p className="w-75 mx-auto leading-5 text-very-dark-gray-blue md:text-xs lg:w-95">Blogr features an exceedingly intuitive interface which lets you focus on one thing:
                        creating content. The editor supports management of multiple blogs and allows easy
                        manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins
                        and themes provide easy ways to add functionality or change the looks of a blog.</p>
                    </div>
                    <div>
                        <h2 className="text-xl w-50 mx-auto font-medium text-very-dark-blue mb-5 md:mx-0 md:text-lg md:w-fit md:mb-3">Robust content management</h2>
                        <p className="w-75 mx-auto leading-5 text-very-dark-gray-blue md:text-xs lg:w-95">Flexible content management enables users to easily move through posts.
                        Increase the usability of your blog by adding customized categories, sections,
                        format, or flow. With this functionality, you’re in full control.</p>
                    </div>
                </div>
            </div>

            <aside className="mt-65 pb-25 bg-very-dark-black-blue sm:mt-100 lg:pb-0 lg:mt-10 lg:h-80" style={{ borderTopRightRadius: '100px', borderBottomLeftRadius: '90px' }}>
                <div className="bg-[url('/assets/images/bg-pattern-circles.svg')] bg-no-repeat bg-top relative lg:flex lg:items-center lg:justify-center lg:h-full" style={{backgroundSize: bgSize[deviceType], backgroundPosition: bgPosition[deviceType]}}>
                    <div className="flex justify-center lg:w-110 lg:mt-10"><img src="/assets/images/illustration-phones.svg" alt="mobile phones" className="absolute -top-45 sm:-top-80 lg:relative lg:top-0" /></div>
                    <div className="text-center px-6 pt-50 text-white lg:text-left lg:pt-0">
                        <h1 className="text-3xl my-5 lg:text-2xl">State of the Art Infrastructure</h1>
                        <p className="w-65 mx-auto text-sm leading-6 font-extralight sm:text-base md:text-xs lg:w-95"> With reliability and speed in mind, worldwide data centers provide the backbone
                        for ultra-fast connectivity. This ensures your site will load instantly, no matter
                        where your readers are, keeping your site competitive.</p>
                    </div>
                </div>
            </aside>
            
            <div className="space-y-10 px-6 md:flex md:items-center md:justify-center md:pt-20 md:pr-15 md:pl-0 lg:pr-30">
                <picture className="mt-15 flex justify-center md:mt-0 lg:-ml-50 lg:w-200">
                    <source srcSet="/assets/images/illustration-laptop-desktop.svg" media="(min-width: 768px)"></source>
                    <img src="/assets/images/illustration-laptop-mobile.svg" alt="laptop" className="" />
                </picture>
                <div className="text-center space-y-10 md:text-left">
                    <div>
                        <h2 className="text-xl w-50 mx-auto font-medium text-very-dark-blue mb-5 md:mx-0 md:text-lg md:mb-3">Free, open, simple</h2>
                        <p className="w-75 mx-auto leading-5 text-very-dark-gray-blue md:text-xs lg:w-95">Blogr is a free and open source application
                        backed by a large community of helpful developers. It supports features such as code syntax highlighting,
                        RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics.
                        The architecture is clean and is relatively easy to learn.</p>
                    </div>
                    <div>
                        <h2 className="text-xl w-50 mx-auto font-medium text-very-dark-blue mb-5 md:mx-0 md:text-lg md:mb-3">Powerful tooling</h2>
                        <p className="w-75 mx-auto leading-5 text-very-dark-gray-blue md:text-xs lg:w-95">Batteries included. We built a simple and straightforward
                        CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated
                        sites.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}