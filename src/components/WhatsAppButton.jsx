import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/918921137581', '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#D4AF37] text-white rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.4)] flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-300"
    >
      <FiMessageCircle size={24} />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#D4AF37] animate-ping opacity-20" />
    </motion.button>
  );
};

export default WhatsAppButton;
