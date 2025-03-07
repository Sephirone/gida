import { motion } from 'framer-motion';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Dekoratif arka plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Ürün görseli */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* İçerik */}
      <div className="relative p-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-semibold text-gray-900 mb-2"
        >
          {product.name}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-4"
        >
          {product.description}
        </motion.p>

        {/* Özellikler */}
        <div className="space-y-2">
          {product.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center space-x-2"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Detay butonu */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
        >
          Detayları İncele
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;