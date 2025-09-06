import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-chocolate-800">
              Los Postres de Celeste
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-primary-600 transition-colors">
              Inicio
            </a>
            <a href="#productos" className="text-gray-700 hover:text-primary-600 transition-colors">
              Productos
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-primary-600 transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-primary-600 transition-colors">
                Inicio
              </a>
              <a href="#productos" className="text-gray-700 hover:text-primary-600 transition-colors">
                Productos
              </a>
              <a href="#nosotros" className="text-gray-700 hover:text-primary-600 transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-primary-600 transition-colors">
                Contacto
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
