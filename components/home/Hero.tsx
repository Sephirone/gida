'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const translations = {
  tr: {
    title: "Gıda ve İlaç Endüstrisinde\nGüvenilir Çözüm Ortağınız",
    description: "25 yılı aşkın tecrübemizle, dünya standartlarında hammadde ve katkı maddeleri tedarik ediyoruz.",
    cta: "Ürünleri Keşfet",
    ctaSecondary: "Bize Ulaşın",
    stats: {
      experience: "Yıllık Tecrübe",
      products: "Ürün Çeşidi",
      clients: "Mutlu Müşteri",
      countries: "İhracat Ülkesi"
    },
    features: {
      quality: "ISO Sertifikalı Kalite",
      delivery: "Hızlı Teslimat",
      support: "7/24 Teknik Destek",
      guarantee: "Ürün Garantisi"
    },
    trustedBy: "Güven Verenler",
    companies: ["NESTLÉ", "UNILEVER", "P&G", "JOHNSON & JOHNSON", "PFIZER"],
    highlights: {
      title: "Öne Çıkan Özelliklerimiz",
      items: [
        {
          title: "AR-GE Laboratuvarı",
          description: "Modern cihazlarla donatılmış laboratuvarımızda sürekli inovasyon",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074"
        },
        {
          title: "Sürdürülebilirlik",
          description: "Çevre dostu üretim ve tedarik zinciri yönetimi",
          image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
        },
        {
          title: "Global Ağ",
          description: "45+ ülkeye ihracat ve güçlü tedarikçi ağı",
          image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc"
        }
      ]
    },
    certificates: {
      title: "Kalite Sertifikalarımız",
      list: ["ISO 9001", "ISO 22000", "FSSC 22000", "HALAL", "KOSHER", "GMP"]
    },
    industries: {
      title: "Hizmet Verdiğimiz Sektörler",
      list: [
        {
          name: "Gıda Endüstrisi",
          icon: "🍽️",
          description: "Gıda katkı maddeleri ve işleme yardımcıları"
        },
        {
          name: "İlaç Sanayi",
          icon: "💊",
          description: "Farmasötik hammaddeler ve aktif bileşenler"
        },
        {
          name: "Kozmetik",
          icon: "✨",
          description: "Kozmetik hammaddeleri ve özel formülasyonlar"
        },
        {
          name: "Kimya Sanayi",
          icon: "🧪",
          description: "Endüstriyel kimyasallar ve özel kimyasallar"
        }
      ]
    }
  },
  en: {
    title: "Welcome to Company Name",
    description: "We provide professional food, pharmaceutical and chemical raw material supply solutions. We are Turkey's leading supplier with 25 years of experience.",
    cta: "Discover Our Products",
    ctaSecondary: "Contact Us",
    stats: {
      experience: "Years Experience",
      products: "Products",
      clients: "Happy Clients",
      countries: "Export Countries"
    },
    features: {
      quality: "ISO 9001 Certified",
      delivery: "Fast Delivery",
      support: "24/7 Support",
      guarantee: "Quality Guarantee"
    },
    trustedBy: "Trusted By",
    companies: ["Company A", "Company B", "Company C", "Company D", "Company E"],
    highlights: {
      title: "Our Highlights",
      items: [
        {
          title: "R&D Laboratory",
          description: "Continuous innovation in our modern equipped laboratory",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074"
        },
        {
          title: "Sustainability",
          description: "Eco-friendly production and supply chain management",
          image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
        },
        {
          title: "Global Network",
          description: "Export to 45+ countries and strong supplier network",
          image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc"
        }
      ]
    },
    certificates: {
      title: "Our Quality Certificates",
      list: ["ISO 9001", "ISO 22000", "FSSC 22000", "HALAL", "KOSHER", "GMP"]
    },
    industries: {
      title: "Industries We Serve",
      list: [
        {
          name: "Food Industry",
          icon: "🍽️",
          description: "Food additives and processing aids"
        },
        {
          name: "Pharmaceutical Industry",
          icon: "💊",
          description: "Pharmaceutical raw materials and active ingredients"
        },
        {
          name: "Cosmetics",
          icon: "✨",
          description: "Cosmetic raw materials and special formulations"
        },
        {
          name: "Chemical Industry",
          icon: "🧪",
          description: "Industrial chemicals and specialty chemicals"
        }
      ]
    }
  },
  de: {
    title: "Ihr vertrauenswürdiger Partner in der\nLebensmittel- und Pharmaindustrie",
    description: "Mit über 25 Jahren Erfahrung liefern wir erstklassige Rohstoffe und Zusatzstoffe.",
    cta: "Produkte entdecken",
    ctaSecondary: "Kontaktieren Sie uns",
    stats: {
      experience: "Jahre Erfahrung",
      products: "Produkte",
      clients: "Zufriedene Kunden",
      countries: "Exportländer"
    },
    features: {
      quality: "ISO 9001 zertifiziert",
      delivery: "Schnelle Lieferung",
      support: "24/7 Support",
      guarantee: "Garantie für Qualität"
    },
    trustedBy: "Vertrauen",
    companies: ["Firma A", "Firma B", "Firma C", "Firma D", "Firma E"],
    highlights: {
      title: "Unsere Highlights",
      items: [
        {
          title: "Forschung und Entwicklungslabor",
          description: "Ständige Innovation in unserem modern ausgestatteten Labor",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074"
        },
        {
          title: "Nachhaltigkeit",
          description: "Umweltfreundliche Produktion und Lieferkettengestaltung",
          image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
        },
        {
          title: "Globales Netzwerk",
          description: "Export nach 45+ Ländern und starke Lieferanten-Netzwerk",
          image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc"
        }
      ]
    },
    certificates: {
      title: "Unsere Qualitätszertifikate",
      list: ["ISO 9001", "ISO 22000", "FSSC 22000", "HALAL", "KOSHER", "GMP"]
    },
    industries: {
      title: "Industrien, die wir bedienen",
      list: [
        {
          name: "Lebensmittelindustrie",
          icon: "🍽️",
          description: "Lebensmittelzusatzstoffe und Verarbeitungshilfsmittel"
        },
        {
          name: "Pharmaindustrie",
          icon: "💊",
          description: "Pharmazeutische Rohstoffe und aktive Zutaten"
        },
        {
          name: "Kosmetik",
          icon: "✨",
          description: "Kosmetikzusatzstoffe und spezielle Formulierungen"
        },
        {
          name: "Chemische Industrie",
          icon: "🧪",
          description: "Industrielle Chemikalien und Spezialchemikalien"
        }
      ]
    }
  },
  ru: {
    title: "Ваш надежный партнер в пищевой\nи фармацевтической промышленности",
    description: "С более чем 25-летним опытом мы поставляем сырье и добавки мирового класса.",
    cta: "Откройте для себя продукты",
    ctaSecondary: "Свяжитесь с нами",
    stats: {
      experience: "Лет опыта",
      products: "Товары",
      clients: "Счастливые клиенты",
      countries: "Экспортные страны"
    },
    features: {
      quality: "Сертифицировано по ISO 9001",
      delivery: "Быстрая доставка",
      support: "Поддержка 24/7",
      guarantee: "Гарантия качества"
    },
    trustedBy: "Нам доверяют",
    companies: ["Компания A", "Компания B", "Компания C", "Компания D", "Компания E"],
    highlights: {
      title: "Наши особенности",
      items: [
        {
          title: "Лаборатория разработки и производства",
          description: "Непрерывная инновация в нашей современной оборудованной лаборатории",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074"
        },
        {
          title: "Устойчивость",
          description: "Эко-дружественная производство и управление цепочкой поставок",
          image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
        },
        {
          title: "Глобальная сеть",
          description: "Экспорт в 45+ стран и сильная сеть поставщиков",
          image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc"
        }
      ]
    },
    certificates: {
      title: "Наши сертификаты качества",
      list: ["ISO 9001", "ISO 22000", "FSSC 22000", "HALAL", "KOSHER", "GMP"]
    },
    industries: {
      title: "Отрасли, в которых мы работаем",
      list: [
        {
          name: "Продовольственная отрасль",
          icon: "🍽️",
          description: "Продовольственные добавки и помощники в производстве"
        },
        {
          name: "Фармацевтическая отрасль",
          icon: "💊",
          description: "Фармацевтические сырье и активные компоненты"
        },
        {
          name: "Косметика",
          icon: "✨",
          description: "Косметические компоненты и специальные формулы"
        },
        {
          name: "Химическая отрасль",
          icon: "🧪",
          description: "Промышленные химикаты и специальные химикаты"
        }
      ]
    }
  },
  ar: {
    title: "شريكك الموثوق به في صناعات\nالأغذية والأدوية",
    description: "مع خبرة تزيد عن 25 عامًا، نقوم بتوريد مواد خام وإضافات عالمية المستوى.",
    cta: "اكتشف المنتجات",
    ctaSecondary: "اتصل بنا",
    stats: {
      experience: "سنوات الخبرة",
      products: "المنتجات",
      clients: "عملاء سعداء",
      countries: "دول التصدير"
    },
    features: {
      quality: "معتمد على ISO 9001",
      delivery: "توصيل سريع",
      support: "دعم 24/7",
      guarantee: "ضمان الجودة"
    },
    trustedBy: "تثق به",
    companies: ["شركة A", "شركة B", "شركة C", "شركة D", "شركة E"],
    highlights: {
      title: "ميزاتنا",
      items: [
        {
          title: "مختبر البحث والتطوير",
          description: "ابتكار مستمر في مختبرنا المجهز الحديث",
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074"
        },
        {
          title: "ال持続可能性",
          description: "生産と供給チェーンの管理",
          image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
        },
        {
          title: "Global Network",
          description: "Export to 45+ countries and strong supplier network",
          image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc"
        }
      ]
    },
    certificates: {
      title: "Our Quality Certificates",
      list: ["ISO 9001", "ISO 22000", "FSSC 22000", "HALAL", "KOSHER", "GMP"]
    },
    industries: {
      title: "Industries We Serve",
      list: [
        {
          name: "Food Industry",
          icon: "🍽️",
          description: "Food additives and processing aids"
        },
        {
          name: "Pharmaceutical Industry",
          icon: "💊",
          description: "Pharmaceutical raw materials and active ingredients"
        },
        {
          name: "Cosmetics",
          icon: "✨",
          description: "Cosmetic raw materials and special formulations"
        },
        {
          name: "Chemical Industry",
          icon: "🧪",
          description: "Industrial chemicals and specialty chemicals"
        }
      ]
    }
  }
};

export default function Hero() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'tr';
  
  // Dil kontrolü ve varsayılan dil ayarı
  const t = translations[currentLang as keyof typeof translations] || translations.tr;

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const { ref: mainRef, inView: mainInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Combine both static and random particles
    const staticParticles = [
      { width: 3, height: 3, left: 20, top: 30, duration: 15 },
      { width: 4, height: 4, left: 40, top: 50, duration: 12 },
      { width: 2, height: 2, left: 60, top: 70, duration: 18 },
      { width: 5, height: 5, left: 80, top: 90, duration: 20 },
    ];

    const randomParticles = Array.from({ length: 26 }, () => ({
      width: 2 + Math.random() * 4,
      height: 2 + Math.random() * 4,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 10 + Math.random() * 10
    }));

    setParticles([...staticParticles, ...randomParticles]);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <motion.section 
        style={{ y, opacity }}
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-label="hero"
      >
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="relative h-full w-full"
            style={{ scale: useTransform(scrollYProgress, [0, 1], [1.1, 1.3]) }}
          >
            <Image
              src="/images/hero-background.jpg"
              alt="Modern laboratory environment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />
            
            {/* Animated Particles */}
            <div className="absolute inset-0 opacity-30">
              {particles.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1],
                    x: [-20, 20, -20],
                    y: [-20, 20, -20]
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  style={{
                    width: `${particle.width}px`,
                    height: `${particle.height}px`,
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 z-10" ref={mainRef}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={mainInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight whitespace-pre-line">
                {t.title}
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                {t.description}
              </p>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link href={`/${currentLang}/products`}>
                  <motion.button
                    className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t.cta}
                  </motion.button>
                </Link>
                <Link href={`/${currentLang}/contact`}>
                  <motion.button
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t.ctaSecondary}
                  </motion.button>
                </Link>
              </div>

              {/* Stats with Counting Animation */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {[
                  { number: 25, key: "experience" },
                  { number: 1000, key: "products" },
                  { number: 500, key: "clients" },
                  { number: 45, key: "countries" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.key}
                    className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={mainInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div 
                      className="text-3xl font-bold mb-2"
                      initial={{ number: 0 }}
                      animate={{ number: stat.number }}
                      transition={{ duration: 2, delay: 0.5 }}
                    >
                      {stat.number}+
                    </motion.div>
                    <div className="text-sm text-gray-200">{t.stats[stat.key as keyof typeof t.stats]}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              animate={mainInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
                  alt="Modern laboratory equipment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Highlights Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.highlights.title}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.highlights.items.map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.industries.title}
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {t.industries.list.map((industry, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                <p className="text-sm opacity-80">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.certificates.title}
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8">
            {t.certificates.list.map((cert, index) => (
              <motion.div
                key={index}
                className="px-8 py-4 bg-white/10 rounded-full backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl font-semibold text-center text-gray-800 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.trustedBy}
          </motion.h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {t.companies.map((company, index) => (
              <motion.div
                key={company}
                className="text-gray-500 text-lg font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
