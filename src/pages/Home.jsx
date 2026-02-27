import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward, FiUsers, FiClock, FiCheckCircle } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Home = () => {
  // Get first 6 products for featured section
  const featuredProducts = products.slice(0, 6);

  useEffect(() => {
    // Handle hash navigation after page load
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const stats = [
    { icon: FiAward, value: '25+', label: 'Years of Excellence' },
    { icon: FiUsers, value: '10K+', label: 'Happy Clients' },
    { icon: FiClock, value: '50K+', label: 'Awards Crafted' }
  ];

  const features = [
    'Premium Quality Materials',
    'Custom Engraving Services',
    'Bulk Order Discounts',
    'Nationwide Delivery',
    'Award-Winning Designs',
    'Lifetime Warranty'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-2 border border-[#D4AF37]/50 text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-8">
                Est. 1995
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-[0.1em] mb-6"
            >
              MEMENTO WORLD
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-xl md:text-2xl text-white/80 font-light tracking-wide mb-4"
            >
              Crafting Memories into Timeless Honors
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-12"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link
                to="/products"
                className="group px-8 py-4 bg-[#D4AF37] text-[#111111] text-sm tracking-[0.2em] uppercase font-medium flex items-center space-x-3 hover:bg-[#C9A227] transition-all duration-300"
              >
                <span>View Products</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="#contact"
                className="px-8 py-4 border border-white/50 text-white text-sm tracking-[0.2em] uppercase font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-4 block">
              Our Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111111] mb-6">
              Featured Products
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto" />
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link
              to="/products"
              className="inline-flex items-center space-x-3 px-8 py-4 border-2 border-[#111111] text-[#111111] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#111111] hover:text-white transition-all duration-300"
            >
              <span>View All Products</span>
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-[#F8F8F8]">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/images/about-image.jpg"
                  alt="About Memento World"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-4 lg:-right-8 bg-[#D4AF37] p-8 text-center"
              >
                <span className="block text-4xl lg:text-5xl font-serif text-[#111111]">25+</span>
                <span className="text-xs tracking-[0.2em] uppercase text-[#111111]/80">Years</span>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-4 block">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#111111] mb-6">
                Crafting Excellence Since 1995
              </h2>
              <div className="w-16 h-[1px] bg-[#D4AF37] mb-8" />
              
              <p className="text-[#666666] leading-relaxed mb-6">
                At Memento World, we believe that every achievement deserves to be celebrated with elegance and distinction. For over two decades, we have been crafting premium trophies, mementos, and awards that capture the essence of success and honor.
              </p>
              
              <p className="text-[#666666] leading-relaxed mb-8">
                Our master craftsmen combine traditional techniques with modern design to create pieces that are not just awards, but works of art. From corporate recognition to sports achievements, our collections cater to every occasion.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <FiCheckCircle className="text-[#D4AF37] flex-shrink-0" />
                    <span className="text-[#111111] text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E5E5E5]">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="text-[#D4AF37] mx-auto mb-2" size={24} />
                    <span className="block text-2xl lg:text-3xl font-serif text-[#111111]">{stat.value}</span>
                    <span className="text-xs text-[#666666]">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-white">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111111] mb-6">
              Contact Us
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#666666] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 bg-[#F8F8F8] border border-transparent focus:border-[#D4AF37] focus:outline-none transition-colors duration-300 text-[#111111]"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#666666] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 bg-[#F8F8F8] border border-transparent focus:border-[#D4AF37] focus:outline-none transition-colors duration-300 text-[#111111]"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#666666] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-4 bg-[#F8F8F8] border border-transparent focus:border-[#D4AF37] focus:outline-none transition-colors duration-300 text-[#111111] resize-none"
                    placeholder="Enter your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#111111] text-white text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#D4AF37] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:pl-12"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif text-[#111111] mb-4">Visit Our Showroom</h3>
                  <p className="text-[#666666] leading-relaxed">
                    123 Trophy Lane, Award District<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-[#111111] mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#F8F8F8] flex items-center justify-center">
                        <span className="text-[#D4AF37]">📞</span>
                      </div>
                      <div>
                        <span className="block text-xs text-[#666666] uppercase tracking-wider">Phone</span>
                        <span className="text-[#111111]">+91 98765 43210</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#F8F8F8] flex items-center justify-center">
                        <span className="text-[#D4AF37]">✉️</span>
                      </div>
                      <div>
                        <span className="block text-xs text-[#666666] uppercase tracking-wider">Email</span>
                        <span className="text-[#111111]">info@mementoworld.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-[#111111] mb-4">Business Hours</h3>
                  <div className="space-y-2 text-[#666666]">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
