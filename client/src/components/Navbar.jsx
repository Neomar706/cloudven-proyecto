import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-blue-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link to="/" className="text-2xl font-bold hover:text-blue-100">CloudVen Solutions</Link>
                <div className="md:hidden">
                    <button className="cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
                <ul className="hidden md:flex space-x-6">
                    <li><Link to="/programming-service" className="hover:underline">Servicio de programación</Link></li>
                    <li><Link to="/plans" className="hover:underline">Planes VPS</Link></li>
                    <li><Link to="/contact" className="hover:underline">Contactanos</Link></li>
                    <li><Link to="/about-us" className="hover:underline">¿Quienes somos?</Link></li>
                </ul>
            </div>
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-blue-800 text-white py-4 px-4 z-20">
                    <ul className="space-y-2 text-center">
                        <li><Link to="/programming-service" className="block py-2 hover:underline">Servicios de programación</Link></li>
                        <li><Link to="/plans" className="block py-2 hover:underline">Planes VPS</Link></li>
                        <li><Link to="/contact" className="block py-2 hover:underline">Contactanos</Link></li>
                        <li><Link to="/about-us" className="block py-2 hover:underline">¿Quienes somos?</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}