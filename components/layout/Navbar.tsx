import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Navbar = () => {
  const { t } = useTranslation('common');

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Logo</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              {t('home')}
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-gray-900">
              {t('products')}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              {t('about')}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;