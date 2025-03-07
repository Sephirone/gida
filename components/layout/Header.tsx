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
  HiOutlineGlobe,
  HiOutlineCube,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlinePhone
} from 'react-icons/hi';

const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount] = useState(3);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
      icon: <HiOutlineCube className="w-5 h-5" />,
      megaMenu: [
        {
          title: 'Endüstriyel Hammaddeler',
          items: [
            { name: 'Polimer Hammaddeler', description: 'Yüksek kalite plastik ve reçine hammaddeleri' },
            { name: 'Metal Alaşımlar', description: 'Özel alaşımlar ve metal hammaddeler' },
            { name: 'Kimyasal Hammaddeler', description: 'Endüstriyel kimyasallar ve katkı maddeleri' },
            { name: 'Kompozit Malzemeler', description: 'İleri teknoloji kompozit çözümler' }
          ]
        },
        {
          title: 'Sürdürülebilir Çözümler',
          items: [
            { name: 'Bio-bazlı Malzemeler', description: 'Çevre dostu hammaddeler' },
            { name: 'Geri Dönüştürülmüş', description: 'Yenilikçi geri dönüşüm çözümleri' },
            { name: 'Enerji Verimli', description: 'Enerji tasarruflu malzemeler' }
          ]
        }
      ]
    },
    { 
      name: t('innovations'),
      href: '/innovations',
      icon: <HiOutlineLightBulb className="w-5 h-5" />
    },
    { 
      name: t('sustainability'),
      href: '/sustainability',
      icon: <HiOutlineSparkles className="w-5 h-5" />
    },
    { 
      name: t('contact'),
      href: '/contact',
      icon: <HiOutlinePhone className="w-5 h-5" />
    },
  ];

  const Logo = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center space-x-2"
    >
      <div className="relative w-10 h-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg"
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        <div className="absolute inset-0.5 bg-white rounded-lg flex items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">N</span>
        </div>
      </div>
      <div className="text-xl font-bold">
        <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">Neo</span>
        <span className="text-gray-800">Mat</span>
      </div>
    </motion.div>
  );

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-8xl mx-auto">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="tel:+901234567890" 
                className="hover:text-blue-200"
              >
                +90 123 456 7890
              </motion.a>
              <span>|</span>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="mailto:info@neomat.com" 
                className="hover:text-blue-200"
              >
                info@neomat.com
              </motion.a>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => router.push(router.pathname, router.pathname, {
                  locale: router.locale === 'en' ? 'tr' : 'en',
                })}
                className="flex items-center space-x-1 hover:text-blue-200"
              >
                <HiOutlineGlobe className="w-4 h-4" />
                <span>{router.locale === 'en' ? 'TR' : 'EN'}</span>
              </motion.button>
              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <Link href="/login" className="hover:text-blue-200">
                  Giriş Yap
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                item.megaMenu ? (
                  <Popover key={item.name} className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                          <span className="flex items-center space-x-2">
                            {item.icon}
                            <span>{item.name}</span>
                          </span>
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
                          <Popover.Panel className="absolute z-10 w-screen max-w-6xl px-4 mt-3 left-1/2 transform -translate-x-1/2">
                            <div className="rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {item.megaMenu.map((section) => (
                                  <div key={section.title} className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
                                    <ul className="space-y-4">
                                      {section.items.map((subItem) => (
                                        <li key={subItem.name}>
                                          <a href="#" className="group">
                                            <p className="text-base font-medium text-gray-900 group-hover:text-blue-600">
                                              {subItem.name}
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500 group-hover:text-blue-500">
                                              {subItem.description}
                                            </p>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                              <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                                <div className="space-y-4">
                                  <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                    Öne Çıkan Ürünler
                                  </h3>
                                  <ul className="space-y-4">
                                    <li className="text-base truncate">
                                      <a href="#" className="font-medium text-gray-900 hover:text-blue-600">
                                        Yeni Nesil Bio-kompozitler
                                      </a>
                                    </li>
                                    <li className="text-base truncate">
                                      <a href="#" className="font-medium text-gray-900 hover:text-blue-600">
                                        Akıllı Polimer Sistemleri
                                      </a>
                                    </li>
                                  </ul>
                                </div>
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
                    className={`flex items-center space-x-2 text-gray-700 hover:text-blue-600 ${
                      router.pathname === item.href ? 'font-semibold text-blue-600' : ''
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )
              ))}
            </div>

            {/* Search and Icons */}
            <div className="hidden lg:flex items-center space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                <HiSearch className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="relative text-gray-700 hover:text-blue-600"
              >
                <HiOutlineShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-blue-600"
              >
                <HiOutlineUser className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <Menu as="div" className="lg:hidden">
              {({ open }) => (
                <>
                  <Menu.Button className="p-2 text-gray-700 hover:text-blue-600">
                    {open ? (
                      <HiX className="w-6 h-6" />
                    ) : (
                      <HiOutlineMenu className="w-6 h-6" />
                    )}
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
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
                                } group flex items-center space-x-2 rounded-md w-full px-4 py-3 text-sm text-gray-700`}
                              >
                                {item.icon}
                                <span>{item.name}</span>
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

        {/* Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-x-0 top-full bg-white shadow-lg p-4"
            >
              <div className="max-w-4xl mx-auto relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ürün veya kategori ara..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                />
                <HiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
