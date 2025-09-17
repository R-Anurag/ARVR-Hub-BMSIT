import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom"; 
import logoImage from '../assets/images/ARVRHubLogo.png';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const navRefs = useRef([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // <- Added to track route changes

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Events", href: "/events" },
        { name: "Team", href: "/Teams" },
    ];

    // Update underline on mount & path change
    useEffect(() => {
        const activeIndex = navItems.findIndex((item) => item.href === location.pathname);
        if (activeIndex !== -1 && navRefs.current[activeIndex]) {
            const link = navRefs.current[activeIndex];
            setUnderlineStyle({ left: link.offsetLeft, width: link.offsetWidth });
        }
    }, [location.pathname]); // <- dependency changed from window.location.pathname

    return (
        <header className="flex justify-between items-center py-2 px-4 lg:px-20 relative bg-black">
            {/* Logo */}
            <img 
                src={logoImage} 
                alt="ARVRHub Logo" 
                className="z-50 w-[50px] h-auto" 
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-12 relative">
                {navItems.map((item, index) => (
                    <NavLink
                        key={item.href}
                        to={item.href}
                        ref={el => navRefs.current[index] = el}
                        className={({ isActive }) => `relative text-base tracking-wider transition-colors z-50 hover:text-gray-300 ${isActive ? "text-white font-semibold" : ""}`}
                    >
                        {item.name}
                    </NavLink>
                ))}
                <span
                    className="absolute bottom-0 h-0.5 bg-white rounded-full transition-all duration-300"
                    style={{ left: underlineStyle.left, width: underlineStyle.width }}
                ></span>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl p-2 z-50">
                <i className='bx bx-menu'></i> 
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md">
                    <nav className='flex flex-col gap-6 items-center'>
                        {navItems.map((item) => (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                className={({ isActive }) => `text-base tracking-wider transition-colors z-50 ${isActive ? "text-white font-semibold" : "hover:text-gray-300"}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
