import { Fragment, useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Transition, Popover } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineMenu, 
  HiX, 
  HiChevronDown, 
  HiSearch,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineGlobe
} from 'react-icons/hi';

const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount] = useState(3); // Demo amaçlı

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: t('products'),
      href: '/products',
      megaMenu: [
        {
          title: 'Kategoriler',
          items: ['Ham Maddeler', 'Yarı Mamül', 'Katkı Maddeleri', 'Ambalaj']
        },
        {
          title: 'Özellikler',
          items: ['Organik', 'Helal', 'Vegan', 'Glutensiz']
        },
        {
          title: 'Markalar',
          items: ['Marka A', 'Marka B', 'Marka C', 'Marka D']
        }
      ]
    },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-8xl mx-auto">
        {/* Top Bar */}
        <div className="bg-gray-900 text-white py-2 px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-4">
              <a href="tel:+901234567890" className="hover:text-gray-300">
                +90 123 456 7890
              </a>
              <span>|</span>
              <a href="mailto:info@example.com" className="hover:text-gray-300">
                info@example.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push(router.pathname, router.pathname, {
                  locale: router.locale === 'en' ? 'tr' : 'en',
                })}
                className="flex items-center space-x-1 hover:text-gray-300"
              >
                <HiOutlineGlobe className="w-4 h-4" />
                <span>{router.locale === 'en' ? 'TR' : 'EN'}</span>
              </button>
              <Link href="/login" className="hover:text-gray-300">
                Giriş Yap
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/logo.png"
                alt="Logo"
                className="h-12 w-auto"
              />
            </Link>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ürün veya kategori ara..."
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <HiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                item.megaMenu ? (
                  <Popover key={item.name} className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
                          <span>{item.name}</span>
                          <HiChevronDown className={`w-4 h-4 transition-transform ${open ? 'transform rotate-180' : ''}`} />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition duration-200 ease-out"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition duration-150 ease-in"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 w-screen max-w-4xl px-4 mt-3 left-1/2 transform -translate-x-1/2">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid grid-cols-3 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {item.megaMenu.map((section) => (
                                  <div key={section.title}>
                                    <h3 className="text-base font-medium text-gray-900 mb-4">{section.title}</h3>
                                    <ul className="space-y-3">
                                      {section.items.map((subItem) => (
                                        <li key={subItem}>
                                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                                            {subItem}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-gray-700 hover:text-indigo-600 ${
                      router.pathname === item.href ? 'font-semibold text-indigo-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Icons */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="relative">
                <HiOutlineShoppingCart className="w-6 h-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button>
                <HiOutlineUser className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Menu as="div" className="lg:hidden">
              {({ open }) => (
                <>
                  <Menu.Button className="p-2">
                    {open ? (
                      <HiX className="w-6 h-6" />
                    ) : (
                      <HiOutlineMenu className="w-6 h-6" />
                    )}
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-full mt-2 origin-top-right bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1">
                        {navigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                href={item.href}
                                className={`${
                                  active ? 'bg-gray-100' : ''
                                } group flex rounded-md items-center w-full px-4 py-3 text-sm`}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
