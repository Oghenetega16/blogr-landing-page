export default function Footer() {
    return (
        <footer className="bg-very-dark-black-blue font-ubuntu mt-25 text-center text-white py-15 sm:text-left sm:flex sm:gap-15 sm:px-15 md:gap-25 lg:px-30 lg:gap-30 xl:px-45 xl:gap-50" style={{borderTopRightRadius: '90px'}}>
            <div><img src="/assets/images/logo.svg" alt="logo" className="mx-auto mb-15 sm:mx-0" /></div>
            <div className="space-y-8 sm:flex sm:gap-10 md:gap-20 lg:gap-30 xl:gap-50">
                <div>
                    <p className="mb-5 font-medium">Product</p>
                    <ul className="space-y-1 sm:space-y-2 text-grayish-blue">
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <p className="mb-5 font-medium">Company</p>
                    <ul className="space-y-1 sm:space-y-2 text-grayish-blue">
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <p className="mb-5 font-medium">Connect</p>
                    <ul className="space-y-1 sm:space-y-2 text-grayish-blue">
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}