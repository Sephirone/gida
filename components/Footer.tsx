"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const translations = {
  tr: {
    companyName: "CHEMEX",
    tagline: "Chemical Excellence",
    description: "Gıda, ilaç ve kimyasal hammadde tedarikinde güvenilir çözüm ortağınız.",
    quickLinks: "Hızlı Erişim",
    contact: "İletişim",
    socialMedia: "Sosyal Medya",
    address: "Merkez: İstanbul, Türkiye",
    phone: "Tel: +90 (212) 123 45 67",
    email: "E-posta: info@chemex.com",
    rights: "Tüm hakları saklıdır.",
    followUs: "Bizi Takip Edin",
    newsletter: "Bültenimize Abone Olun",
    newsletterDesc: "Yeniliklerden ve güncellemelerden haberdar olun",
    subscribe: "Abone Ol",
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
    companyName: "CHEMEX",
    tagline: "Chemical Excellence",
    description: "Your reliable solution partner in food, pharmaceutical and chemical raw material supply.",
    quickLinks: "Quick Links",
    contact: "Contact",
    socialMedia: "Social Media",
    address: "HQ: Istanbul, Turkey",
    phone: "Phone: +90 (212) 123 45 67",
    email: "Email: info@chemex.com",
    rights: "All rights reserved.",
    followUs: "Follow Us",
    newsletter: "Subscribe to Our Newsletter",
    newsletterDesc: "Stay updated with our latest news and updates",
    subscribe: "Subscribe",
    routes: {
      hakkimizda: 'about',
      urunler: 'products',
      hizmetler: 'services',
      iletisim: 'contact'
    },
    menuItems: {
      hakkimizda: 'About Us',
      urunler: 'Products',
      hizmetler: 'Services',
      iletisim: 'Contact'
    }
  },
  de: {
    companyName: "CHEMEX",
    tagline: "Chemical Excellence",
    description: "Ihr zuverlässiger Lösungspartner für Lebensmittel, Pharma und chemische Rohstoffe.",
    quickLinks: "Schnellzugriff",
    contact: "Kontakt",
    socialMedia: "Soziale Medien",
    address: "Hauptsitz: Istanbul, Türkei",
    phone: "Tel: +90 (212) 123 45 67",
    email: "E-Mail: info@chemex.com",
    rights: "Alle Rechte vorbehalten.",
    followUs: "Folgen Sie uns",
    newsletter: "Newsletter abonnieren",
    newsletterDesc: "Bleiben Sie auf dem Laufenden mit unseren neuesten Nachrichten",
    subscribe: "Abonnieren",
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
    companyName: "CHEMEX",
    tagline: "Chemical Excellence",
    description: "Ваш надежный партнер в поставках пищевого, фармацевтического и химического сырья.",
    quickLinks: "Быстрые ссылки",
    contact: "Контакты",
    socialMedia: "Социальные сети",
    address: "Главный офис: Стамбул, Турция",
    phone: "Тел: +90 (212) 123 45 67",
    email: "Email: info@chemex.com",
    rights: "Все права защищены.",
    followUs: "Подписывайтесь на нас",
    newsletter: "Подпишитесь на нашу рассылку",
    newsletterDesc: "Будьте в курсе наших последних новостей",
    subscribe: "Подписаться",
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
    companyName: "CHEMEX",
    tagline: "Chemical Excellence",
    description: "شريكك الموثوق به في توريد المواد الخام الغذائية والدوائية والكيميائية.",
    quickLinks: "روابط سريعة",
    contact: "اتصل بنا",
    socialMedia: "وسائل التواصل الاجتماعي",
    address: "المقر الرئيسي: اسطنبول، تركيا",
    phone: "هاتف: +90 (212) 123 45 67",
    email: "البريد الإلكتروني: info@chemex.com",
    rights: "جميع الحقوق محفوظة.",
    followUs: "تابعنا",
    newsletter: "اشترك في نشرتنا الإخبارية",
    newsletterDesc: "ابق على اطلاع بآخر الأخبار والتحديثات",
    subscribe: "اشترك",
    routes: {
      hakkimizda: 'عن-الشركة',
      urunler: 'المنتجات',
      hizmetler: 'الخدمات',
      iletisim: 'اتصل-بنا'
    },
    menuItems: {
      hakkimizda: 'عن الشركة',
      urunler: 'المنتجات',
      hizmetler: 'الخدمات',
      iletisim: 'اتصل بنا'
    }
  }
};

export default function Footer() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'tr';
  const t = translations[currentLang as keyof typeof translations] || translations.tr;

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href={`/${currentLang}`} className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                  alt="Chemex Logo"
                  width={40}
                  height={40}
                  className="w-9 h-9 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                  {t.companyName}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {t.tagline}
                </span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              {t.description}
            </p>
            
            {/* Newsletter Subscription */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{t.newsletter}</h4>
              <p className="text-sm text-gray-400">{t.newsletterDesc}</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary hover:bg-primary-dark rounded-lg transition-colors duration-300"
                >
                  {t.subscribe}
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{t.quickLinks}</h3>
            <ul className="space-y-3">
              {Object.entries(t.menuItems).map(([key, value]) => (
                <li key={key}>
                  <Link
                    href={`/${currentLang}/${t.routes[key as keyof typeof t.routes]}`}
                    className="text-gray-400 hover:text-primary-light transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-light/50"></span>
                    <span>{value}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{t.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">{t.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">{t.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">{t.email}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{t.followUs}</h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://linkedin.com/company/chemex" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 text-gray-400 hover:text-primary-light transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a 
                href="https://twitter.com/chemex" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 text-gray-400 hover:text-primary-light transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span>Twitter</span>
              </a>

              <a 
                href="https://facebook.com/chemex" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 text-gray-400 hover:text-primary-light transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>

              <a 
                href="https://instagram.com/chemex" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 text-gray-400 hover:text-primary-light transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
                <span>Instagram</span>
              </a>

              <a 
                href="https://youtube.com/chemex" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 text-gray-400 hover:text-primary-light transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {t.companyName}. {t.rights}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-400 hover:text-primary-light transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-primary-light transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-primary-light transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
