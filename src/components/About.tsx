import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-chocolate-100 to-cream-100 rounded-3xl p-8">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👩‍🍳</div>
                  <p className="text-chocolate-700 font-medium">Foto de Celeste Rios</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 bg-primary-100 rounded-full p-4">
              <span className="text-2xl">✨</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary-100 rounded-full p-4">
              <span className="text-2xl">💝</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-chocolate-800 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              "Los Postres de Celeste" nació de la pasión por crear dulces momentos 
              que alegren el corazón de quienes los prueban. Cada receta es el resultado 
              de años de experiencia y amor por la repostería artesanal.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Celeste Rios, fundadora y chef pastelera, combina técnicas tradicionales 
              con ingredientes de la más alta calidad para crear postres únicos que 
              despiertan todos los sentidos.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-primary-100 rounded-full p-2">
                  <span className="text-primary-600 text-xl">🍫</span>
                </div>
                <div>
                  <h3 className="font-semibold text-chocolate-800 mb-1">Ingredientes Premium</h3>
                  <p className="text-gray-600 text-sm">Solo utilizamos los mejores ingredientes naturales</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-secondary-100 rounded-full p-2">
                  <span className="text-secondary-600 text-xl">🎨</span>
                </div>
                <div>
                  <h3 className="font-semibold text-chocolate-800 mb-1">Arte Artesanal</h3>
                  <p className="text-gray-600 text-sm">Cada pieza es creada a mano con dedicación</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-chocolate-100 rounded-full p-2">
                  <span className="text-chocolate-600 text-xl">💝</span>
                </div>
                <div>
                  <h3 className="font-semibold text-chocolate-800 mb-1">Hecho con Amor</h3>
                  <p className="text-gray-600 text-sm">Cada postre lleva el cariño de nuestra familia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-cream-100 rounded-full p-2">
                  <span className="text-cream-600 text-xl">🌟</span>
                </div>
                <div>
                  <h3 className="font-semibold text-chocolate-800 mb-1">Experiencia Única</h3>
                  <p className="text-gray-600 text-sm">Sabores que crean momentos inolvidables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
