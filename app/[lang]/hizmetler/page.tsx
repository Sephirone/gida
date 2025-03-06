'use client';

import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';

const translations = {
  tr: {
    hero: {
      title: "Profesyonel Çözümler",
      subtitle: "Endüstriyel ihtiyaçlarınız için kapsamlı hizmet yelpazesi"
    },
    categories: [
      {
        title: "Tedarik Zinciri Yönetimi",
        description: "Global tedarik ağımız ve optimize edilmiş lojistik süreçlerimizle hammadde tedarikinde güvenilir çözümler",
        features: [
          "Tam zamanında teslimat",
          "Stok optimizasyonu",
          "Tedarikçi yönetimi",
          "Kalite kontrol"
        ],
        stats: {
          partners: "150+ Tedarikçi",
          countries: "30+ Ülke",
          shipments: "1000+ Aylık Sevkiyat"
        },
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3" // Lojistik/tedarik zinciri görseli
      },
      {
        title: "Teknik Danışmanlık",
        description: "Uzman ekibimizle ürün seçimi ve kullanımında profesyonel destek",
        features: [
          "Formülasyon desteği",
          "Proses optimizasyonu",
          "Ürün uygunluk analizi",
          "Verimlilik artırma"
        ],
        stats: {
          experts: "25+ Uzman",
          projects: "500+ Proje",
          solutions: "1000+ Çözüm"
        },
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3" // Danışmanlık/toplantı görseli
      },
      {
        title: "Laboratuvar Hizmetleri",
        description: "Modern laboratuvarlarımızda kalite kontrol ve AR-GE çalışmaları",
        features: [
          "Kalite kontrol testleri",
          "Ürün geliştirme",
          "Stabilite testleri",
          "Özel analiz hizmetleri"
        ],
        stats: {
          tests: "10000+ Test/Yıl",
          methods: "50+ Test Metodu",
          equipment: "30+ Cihaz"
        },
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3" // Laboratuvar görseli
      },
      {
        title: "Özel Üretim Çözümleri",
        description: "Müşteri ihtiyaçlarına özel ürün geliştirme ve üretim hizmetleri",
        features: [
          "Özel formülasyon",
          "Pilot üretim",
          "Ölçek büyütme",
          "Proses validasyonu"
        ],
        stats: {
          capacity: "1000+ Ton/Yıl",
          products: "100+ Özel Ürün",
          clients: "50+ Özel Müşteri"
        },
        image: "https://images.unsplash.com/photo-1587451152204-4a00b3859b4b?ixlib=rb-4.0.3" // Üretim/fabrika görseli
      }
    ],
    specialties: {
      title: "Uzmanlık Alanlarımız",
      items: [
        {
          title: "Gıda Endüstrisi",
          description: "Gıda katkı maddeleri ve işleme yardımcıları konusunda uzman çözümler",
          icon: "🍽️"
        },
        {
          title: "İlaç Sanayi",
          description: "GMP standartlarında farmasötik hammadde tedariği",
          icon: "💊"
        },
        {
          title: "Kozmetik",
          description: "Yenilikçi kozmetik hammaddeleri ve formülasyon desteği",
          icon: "✨"
        },
        {
          title: "Endüstriyel Üretim",
          description: "Endüstriyel prosesler için teknik destek ve hammadde tedariği",
          icon: "🏭"
        }
      ]
    },
    certifications: {
      title: "Kalite Standartlarımız",
      description: "Uluslararası standartlara uygun hizmet güvencesi",
      items: [
        "ISO 9001:2015",
        "ISO 14001:2015",
        "FSSC 22000",
        "GMP",
        "GDP",
        "HALAL",
        "KOSHER"
      ]
    },
    contact: {
      title: "Hizmetlerimiz Hakkında Bilgi Alın",
      description: "Uzman ekibimiz sizinle iletişime geçsin",
      button: "İletişime Geç"
    }
  },
  en: {
    hero: {
      title: "Professional Solutions",
      subtitle: "Comprehensive service range for your industrial needs"
    },
    categories: [
      {
        title: "Supply Chain Management",
        description: "Reliable solutions in raw material supply with our global supply network and optimized logistics processes",
        features: [
          "Just-in-time delivery",
          "Stock optimization",
          "Supplier management",
          "Quality control"
        ],
        stats: {
          partners: "150+ Suppliers",
          countries: "30+ Countries",
          shipments: "1000+ Monthly Shipments"
        },
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3" // Lojistik/tedarik zinciri görseli
      },
      {
        title: "Technical Consulting",
        description: "Professional support in product selection and usage with our expert team",
        features: [
          "Formulation support",
          "Process optimization",
          "Product compatibility analysis",
          "Efficiency improvement"
        ],
        stats: {
          experts: "25+ Experts",
          projects: "500+ Projects",
          solutions: "1000+ Solutions"
        },
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3" // Danışmanlık/toplantı görseli
      },
      {
        title: "Laboratory Services",
        description: "Quality control and R&D studies in our modern laboratories",
        features: [
          "Quality control tests",
          "Product development",
          "Stability tests",
          "Special analysis services"
        ],
        stats: {
          tests: "10000+ Tests/Year",
          methods: "50+ Test Methods",
          equipment: "30+ Equipment"
        },
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3" // Laboratuvar görseli
      },
      {
        title: "Custom Production Solutions",
        description: "Custom product development and production services for customer needs",
        features: [
          "Custom formulation",
          "Pilot production",
          "Scale-up",
          "Process validation"
        ],
        stats: {
          capacity: "1000+ Tons/Year",
          products: "100+ Custom Products",
          clients: "50+ Special Clients"
        },
        image: "https://images.unsplash.com/photo-1587451152204-4a00b3859b4b?ixlib=rb-4.0.3" // Üretim/fabrika görseli
      }
    ],
    specialties: {
      title: "Our Expertise",
      items: [
        {
          title: "Food Industry",
          description: "Expert solutions in food additives and processing aids",
          icon: "🍽️"
        },
        {
          title: "Pharmaceutical Industry",
          description: "Pharmaceutical raw material supply in GMP standards",
          icon: "💊"
        },
        {
          title: "Cosmetics",
          description: "Innovative cosmetic raw materials and formulation support",
          icon: "✨"
        },
        {
          title: "Industrial Production",
          description: "Technical support and raw material supply for industrial processes",
          icon: "🏭"
        }
      ]
    },
    certifications: {
      title: "Our Quality Standards",
      description: "Service assurance in compliance with international standards",
      items: [
        "ISO 9001:2015",
        "ISO 14001:2015",
        "FSSC 22000",
        "GMP",
        "GDP",
        "HALAL",
        "KOSHER"
      ]
    },
    contact: {
      title: "Learn More About Our Services",
      description: "Let our expert team contact you",
      button: "Contact Us"
    }
  },
  de: {
    hero: {
      title: "Professionelle Lösungen",
      subtitle: "Umfassendes Serviceangebot für Ihre industriellen Bedürfnisse"
    },
    categories: [
      {
        title: "Lieferkettengestaltung",
        description: "Verlässliche Lösungen für Rohstoffversorgung mit unserem globalen Lieferkettengesetz und optimierten Logistikprozessen",
        features: [
          "Pünktliche Lieferung",
          "Bestandsoptimierung",
          "Lieferantenmanagement",
          "Qualitätskontrolle"
        ],
        stats: {
          partners: "150+ Lieferanten",
          countries: "30+ Länder",
          shipments: "1000+ Monatliche Lieferungen"
        },
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3" // Lojistik/tedarik zinciri görseli
      },
      {
        title: "Technische Beratung",
        description: "Professionelle Unterstützung bei Produktauswahl und Nutzung mit unserem Expertenteam",
        features: [
          "Formulierungssupport",
          "Prozessoptimierung",
          "Produktkompatibilitätanalyse",
          "Effizienzsteigerung"
        ],
        stats: {
          experts: "25+ Experten",
          projects: "500+ Projekte",
          solutions: "1000+ Lösungen"
        },
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3" // Danışmanlık/toplantı görseli
      },
      {
        title: "Laboratorienleistungen",
        description: "Qualitätskontrolle und R&D-Studien in unseren modernen Laboratorien",
        features: [
          "Qualitätskontrolltests",
          "Produktentwicklung",
          "Stabilitätstests",
          "Spezialanalyseleistungen"
        ],
        stats: {
          tests: "10000+ Tests/Jahr",
          methods: "50+ Testmethoden",
          equipment: "30+ Ausrüstung"
        },
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3" // Laboratuvar görseli
      },
      {
        title: "Individuelle Produktlösungen",
        description: "Individuelle Produktentwicklung und Produktionsdienstleistungen für Kundenbedürfnisse",
        features: [
          "Individuelle Formulierung",
          "Pilotproduktion",
          "Skalierung",
          "Prozessvalidierung"
        ],
        stats: {
          capacity: "1000+ Tonnen/Jahr",
          products: "100+ Individuelle Produkte",
          clients: "50+ Spezialkunden"
        },
        image: "https://images.unsplash.com/photo-1587451152204-4a00b3859b4b?ixlib=rb-4.0.3" // Üretim/fabrika görseli
      }
    ],
    specialties: {
      title: "Unsere Expertise",
      items: [
        {
          title: "Ernährungsindustrie",
          description: "Expertenlösungen für Ernährungszusatzstoffe und Verarbeitungshilfsstoffe",
          icon: "🍽️"
        },
        {
          title: "Pharmazeutische Industrie",
          description: "Pharmazeutische Rohstoffversorgung in GMP-Standarden",
          icon: "💊"
        },
        {
          title: "Kosmetik",
          description: "Innovativer Kosmetikrohstoffe und Formulierungsunterstützung",
          icon: "✨"
        },
        {
          title: "Industrielle Produktion",
          description: "Technische Unterstützung und Rohstoffversorgung für industrielle Prozesse",
          icon: "🏭"
        }
      ]
    },
    certifications: {
      title: "Unsere Qualitätsstandards",
      description: "Servicegarantie in Übereinstimmung mit internationalen Standards",
      items: [
        "ISO 9001:2015",
        "ISO 14001:2015",
        "FSSC 22000",
        "GMP",
        "GDP",
        "HALAL",
        "KOSHER"
      ]
    },
    contact: {
      title: "Mehr über unsere Dienstleistungen erfahren",
      description: "Lassen Sie unser Expertenteam Sie kontaktieren",
      button: "Kontaktieren Sie uns"
    }
  },
  ru: {
    hero: {
      title: "Профессиональные Решения",
      subtitle: "Комплексный спектр услуг для ваших промышленных потребностей"
    },
    categories: [
      {
        title: "Управление цепочками поставок",
        description: "Надежные решения в поставках сырья с нашей глобальной сетью поставок и оптимизированными логистическими процессами",
        features: [
          "Своевременная доставка",
          "Оптимизация запасов",
          "Управление поставщиками",
          "Контроль качества"
        ],
        stats: {
          partners: "150+ Поставщиков",
          countries: "30+ Стран",
          shipments: "1000+ Отправок в месяц"
        },
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3"
      },
      {
        title: "Техническое консультирование",
        description: "Профессиональная поддержка в выборе и использовании продукции с нашей командой экспертов",
        features: [
          "Поддержка в формулировании",
          "Оптимизация процессов",
          "Анализ совместимости продуктов",
          "Повышение эффективности"
        ],
        stats: {
          experts: "25+ Экспертов",
          projects: "500+ Проектов",
          solutions: "1000+ Решений"
        },
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
      },
      {
        title: "Лабораторные услуги",
        description: "Контроль качества и исследования в наших современных лабораториях",
        features: [
          "Тесты контроля качества",
          "Разработка продукции",
          "Тесты стабильности",
          "Специальные аналитические услуги"
        ],
        stats: {
          tests: "10000+ Тестов/год",
          methods: "50+ Методов тестирования",
          equipment: "30+ Единиц оборудования"
        },
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3"
      },
      {
        title: "Индивидуальные производственные решения",
        description: "Разработка и производство продукции по индивидуальным требованиям клиентов",
        features: [
          "Индивидуальные формулировки",
          "Пилотное производство",
          "Масштабирование",
          "Валидация процессов"
        ],
        stats: {
          capacity: "1000+ Тонн/год",
          products: "100+ Специальных продуктов",
          clients: "50+ Особых клиентов"
        },
        image: "https://images.unsplash.com/photo-1587451152204-4a00b3859b4b?ixlib=rb-4.0.3"
      }
    ],
    specialties: {
      title: "Наши специализации",
      items: [
        {
          title: "Пищевая промышленность",
          description: "Экспертные решения в области пищевых добавок и технологических вспомогательных средств",
          icon: "🍽️"
        },
        {
          title: "Фармацевтическая промышленность",
          description: "Поставка фармацевтического сырья по стандартам GMP",
          icon: "💊"
        },
        {
          title: "Косметика",
          description: "Инновационное сырье для косметики и поддержка в разработке формул",
          icon: "✨"
        },
        {
          title: "Промышленное производство",
          description: "Техническая поддержка и поставка сырья для промышленных процессов",
          icon: "🏭"
        }
      ]
    },
    certifications: {
      title: "Наши стандарты качества",
      description: "Гарантия обслуживания в соответствии с международными стандартами",
      items: [
        "ISO 9001:2015",
        "ISO 14001:2015",
        "FSSC 22000",
        "GMP",
        "GDP",
        "HALAL",
        "KOSHER"
      ]
    },
    contact: {
      title: "Узнайте больше о наших услугах",
      description: "Позвольте нашей команде экспертов связаться с вами",
      button: "Связаться с нами"
    }
  },
  ar: {
    hero: {
      title: "حلول مهنية متخصصة",
      subtitle: "مجموعة شاملة من الخدمات لاحتياجاتك الصناعية"
    },
    categories: [
      {
        title: "إدارة سلسلة التوريد",
        description: "حلول موثوقة في توريد المواد الخام من خلال شبكة التوريد العالمية وعمليات الخدمات اللوجستية المحسنة",
        features: [
          "التسليم في الوقت المحدد",
          "تحسين المخزون",
          "إدارة الموردين",
          "مراقبة الجودة"
        ],
        stats: {
          partners: "+150 مورد",
          countries: "+30 دولة",
          shipments: "+1000 شحنة شهري"
        },
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3"
      },
      {
        title: "الاستشارات الفنية",
        description: "دعم احترافي في اختيار المنتجات واستخدامها مع فريق الخبراء لدينا",
        features: [
          "دعم الصياغة",
          "تحسين العمليات",
          "تحليل توافق المنتجات",
          "تحسين الكفاءة"
        ],
        stats: {
          experts: "+25 خبير",
          projects: "+500 مشروع",
          solutions: "+1000 حل"
        },
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
      },
      {
        title: "خدمات المختبرات",
        description: "مراقبة الجودة والبحث والتطوير في مختبراتنا الحديثة",
        features: [
          "اختبارات مراقبة الجودة",
          "تطوير المنتجات",
          "اختبارات الثبات",
          "خدمات التحليل الخاصة"
        ],
        stats: {
          tests: "+10000 اختبار/سنة",
          methods: "+50 طريقة اختبار",
          equipment: "+30 جهاز"
        },
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3"
      },
      {
        title: "حلول الإنتاج المخصص",
        description: "تطوير وإنتاج منتجات مخصصة حسب احتياجات العملاء",
        features: [
          "صياغة مخصصة",
          "الإنتاج التجريبي",
          "توسيع النطاق",
          "التحقق من صحة العمليات"
        ],
        stats: {
          capacity: "+1000 طن/سنة",
          products: "+100 منتج خاص",
          clients: "+50 عميل خاص"
        },
        image: "https://images.unsplash.com/photo-1587451152204-4a00b3859b4b?ixlib=rb-4.0.3"
      }
    ],
    specialties: {
      title: "مجالات تخصصنا",
      items: [
        {
          title: "صناعة الأغذية",
          description: "حلول متخصصة في المواد المضافة للأغذية ومساعدات المعالجة",
          icon: "🍽️"
        },
        {
          title: "الصناعات الدوائية",
          description: "توريد المواد الخام الصيدلانية وفق لمعايير GMP",
          icon: "💊"
        },
        {
          title: "مستحضرات التجميل",
          description: "مواد خام مبتكرة ودعم في صياغة مستحضرات التجميل",
          icon: "✨"
        },
        {
          title: "الإنتاج الصناعي",
          description: "دعم فني وتوريد المواد الخام للعمليات الصناعية",
          icon: "🏭"
        }
      ]
    },
    certifications: {
      title: "معايير الجودة لدينا",
      description: "ضمان الخدمة وفق للمعايير الدولية",
      items: [
        "ISO 9001:2015",
        "ISO 14001:2015",
        "FSSC 22000",
        "GMP",
        "GDP",
        "HALAL",
        "KOSHER"
      ]
    },
    contact: {
      title: "تعرف على المزيد حول خدماتنا",
      description: "دع فريق الخبراء لدينا يتواصل معك",
      button: "تواصل معنا"
    }
  }
};

export default function ServicesPage() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Early return öncesi hooks'ları taşı
  if (!translations) {
    return <div>Loading...</div>;
  }

  return (
    <motion.main style={{ opacity: scrollYProgress }} className="pt-20" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
          alt="Services"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 mix-blend-multiply" />
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="h-full flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-100"
            >
              {t.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {t.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } mb-20`}
            >
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">{category.title}</h2>
                <p className="text-gray-600 mb-8">{category.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(category.stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-sm text-gray-600">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 relative h-[400px] w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16"
          >
            {t.specialties.title}
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {t.specialties.items.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6"
          >
            {t.certifications.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 mb-12"
          >
            {t.certifications.description}
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6">
            {t.certifications.items.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white px-6 py-3 rounded-full shadow-md text-primary font-semibold"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-100 mb-8"
          >
            {t.contact.description}
          </motion.p>
          <Link href={`/${currentLang}/iletisim`} className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            {t.contact.button}
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
