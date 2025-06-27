import { useState } from 'react'
import Button from './button'

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(true)
    const [activeSubMenu, setActiveSubMenu] = useState(null)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleSubMenu = (type) => {
        setActiveSubMenu(prev => (prev === type ? null : type))
    }

    return (
        <nav className="px-6 py-12 md:flex md:items-center md:gap-8 md:px-10">
            <div className="flex items-center justify-between">
                <img src="/assets/images/logo.svg" alt="logo" />
                <img src={showMenu ? "/assets/images/icon-hamburger.svg" : "/assets/images/icon-close.svg"} alt={showMenu ? "hamburger icon" : "close icon"} className="md:hidden" onClick={handleMenu} />
            </div>
            
            <div className={`${showMenu ? 'hidden' : ''} text-xl bg-white font-overpass font-medium text-center px-6 py-8 rounded mt-8 md:flex md:bg-transparent md:items-center md:justify-between md:p-0 md:w-full md:mt-0`}>
                <ul className="flex flex-col space-y-7 text-very-dark-blue md:flex-row md:text-white md:text-sm md:space-y-0">
                    {['product', 'company', 'connect'].map((item, id) => (
                        <li key={id}>
                            <div className="flex items-center justify-center gap-2 md:gap-1" onClick={() => handleSubMenu(item)}>
                                <span className="capitalize">{item}</span>
                                <picture className="md:mr-4">
                                    <source srcSet="/assets/images/icon-arrow-light.svg" media="(min-width: 768px)"></source>
                                    <img src="/assets/images/icon-arrow-dark.svg" />
                                </picture>
                                
                            </div>
                            <ul className={`${activeSubMenu === item ? '' : 'hidden'} py-4 space-y-4 bg-gray-100 rounded mt-4`} onClick={handleSubMenu}>
                                <li>Contact</li>
                                <li>Newsletter</li>
                                <li>LinkedIn</li>
                            </ul>
                        </li>
                    ))}
                </ul>

                <hr className='my-6 text-gray-100 md:hidden' />

                <div className="space-y-5 font-bold md:flex md:items-center md:space-y-0 md:gap-6 md:text-sm">
                    <p className='text-very-dark-blue md:text-white'>Login</p>
                    <Button text="Sign Up" textColor="text-white md:text-light-red" bgColor="bg-gradient-to-br from-[hsl(13,100%,72%)] to-[hsl(353,100%,62%)] md:bg-none md:bg-white" padding="px-8 py-3" />
                </div>
            </div>
            
        </nav>
    )
}