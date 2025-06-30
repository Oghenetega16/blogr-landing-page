export default function Footer() {
    return (
        <footer className="bg-very-dark-black-blue font-ubuntu mt-25 text-center text-white py-15 sm:text-left sm:flex sm:gap-15 sm:px-15 md:gap-25 lg:px-30 lg:mt-10 lg:gap-30 xl:px-45 xl:gap-50" style={{borderTopRightRadius: '90px'}}>
            <div><img src="/assets/images/logo.svg" alt="logo" className="mx-auto mb-15 sm:mx-0" /></div>
            <div className="space-y-8 sm:flex sm:gap-10 md:gap-20 lg:gap-30 xl:gap-50">
                <div>
                    <p className="mb-5 font-medium">Product</p>
                    <ul className="space-y-1 sm:space-y-2 text-grayish-blue">
                        <li className="lg:hover:underline cursor-pointer">Overview</li>
                        <li className="lg:hover:underline cursor-pointer">Pricing</li>
                        <li className="lg:hover:underline cursor-pointer">Marketplace</li>
                        <li className="lg:hover:underline cursor-pointer">Features</li>
                        <li className="lg:hover:underline cursor-pointer">Integrations</li>
                    </ul>
                </div>
                <div>
                    <p className="mb-5 font-medium">Company</p>
                    <ul className="space-y-1 sm:space-y-2 text-grayish-blue">
                        <li className="lg:hover:underline cursor-pointer">About</li>
                        <li className="lg:hover:underline cursor-pointer">Team</li>
                        <li className="lg:hover:underline cursor-pointer">Blog</li>
                        <li className="lg:hover:underline cursor-pointer">Careers</li>
                    </ul>
                </div>
                <div>
                    <p className="mb-5 font-medium">Connect</p>
                    <ul className="space-y-1 sm:space-y-2 text-grayish-blue">
                        <li className="lg:hover:underline cursor-pointer">Contact</li>
                        <li className="lg:hover:underline cursor-pointer">Newsletter</li>
                        <li className="lg:hover:underline cursor-pointer">LinkedIn</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}