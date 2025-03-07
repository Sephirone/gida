import Link from 'next/link';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram 
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, href: 'https://facebook.com' },
    { icon: <FaTwitter />, href: 'https://twitter.com' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com' },
    { icon: <FaInstagram />, href: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-2xl font-bold mb-2">LOGO</div>
            <p className="text-sm text-blue-100">
              © {new Date().getFullYear()} Company Name. Tüm hakları saklıdır.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center 
                         hover:bg-white/20 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
