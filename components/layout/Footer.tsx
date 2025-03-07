import Link from 'next/link';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, href: 'https://facebook.com' },
    { icon: <FaTwitter />, href: 'https://twitter.com' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com' },
    { icon: <FaInstagram />, href: 'https://instagram.com' },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/chemix-logo.png" alt="ChemiX" className="h-10 w-auto" />
              <div className="text-2xl font-bold">ChemiX</div>
            </div>
            <p className="text-blue-100">
              Endüstriyel çözümler ve kimyasal hammaddeler konusunda 25 yıllık tecrübe ile hizmetinizdeyiz.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center 
                           hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-200 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-200 transition-colors">
                  Ürünlerimiz
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-200 transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-200 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-blue-200" />
                <span>+90 (212) 555 0123</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-200" />
                <span>info@chemix.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-blue-200 mt-1" />
                <span>Maslak, Büyükdere Cad. No:123<br />Sarıyer, İstanbul</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bültenimize Katılın</h3>
            <p className="text-sm text-blue-100 mb-4">
              En son gelişmelerden ve ürünlerimizden haberdar olun.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                         focus:outline-none focus:border-white/40 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-white text-purple-600 font-semibold
                         hover:bg-blue-100 transition-colors"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-blue-100">
          <p>© {new Date().getFullYear()} ChemiX Kimya San. ve Tic. A.Ş. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
