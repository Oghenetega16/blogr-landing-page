export default function Content() {
    return (
        <section className="mt-20 px-6 font-overpass">
            <h1 className="text-center mb-10">Designed for the future</h1>
            <div className="space-y-10">
                <div>
                    <img src="/assets/images/illustration-editor-mobile.svg" alt="" />
                </div>
                <div className="text-center space-y-10">
                    <div>
                        <h2 className="text-xl w-50">Introducing an extensible editor</h2>
                        <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing:
                        creating content. The editor supports management of multiple blogs and allows easy
                        manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins
                        and themes provide easy ways to add functionality or change the looks of a blog.</p>
                    </div>
                    <div>
                        <h2 className="text-xl w-50">Robust content management</h2>
                        <p>Flexible content management enables users to easily move through posts.
                        Increase the usability of your blog by adding customized categories, sections,
                        format, or flow. With this functionality, you’re in full control.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}