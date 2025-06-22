import { useState } from 'react'
import Button from './button'

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false)
    const [activeSubMenu, setActiveSubMenu] = useState(null)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleSubMenu = (type) => {
        setActiveSubMenu(prev => (prev === type ? null : type))
    }

    return (
        <nav className="px-6 py-12">
            <div className="flex items-center justify-between">
                <img src="/assets/images/logo.svg" alt="logo" />
                <img src={showMenu ? "/assets/images/icon-hamburger.svg" : "/assets/images/icon-close.svg"} alt={showMenu ? "hamburger icon" : "close icon"} onClick={handleMenu} />
            </div>
            
            <div className={`${showMenu ? 'hidden' : ''} text-xl bg-white font-ubuntu font-medium text-center px-6 py-8 rounded mt-8`}>
                <ul className="flex flex-col space-y-7 text-very-dark-blue">
                    {['product', 'company', 'connect'].map((item, id) => (
                        <li key={id}>
                            <div className="flex items-center justify-center gap-2" onClick={() => handleSubMenu(item)}>
                                <span className="capitalize">{item}</span>
                                <img src="/assets/images/icon-arrow-dark.svg" />
                            </div>
                            <ul className={`${activeSubMenu === item ? '' : 'hidden'} py-4 space-y-4 bg-gray-100 rounded mt-4`} onClick={handleSubMenu}>
                                <li>Contact</li>
                                <li>Newsletter</li>
                                <li>LinkedIn</li>
                            </ul>
                        </li>
                    ))}
                </ul>

                <hr className='my-6 text-gray-100' />

                <div className="font-overpass space-y-5 font-bold">
                    <p className='text-very-dark-blue'>Login</p>
                    <Button text="Sign Up" textColor="text-white" bgColor="bg-gradient-to-br from-[hsl(13,100%,72%)] to-[hsl(353,100%,62%)]" padding="px-8 py-3" />
                </div>
            </div>
            
        </nav>
    )
}