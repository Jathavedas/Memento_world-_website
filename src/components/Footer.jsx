import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/#about' },
    { name: 'Contact', path: '/#contact' }
  ];

  const categories = [
    { name: 'Trophies', path: '/products' },
    { name: 'Mementos', path: '/products' },
    { name: 'Medals', path: '/products' },
    { name: 'Photo Frames', path: '/products' },
    { name: 'Badges', path: '/products' }
  ];

  return (
    <footer className="bg-[#111111] text-white">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif tracking-[0.15em] mb-6">
              MEMENTO WORLD
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Crafting memories into timeless honors since 1995. We specialize in creating premium trophies, mementos, and awards that celebrate achievements with elegance and distinction.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
              >
                <FiFacebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm tracking-[0.2em] uppercase font-semibold mb-6 text-[#D4AF37]">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm tracking-[0.2em] uppercase font-semibold mb-6 text-[#D4AF37]">
              Categories
            </h4>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.path}
                    className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm tracking-[0.2em] uppercase font-semibold mb-6 text-[#D4AF37]">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-[#D4AF37] mt-1 flex-shrink-0" size={18} />
                <span className="text-white/60 text-sm">
                  123 Trophy Lane, Award District<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-[#D4AF37] flex-shrink-0" size={18} />
                <span className="text-white/60 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-[#D4AF37] flex-shrink-0" size={18} />
                <span className="text-white/60 text-sm">info@mementoworld.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/40 text-sm">
              © 2024 Memento World. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/40 hover:text-[#D4AF37] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-[#D4AF37] text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
