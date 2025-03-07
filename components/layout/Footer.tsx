import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HiOutlinePhone, 
  HiOutlineMail, 
  HiOutlineLocationMarker,
  HiOutlineGlobeAlt
} from 'react-icons/hi';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube 
} from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation('common');

  const navigation = [
    {
      name: 'Kurumsal',
      submenu: [
        { name: 'Hakkımızda', href: '/about' },
        { name: 'Yönetim Ekibi', href: '/about/management' },
        { name: 'Kariyer', href: '/career' },
        { name: 'Basın', href: '/press' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      name: 'Ürünler',
      submenu: [
        { name: 'Hammaddeler', href: '/products/raw-materials' },
        { name: 'Kimyasallar', href: '/products/chemicals' },
        { name: 'Endüstriyel', href: '/products/industrial' },
        { name: 'Yeni Ürünler', href: '/products/new' },
        { name: 'Özel Çözümler', href: '/products/custom' },
      ],
    },
    {
      name: 'Hizmetler',
      submenu: [
        { name: 'Teknik Destek', href: '/services/technical-support' },
        { name: 'Danışmanlık', href: '/services/consulting' },
        { name: 'AR-GE', href: '/services/research' },
        { name: 'Kalite Kontrol', href: '/services/quality' },
        { name: 'Lojistik', href: '/services/logistics' },
      ],
    },
    {
      name: 'Destek',
      submenu: [
        { name: 'İletişim', href: '/contact' },
        { name: 'SSS', href: '/faq' },
        { name: 'Dokümantasyon', href: '/docs' },
        { name: 'Sertifikalar', href: '/certificates' },
        { name: 'MSDS', href: '/msds' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: 'https://facebook.com' },
    { icon: <FaTwitter />, href: 'https://twitter.com' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com' },
    { icon: <FaInstagram />, href: 'https://instagram.com' },
    { icon: <FaYoutube />, href: 'https://youtube.com' },
  ];

  const contactInfo = [
    { 
      icon: <HiOutlinePhone className="w-5 h-5" />,
      text: '+90 (212) 555 0123',
      href: 'tel:+902125550123'
    },
    { 
      icon: <HiOutlineMail className="w-5 h-5" />,
      text: 'info@neomat.com.tr',
      href: 'mailto:info@neomat.com.tr'
    },
    { 
      icon: <HiOutlineLocationMarker className="w-5 h-5" />,
      text: 'İstanbul, Türkiye',
      href: 'https://maps.google.com'
    },
    { 
      icon: <HiOutlineGlobeAlt className="w-5 h-5" />,
      text: 'www.neomat.com.tr',
      href: 'https://www.neomat.com.tr'
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ana Footer İçeriği */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo ve İletişim */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Neo</span>
                <span className="text-white">Mat</span>
              </div>
              <p className="text-gray-300 max-w-md">
                Endüstriyel hammadde ve kimyasal tedarikinde güvenilir çözüm ortağınız.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hızlı Linkler */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {navigation.map((section, index) => (
              <motion.div
                key={section.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold text-white">{section.name}</h3>
                <ul className="space-y-3">
                  {section.submenu?.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Alt Footer */}
        <div className="border-t border-gray-800 py-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} NeoMat. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
