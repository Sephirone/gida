import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const { t } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('products'), href: '/products' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="/logo.png"
                alt="Company Logo"
              />
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
                  ${
                    router.pathname === item.href
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center">
            <button
              onClick={() => router.push(router.pathname, router.pathname, {
                locale: router.locale === 'en' ? 'tr' : 'en',
              })}
              className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {router.locale === 'en' ? 'TR' : 'EN'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;