import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiGrid, FiList } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('name-asc');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', 'Trophies', 'Mementos', 'Medals', 'Photo Frames', 'Badges'];

  const sortOptions = [
    { value: 'name-asc', label: 'Name A-Z' },
    { value: 'name-desc', label: 'Name Z-A' },
    { value: 'size-asc', label: 'Size Small → Large' },
    { value: 'size-desc', label: 'Size Large → Small' }
  ];

  // Parse size for sorting
  const parseSize = (sizeStr) => {
    const match = sizeStr.match(/(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0;
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Sort products
    result.sort((a, b) => {
      switch (sortOption) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'size-asc':
          return parseSize(a.size) - parseSize(b.size);
        case 'size-desc':
          return parseSize(b.size) - parseSize(a.size);
        default:
          return 0;
      }
    });

    return result;
  }, [searchQuery, selectedCategory, sortOption]);

  return (
    <div className="min-h-screen bg-[#F8F8F8] pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#E5E5E5]">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-4 block">
              Our Collection
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#111111] mb-6">
              All Products
            </h1>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-6" />
            <p className="text-[#666666] max-w-2xl mx-auto">
              Discover our exquisite collection of premium trophies, mementos, medals, and awards crafted with precision and elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 lg:top-24 z-30 bg-white border-b border-[#E5E5E5] shadow-sm">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex-shrink-0 lg:w-80"
            >
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666]" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#F8F8F8] border border-transparent focus:border-[#D4AF37] focus:outline-none transition-colors duration-300 text-[#111111]"
              />
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2"
            >
              <FiFilter className="text-[#666666] mr-2" size={16} />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs tracking-[0.1em] uppercase transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#D4AF37] text-white'
                      : 'bg-[#F8F8F8] text-[#666666] hover:bg-[#111111] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Sort and View Options */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="appearance-none px-4 py-3 pr-10 bg-[#F8F8F8] text-[#111111] text-sm focus:outline-none focus:border-[#D4AF37] border border-transparent cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center border border-[#E5E5E5]">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-colors duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-[#111111] text-white'
                      : 'bg-white text-[#666666] hover:text-[#111111]'
                  }`}
                >
                  <FiGrid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-colors duration-300 ${
                    viewMode === 'list'
                      ? 'bg-[#111111] text-white'
                      : 'bg-white text-[#666666] hover:text-[#111111]'
                  }`}
                >
                  <FiList size={18} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-[#E5E5E5]">
            <span className="text-sm text-[#666666]">
              Showing <span className="text-[#111111] font-medium">{filteredProducts.length}</span> products
              {selectedCategory !== 'All' && (
                <span> in <span className="text-[#D4AF37]">{selectedCategory}</span></span>
              )}
            </span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          {filteredProducts.length > 0 ? (
            <div className={`grid ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
                : 'grid-cols-1 gap-6'
            }`}>
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <div className="w-20 h-20 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-6">
                <FiSearch className="text-[#666666]" size={32} />
              </div>
              <h3 className="text-2xl font-serif text-[#111111] mb-2">
                No products found
              </h3>
              <p className="text-[#666666]">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#111111]">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Need Custom Awards?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              We specialize in creating custom trophies and mementos tailored to your specific requirements. Contact us for bulk orders and custom designs.
            </p>
            <a
              href="https://wa.me/918921137581"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-[#D4AF37] text-[#111111] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#C9A227] transition-colors duration-300"
            >
              <span>Get a Quote</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
