import { useState, useRef } from 'react'
import Logo from '../assets/svg/Logo'
import IconMenuOpen from '../assets/svg/icon-hamburger'
import IconMenuClose from '../assets/svg/icon-close'
import { menuLinks } from './NavLinks';

const NavBar = () => {
  
        const [toggleMenu, setToggleMenu] = useState(false);
        const refNavbar = useRef(null);
    
        const handleClickMenu = () => {
            setToggleMenu(!toggleMenu);
            refNavbar.current.querySelector("#navLinks").classList.toggle("hidden");
            refNavbar.current
                .querySelector("#navLinks")
                .classList.add("flex", "gap-x-9");
            refNavbar.current.querySelector("#logo").classList.toggle("hidden");
        };
    
        const toggleOpenMenu = "top-0 p-10 bg-white text-black justify-between";
        const toggleCloseMenu = "top-10 ";
    
        return (
            <nav
                ref={refNavbar}
                className={`absolute px-8 flex items-center w-full  lg:space-x-16 lg:text-white lg:bg-transparent lg:justify-start ${
                    toggleMenu ? toggleOpenMenu : toggleCloseMenu
                }`}>
                <button
                    className='lg:hidden '
                    onClick={handleClickMenu}>
                    {toggleMenu ? <IconMenuClose /> : <IconMenuOpen/>}
                </button>
                <a
                    id='logo'
                    href=''
                    className='mx-auto lg:m-0 lg:block'>
                    <Logo />
                </a>
                <div
                    className={`lg:flex lg:gap-x-9 hidden justify-self-center`}
                    id='navLinks'>
                    {menuLinks.map((link) => (
                        <a
                            key={link.text}
                            href={link.href}
                            className='border-b-2 font-semibold border-transparent transition-all duration-500 ease-in-out hover:border-white'>
                            {link.text}
                        </a>
                    ))}
                </div>
            </nav>
        );
    };

export default NavBar;
