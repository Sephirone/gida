import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

const navigation = [
  {
    name: 'Kurumsal',
    href: '/about',
    submenu: [
      { name: 'Hakkımızda', href: '/about' },
      { name: 'Vizyon & Misyon', href: '/about/vision' },
      { name: 'Yönetim Ekibi', href: '/about/team' },
    ]
  },
  {
    name: 'Ürünler',
    href: '/products',
    submenu: [
      { name: 'Hammaddeler', href: '/products/raw' },
      { name: 'Kimyasallar', href: '/products/chemicals' },
      { name: 'Özel Ürünler', href: '/products/special' },
    ]
  },
  { name: 'Hizmetler', href: '/services' },
  { name: 'İletişim', href: '/contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      fixed w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-blue-600 shadow-lg' : 'bg-blue-500'}
    `}>
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="text-2xl font-bold text-white">
              LOGO
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-white hover:text-blue-100 transition-colors"
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <HiChevronDown className={`w-4 h-4 transition-transform duration-200 
                      ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            {/* Language Selector */}
            <div className="flex items-center space-x-2 text-white">
              <button className="hover:text-blue-100 transition">TR</button>
              <span>|</span>
              <button className="hover:text-blue-100 transition">EN</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10 p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              {navigation.map((item) => (
                <div key={item.name} className="py-2">
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="flex items-center space-x-2 py-2 text-gray-700">
                <button className="hover:text-blue-600 transition">TR</button>
                <span>|</span>
                <button className="hover:text-blue-600 transition">EN</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
