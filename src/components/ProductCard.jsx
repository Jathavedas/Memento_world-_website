import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';

const ProductCard = ({ product, index }) => {
  const handleEnquire = () => {
    const message = `Hello, I want to enquire about ${product.name} (${product.size})`;
    const whatsappUrl = `https://wa.me/918921137581?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white rounded-sm overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/5] bg-[#F8F8F8]">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase text-[#111111]">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-serif text-lg text-[#111111] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-[#666666] mb-4">
            Size: {product.size}
          </p>
          
          {/* Enquire Button */}
          <motion.button
            onClick={handleEnquire}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 bg-[#111111] text-white text-xs tracking-[0.2em] uppercase flex items-center justify-center space-x-2 hover:bg-[#D4AF37] transition-colors duration-300"
          >
            <FiMessageCircle size={14} />
            <span>Enquire Now</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
