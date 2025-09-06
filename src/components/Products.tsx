import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  emoji: string;
  category: string;
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Chocolates Artesanales",
      description: "Chocolates finos con diferentes sabores y rellenos especiales",
      price: "$15.000",
      emoji: "🍫",
      category: "chocolate"
    },
    {
      id: 2,
      name: "Pasteles Personalizados",
      description: "Pasteles decorados a mano para ocasiones especiales",
      price: "$25.000",
      emoji: "🎂",
      category: "pasteles"
    },
    {
      id: 3,
      name: "Cupcakes Gourmet",
      description: "Cupcakes con decoraciones únicas y sabores exquisitos",
      price: "$8.000",
      emoji: "🧁",
      category: "cupcakes"
    },
    {
      id: 4,
      name: "Galletas Decoradas",
      description: "Galletas artesanales con diseños personalizados",
      price: "$12.000",
      emoji: "🍪",
      category: "galletas"
    },
    {
      id: 5,
      name: "Tartas de Frutas",
      description: "Tartas frescas con frutas de temporada",
      price: "$18.000",
      emoji: "🥧",
      category: "tartas"
    },
    {
      id: 6,
      name: "Bombones Especiales",
      description: "Bombones rellenos con sabores únicos y sorpresas",
      price: "$20.000",
      emoji: "🍬",
      category: "bombones"
    }
  ];

  const categories = ["Todos", "chocolate", "pasteles", "cupcakes", "galletas", "tartas", "bombones"];

  return (
    <section id="productos" className="section-padding bg-gradient-to-br from-cream-50 to-chocolate-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-chocolate-800 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de postres artesanales, cada uno creado con 
            ingredientes premium y mucho amor para endulzar tus momentos especiales.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 text-chocolate-700 hover:text-primary-600 font-medium"
            >
              {category === "Todos" ? "Todos los Productos" : 
               category === "chocolate" ? "Chocolates" :
               category === "pasteles" ? "Pasteles" :
               category === "cupcakes" ? "Cupcakes" :
               category === "galletas" ? "Galletas" :
               category === "tartas" ? "Tartas" :
               category === "bombones" ? "Bombones" : category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {product.emoji}
                  </div>
                  <p className="text-chocolate-700 font-medium">Imagen del producto</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-chocolate-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-600">
                    {product.price}
                  </span>
                  <button className="btn-primary text-sm py-2 px-4">
                    Hacer Pedido
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            ¿No encuentras lo que buscas? ¡Contáctanos para pedidos personalizados!
          </p>
          <a href="#contacto" className="btn-secondary">
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
