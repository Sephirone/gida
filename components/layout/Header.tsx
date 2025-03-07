import { Fragment, useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { 
  HiOutlineMenu, 
  HiX, 
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { 
      name: 'Hakkımızda',
      href: '/about',
      icon: <HiOutlineLightBulb className="w-5 h-5" />
    },
    {
      name: 'Ürünler',
      href: '/products',
      icon: <HiOutlineCube className="w-5 h-5" />
    },
    { 
      name: 'Hizmetler',
      href: '/services',
      icon: <HiOutlineSparkles className="w-5 h-5" />
    },
    { 
      name: 'İletişim',
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
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
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
            ))}
            
            {/* Dil Seçimi */}
            <button
              onClick={() => router.push(router.pathname, router.pathname, {
                locale: router.locale === 'en' ? 'tr' : 'en',
              })}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
            >
              <HiOutlineGlobe className="w-5 h-5" />
              <span>{router.locale === 'en' ? 'TR' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu */}
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
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => router.push(router.pathname, router.pathname, {
                              locale: router.locale === 'en' ? 'tr' : 'en',
                            })}
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } group flex items-center space-x-2 rounded-md w-full px-4 py-3 text-sm text-gray-700`}
                          >
                            <HiOutlineGlobe className="w-5 h-5" />
                            <span>{router.locale === 'en' ? 'TR' : 'EN'}</span>
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
