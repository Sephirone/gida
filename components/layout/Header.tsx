"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// Dil yapılandırması
const translations = {
  tr: {
    name: 'Türkçe',
    flag: 'https://flagcdn.com/w80/tr.png',
    routes: {
      hakkimizda: 'hakkimizda',
      urunler: 'urunler',
      hizmetler: 'hizmetler',
      iletisim: 'iletisim'
    },
    menuItems: {
      hakkimizda: 'Hakkımızda',
      urunler: 'Ürünler',
      hizmetler: 'Hizmetler',
      iletisim: 'İletişim'
    }
  },
  en: {
    name: 'English',
    flag: 'https://flagcdn.com/w80/gb.png',
    routes: {
      hakkimizda: 'about',
      urunler: 'products',
      hizmetler: 'services',
      iletisim: 'contact'
    },
    menuItems: {
      hakkimizda: 'About',
      urunler: 'Products',
      hizmetler: 'Services',
      iletisim: 'Contact'
    }
  },
  de: {
    name: 'Deutsch',
    flag: 'https://flagcdn.com/w80/de.png',
    routes: {
      hakkimizda: 'uber-uns',
      urunler: 'produkte',
      hizmetler: 'dienstleistungen',
      iletisim: 'kontakt'
    },
    menuItems: {
      hakkimizda: 'Über uns',
      urunler: 'Produkte',
      hizmetler: 'Dienstleistungen',
      iletisim: 'Kontakt'
    }
  },
  ru: {
    name: 'Русский',
    flag: 'https://flagcdn.com/w80/ru.png',
    routes: {
      hakkimizda: 'o-nas',
      urunler: 'produkty',
      hizmetler: 'uslugi',
      iletisim: 'kontakty'
    },
    menuItems: {
      hakkimizda: 'О нас',
      urunler: 'Продукты',
      hizmetler: 'Услуги',
      iletisim: 'Контакты'
    }
  },
  ar: {
    name: 'العربية',
    flag: 'https://flagcdn.com/w80/ae.png',
    routes: {
      hakkimizda: 'about',
      urunler: 'products',
      hizmetler: 'services',
      iletisim: 'contact'
    },
    menuItems: {
      hakkimizda: 'معلومات عنا',
      urunler: 'منتجات',
      hizmetler: 'خدمات',
      iletisim: 'اتصل بنا'
    }
  }
};

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileLangDropdownOpen, setIsMobileLangDropdownOpen] = useState(false);
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'tr';
  const currentRoute = pathname.split('/')[2];

  // Header background control
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNewPath = (newLang: string): string => {
    // Eğer mevcut route yoksa sadece dil değişikliği yap
    if (!currentRoute) {
      return `/${newLang}`;
    }

    try {
      // Mevcut dil konfigürasyonunu al
      const currentLangConfig = translations[currentLang as keyof typeof translations];
      if (!currentLangConfig?.routes) {
        console.warn(`No routes found for language: ${currentLang}`);
        return `/${newLang}`;
      }

      // Hedef dil konfigürasyonunu al
      const newLangConfig = translations[newLang as keyof typeof translations];
      if (!newLangConfig?.routes) {
        console.warn(`No routes found for language: ${newLang}`);
        return `/${newLang}`;
      }

      // Mevcut route'un anahtar değerini bul
      const routeEntries = Object.entries(currentLangConfig.routes);
      const matchingRoute = routeEntries.find(([_, value]) => value === currentRoute);

      if (!matchingRoute) {
        console.warn(`No matching route found for: ${currentRoute}`);
        return `/${newLang}`;
      }

      const [routeKey] = matchingRoute;
      const newRoute = newLangConfig.routes[routeKey as keyof typeof newLangConfig.routes];

      if (!newRoute) {
        console.warn(`No translation found for route: ${routeKey} in language: ${newLang}`);
        return `/${newLang}`;
      }

      return `/${newLang}/${newRoute}`;
    } catch (error) {
      console.error('Error in getNewPath:', error);
      return `/${newLang}`;
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm lg:bg-transparent'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
      <nav className="container mx-auto px-4 py-3 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href={`/${currentLang}`} 
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
              <Image
                src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                alt="Company Logo"
                width={40}
                height={40}
                className="w-9 h-9 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                CHEMEX
              </span>
              <span className="text-xs text-gray-600 font-medium">
                Chemical Excellence
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <span 
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 absolute ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''
                }`}
              ></span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full shadow-sm">
              {Object.entries(translations[currentLang as keyof typeof translations].menuItems).map(([key, value]) => {
                const route = translations[currentLang as keyof typeof translations].routes[key as keyof typeof translations[typeof currentLang]['routes']];
                const isActive = currentRoute === route;
                
                return (
                  <Link
                    key={`desktop-${key}`}
                    href={`/${currentLang}/${route}`}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary text-white shadow-md' 
                        : 'text-gray-700 hover:text-primary hover:bg-white/80'
                    }`}
                  >
                    {value}
                  </Link>
                );
              })}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-full hover:bg-white/10 transition-colors"
              >
                <Image
                  src={translations[currentLang as keyof typeof translations].flag}
                  alt={`${translations[currentLang as keyof typeof translations].name} flag`}
                  width={20}
                  height={15}
                  className="rounded-sm object-cover"
                />
                <span className="text-sm font-medium">
                  {translations[currentLang as keyof typeof translations].name}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  {Object.entries(translations).map(([langCode, langData]) => (
                    <Link
                      key={`lang-${langCode}`}
                      href={getNewPath(langCode)}
                      className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        currentLang === langCode ? 'text-primary font-medium' : 'text-gray-700'
                      } flex items-center space-x-2`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <Image
                        src={langData.flag}
                        alt={`${langData.name} flag`}
                        width={20}
                        height={15}
                        className="rounded-sm object-cover"
                      />
                      <span>{langData.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 bg-white z-40">
              <div className="container mx-auto px-4 py-20">
                <div className="space-y-4">
                  {Object.entries(translations[currentLang as keyof typeof translations].menuItems).map(([key, value]) => {
                    const route = translations[currentLang as keyof typeof translations].routes[key as keyof typeof translations[typeof currentLang]['routes']];
                    const isActive = currentRoute === route;
                    
                    return (
                      <Link
                        key={`mobile-${key}`}
                        href={`/${currentLang}/${route}`}
                        className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                          isActive 
                            ? 'bg-primary text-white shadow-md' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {value}
                      </Link>
                    );
                  })}

                  {/* Language Dropdown in Mobile Menu */}
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <button
                      onClick={() => setIsMobileLangDropdownOpen(!isMobileLangDropdownOpen)}
                      className="w-full px-4 py-3 flex items-center justify-between text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <Image
                          src={translations[currentLang as keyof typeof translations].flag}
                          alt={`${translations[currentLang as keyof typeof translations].name} flag`}
                          width={24}
                          height={18}
                          className="rounded-sm object-cover"
                        />
                        <span className="text-lg font-medium">
                          {translations[currentLang as keyof typeof translations].name}
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isMobileLangDropdownOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Language Options Dropdown */}
                    {isMobileLangDropdownOpen && (
                      <div className="mt-2 bg-gray-50 rounded-lg overflow-hidden">
                        {Object.entries(translations).map(([langCode, langData]) => (
                          langCode !== currentLang && (
                            <Link
                              key={`mobile-lang-${langCode}`}
                              href={getNewPath(langCode)}
                              className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-100 transition-colors"
                              onClick={() => {
                                setIsMobileLangDropdownOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <Image
                                src={langData.flag}
                                alt={`${langData.name} flag`}
                                width={24}
                                height={18}
                                className="rounded-sm object-cover"
                              />
                              <span className="text-gray-700">{langData.name}</span>
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
