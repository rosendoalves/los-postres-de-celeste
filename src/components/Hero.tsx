import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-chocolate-50 to-cream-100 min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-chocolate-800 mb-6">
              Dulces Momentos
              <span className="block text-primary-600">Hechos con Amor</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Descubre el arte de los postres artesanales creados por Celeste Rios. 
              Chocolates, pasteles y dulces que despiertan los sentidos y crean momentos inolvidables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#productos" className="btn-primary">
                Ver Productos
              </a>
              <a href="#contacto" className="btn-secondary">
                Hacer Pedido
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-chocolate-200 to-cream-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🍰</div>
                  <p className="text-chocolate-700 font-medium">Imagen del producto destacado</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg">
              <span className="text-2xl">🍫</span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
              <span className="text-2xl">🧁</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-chocolate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
