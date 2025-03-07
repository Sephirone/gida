import type { ReactNode } from 'react';
import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { HiChevronDown, HiHome, HiUser, HiDocument, HiCog } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface NavItem {
  name: string;
  href: string;
  icon: ReactNode;
  submenu?: {
    name: string;
    href: string;
  }[];
}

interface NavItemProps {
  item: NavItem;
  className?: string;
}

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

const NavItem: React.FC<NavItemProps> = ({ item, className }) => {
  const router = useRouter();

  if (item.submenu) {
    return (
      <Menu as="div" className="relative">
        {({ open }) => (
          <>
            <Menu.Button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 rounded-md hover:bg-gray-50 transition-all duration-200">
              {item.icon}
              <span>{item.name}</span>
              <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
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
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  {item.submenu.map((subItem) => (
                    <Menu.Item key={subItem.name}>
                      {({ active }) => (
                        <Link
                          href={subItem.href}
                          className={`${
                            active ? 'bg-blue-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {subItem.name}
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
    );
  }

  return (
    <Link
      href={item.href}
      className={`
        flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200
        ${router.pathname === item.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}
        ${className || ''}
      `}
    >
      {item.icon}
      <span>{item.name}</span>
    </Link>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-blue-600 shadow-lg' : 'bg-transparent'}
      `}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-white' : 'text-gray-900'}`}>
              Your Logo
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            {navigationItems.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                className={`
                  px-4 py-2 rounded-full transition-all duration-300
                  ${isScrolled 
                    ? 'hover:bg-white/10 text-gray-100 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-700 hover:text-gray-900'}
                `}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
