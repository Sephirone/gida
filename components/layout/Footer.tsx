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
  FaInstagram 
} from 'react-icons/fa';

const Footer = () => {
  const navigation = [
    {
      title: 'Kurumsal',
      links: [
        { name: 'Hakkımızda', href: '/about' },
        { name: 'Vizyon & Misyon', href: '/about/vision' },
        { name: 'Yönetim Ekibi', href: '/about/team' },
        { name: 'Kariyer', href: '/career' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Ürünler',
      links: [
        { name: 'Hammaddeler', href: '/products/raw' },
        { name: 'Kimyasallar', href: '/products/chemicals' },
        { name: 'Özel Ürünler', href: '/products/special' },
        { name: 'Yeni Ürünler', href: '/products/new' },
        { name: 'Katalog', href: '/products/catalog' },
      ],
    },
    {
      title: 'Hizmetler',
      links: [
        { name: 'Teknik Destek', href: '/services/support' },
        { name: 'Ar-Ge', href: '/services/research' },
        { name: 'Kalite Kontrol', href: '/services/quality' },
        { name: 'Lojistik', href: '/services/logistics' },
        { name: 'Danışmanlık', href: '/services/consulting' },
      ],
    },
    {
      title: 'Faydalı Linkler',
      links: [
        { name: 'SSS', href: '/faq' },
        { name: 'İletişim', href: '/contact' },
        { name: 'Gizlilik Politikası', href: '/privacy' },
        { name: 'Kullanım Şartları', href: '/terms' },
        { name: 'Site Haritası', href: '/sitemap' },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <HiOutlinePhone className="w-5 h-5" />,
      label: 'Telefon',
      value: '+90 (212) 555 01 23',
      href: 'tel:+902125550123',
    },
    {
      icon: <HiOutlineMail className="w-5 h-5" />,
      label: 'E-posta',
      value: 'info@company.com',
      href: 'mailto:info@company.com',
    },
    {
      icon: <HiOutlineLocationMarker className="w-5 h-5" />,
      label: 'Adres',
      value: 'İstanbul, Türkiye',
      href: 'https://maps.google.com',
    },
    {
      icon: <HiOutlineGlobeAlt className="w-5 h-5" />,
      label: 'Web',
      value: 'www.company.com',
      href: 'https://www.company.com',
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: 'https://facebook.com' },
    { icon: <FaTwitter />, href: 'https://twitter.com' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com' },
    { icon: <FaInstagram />, href: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                  LOGO
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Endüstriyel hammadde ve kimyasal tedarikinde 20 yılı aşkın tecrübemizle
                sektörün öncü kuruluşlarından biriyiz.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="text-sm">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          {navigation.map((section, sectionIndex) => (
            <div key={section.title} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Company Name. Tüm hakları saklıdır.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
