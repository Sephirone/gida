import { Fragment, useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineMenu, 
  HiX, 
  HiOutlineGlobe,
  HiOutlineCube,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlinePhone,
  HiChevronDown,
  HiOutlineShoppingCart,
  HiOutlineUserGroup,
  HiOutlineDocumentText,
  HiOutlineNewspaper,
  HiHome,
  HiUser,
  HiDocument,
  HiCog
} from 'react-icons/hi';

const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems: NavItem[] = [
    {
      name: "Home",
      href: "/",
      icon: <HiHome className="w-5 h-5" />,
    },
    {
      name: "About",
      href: "/about",
      icon: <HiUser className="w-5 h-5" />,
    },
    {
      name: "Services",
      href: "/services",
      icon: <HiDocument className="w-5 h-5" />,
      submenu: [
        { name: "Service 1", href: "/services/1" },
        { name: "Service 2", href: "/services/2" },
      ]
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <HiCog className="w-5 h-5" />,
    }
  ];

  const languages = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const Logo = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center space-x-2"
    >
      <div className="relative w-12 h-12">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        <div className="absolute inset-1 bg-white rounded-lg flex items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">N</span>
        </div>
      </div>
      <div className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Neo</span>
        <span className="text-gray-800">Mat</span>
      </div>
    </motion.div>
  );

  interface NavItem {
    name: string;
    href: string;
    icon: ReactNode;
    submenu?: { 
      name: string; 
      href: string; 
    }[];
  }

  const NavItem: React.FC<NavItemProps> = ({ item, className }) => (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 rounded-md hover:bg-gray-50 transition-all duration-200">
            {item.icon}
            <span>{item.name}</span>
            {item.submenu && (
              <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            )}
          </Menu.Button>

          {item.submenu && (
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="p-2">
                  {item.submenu.map((subItem) => (
                    <Menu.Item key={subItem.href}>
                      {({ active }) => (
                        <Link
                          href={subItem.href}
                          className={`${
                            active ? 'bg-gray-50 text-blue-600' : 'text-gray-700'
                          } group flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-200`}
                        >
                          {subItem.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          )}
        </>
      )}
    </Menu>
  );

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-slate-900/95 to-blue-900/95 backdrop-blur-md shadow-lg text-white' 
          : 'bg-white text-gray-800'
      }`}
    >
      <div className="border-b border-gray-100/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>

            <div className="hidden md:flex space-x-1">
              {navigationItems.map((item) => (
                <NavItem 
                  key={item.name} 
                  item={item} 
                  className={`
                    px-4 py-2 rounded-full transition-all duration-300
                    ${isScrolled 
                      ? 'hover:bg-white/10 text-gray-100 hover:text-white' 
                      : 'hover:bg-blue-50 text-gray-700 hover:text-blue-600'
                    }
                  `}
                />
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Menu as="div" className="relative">
                <Menu.Button 
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300
                    ${isScrolled 
                      ? 'hover:bg-white/10 text-gray-100' 
                      : 'hover:bg-blue-50 text-gray-700'
                    }
                  `}
                >
                  <HiOutlineGlobe className="w-5 h-5" />
                  <span>{languages.find(lang => lang.code === router.locale)?.name}</span>
                  <HiChevronDown className="w-4 h-4" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-2">
                      {languages.map((language) => (
                        <Menu.Item key={language.code}>
                          {({ active }) => (
                            <button
                              onClick={() => router.push(router.pathname, router.pathname, {
                                locale: language.code,
                              })}
                              className={`${
                                active ? 'bg-gray-50' : ''
                              } ${
                                router.locale === language.code ? 'text-blue-600 font-medium' : 'text-gray-700'
                              } flex items-center space-x-2 w-full px-4 py-2 text-sm rounded-lg transition-all duration-200`}
                            >
                              <span>{language.flag}</span>
                              <span>{language.name}</span>
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <Menu as="div" className="md:hidden">
              {({ open }) => (
                <>
                  <Menu.Button className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200">
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
                    <Menu.Items className="absolute right-0 w-full mt-2 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="p-4">
                        {navigationItems.map((item) => (
                          <div key={item.href} className="py-2">
                            <div className="text-sm font-medium text-gray-900 mb-2">
                              {item.name}
                            </div>
                            {item.submenu && (
                              <div className="ml-4 space-y-1">
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                        <div className="py-2">
                          <div className="text-sm font-medium text-gray-900 mb-2">
                            Dil Seçimi
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {languages.map((language) => (
                              <button
                                key={language.code}
                                onClick={() => router.push(router.pathname, router.pathname, {
                                  locale: language.code,
                                })}
                                className={`flex items-center space-x-2 px-3 py-2 text-sm rounded-md ${
                                  router.locale === language.code
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-700 hover:bg-gray-50'
                                }`}
                              >
                                <span>{language.flag}</span>
                                <span>{language.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
