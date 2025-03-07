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

  const footerSections = [
    {
      title: 'Kurumsal',
      links: [
        { name: 'Hakkımızda', href: '/about' },
        { name: 'Yönetim Ekibi', href: '/about/management' },
        { name: 'Kariyer', href: '/career' },
        { name: 'Basın', href: '/press' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Ürünler',
      links: [
        { name: 'Hammaddeler', href: '/products/raw-materials' },
        { name: 'Kimyasallar', href: '/products/chemicals' },
        { name: 'Endüstriyel', href: '/products/industrial' },
        { name: 'Yeni Ürünler', href: '/products/new' },
        { name: 'Özel Çözümler', href: '/products/custom' },
      ],
    },
    {
      title: 'Hizmetler',
      links: [
        { name: 'Teknik Destek', href: '/services/technical-support' },
        { name: 'Danışmanlık', href: '/services/consulting' },
        { name: 'AR-GE', href: '/services/research' },
        { name: 'Kalite Kontrol', href: '/services/quality' },
        { name: 'Lojistik', href: '/services/logistics' },
      ],
    },
    {
      title: 'Destek',
      links: [
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
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ana Footer İçeriği */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo ve İletişim */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">Neo</span>
                <span className="text-white">Mat</span>
              </div>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Bölümleri */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Alt Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} NeoMat. Tüm hakları saklıdır.
            </div>
            
            {/* Sosyal Medya Linkleri */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Alt Linkler */}
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Kullanım Şartları
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
