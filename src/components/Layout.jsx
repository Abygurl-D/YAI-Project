import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/innovator-profile', label: 'Innovator Profile' },
  { path: '/products', label: 'Products' },
  { path: '/testimonials', label: 'Testimonials' },
  { path: '/contact', label: 'Contact' },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1A959C]/95 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <nav className="relative w-full">
          <div className={`transition-all duration-300 ${
            isScrolled ? 'py-2' : 'py-4'
          } px-4`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <Link 
                to="/" 
                className="text-lg md:text-2xl font-bold text-white tracking-tight hover:opacity-90 transition-opacity"
              >
                IKE-DIAN FASHION
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1 lg:gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-[#15777c] hover:text-white ${
                      location.pathname === link.path 
                        ? 'text-white bg-[#15777c]' 
                        : 'text-gray-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md text-white hover:bg-[#15777c] transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 md:hidden w-full border-t border-[#15777c]/20 bg-[#1A959C]/95"
              >
                <div className="px-4 py-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors hover:bg-[#15777c] ${
                        location.pathname === link.path 
                          ? 'text-white bg-[#15777c]' 
                          : 'text-gray-100'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="flex-grow pt-20 w-full overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}