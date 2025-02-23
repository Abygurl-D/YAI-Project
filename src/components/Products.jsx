import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "ReRub",
    price: 299,
    image: 'https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740248507/ik9_hwzy5u.png',
    description: "A durable, water-resistant backpack made from upcycled waste rubbers. Stylish, eco-friendly, and built for everyday use. Carry with purpose, support sustainability."
  },
  {
    id: 2,
    title: "EcoWeave",
    price: 199,
    image: 'https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740250726/i_want_single_images_of_bedsheets_made_from_worn_out_african_clothes_1_h6ogpo.jpg',
    description: "Breathable, comfortable, and eco-friendly—EcoWeave Sheets are crafted from upcycled second-hand garments. Giving fabrics a second life, they offer sustainability without compromising on quality and comfort."
  },
  {
    id: 3,
    title: "ThreadTrek",
    price: 149,
    image: "https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740250795/i_want_single_images_of_backpacks_made_from_worn_out_african_clothes_akltpn.jpg",
    description: "Lightweight, durable, and sustainably made—ThreadTrek Pack is crafted from upcycled second-hand garments. Designed for everyday use, it combines style, function, and a commitment to reducing textile waste."
  },
  {
    id: 4,
    title: "FlexRub",
    price: 249,
    image: 'https://res.cloudinary.com/dmxzxo1fk/image/upload/v1740060092/Untitled_design_3_bf5pmi.png',
    description: "Made from repurposed waste rubber, the FlexRub Pack is built for toughness and longevity. Its rugged, water-resistant design makes it ideal for daily use, while its eco-friendly materials help reduce waste and promote sustainability."
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePaystackPayment = () => {
    window.open('https://paystack.com/pay/your-payment-link', '_blank');
  };

  return (
    <section className="py-20  bg-gray-50"  id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top border line with PRODUCTS text */}
        <div className="flex items-center mb-12">
          <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
          <span className="px-4 text-[#00A4AC] font-['Playfair_Display'] font-medium tracking-wide">PRODUCTS</span>
          <div className="h-[1px] bg-[#00A4AC] flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white text-gray-900 px-6 py-2 rounded-lg font-['Playfair_Display'] font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-['Playfair_Display'] font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProduct(null)}
            >
              {/* Background with blur and image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                  backgroundImage: `url(${selectedProduct.image})`,
                }}
              >
                <div className="absolute inset-0 backdrop-blur-xl bg-white/70"></div>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-['Playfair_Display'] font-bold text-gray-900">
                    {selectedProduct.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                </div>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-gray-600 font-['Playfair_Display'] text-lg mb-8">
                  {selectedProduct.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-['Playfair_Display'] font-bold text-[#00A4AC]">
                    GH₵{selectedProduct.price}
                  </span>
                  <button 
                    onClick={handlePaystackPayment}
                    className="bg-[#00A4AC] text-white px-8 py-3 rounded-lg font-['Playfair_Display'] font-medium hover:bg-[#00A4AC]/90 transition-colors"
                  >
                    Shop Now
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}