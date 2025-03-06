'use client';

import { usePathname } from 'next/navigation';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

// Define the structure of your translations
type TranslationType = {
  hero: {
    title: string;
    subtitle: string;
  };
  stats: Array<{
    number: string;
    label: string;
  }>;
  mission: {
    title: string;
    description: string;
    values: string[];
  };
  vision: {
    title: string;
    description: string;
  };
  history: {
    title: string;
    timeline: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };
  sustainability: {
    title: string;
    description: string;
    initiatives: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  certificates: {
    title: string;
    list: string[];
  };
  facilities: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      image: string;
    }>;
  };
};

type Translations = {
  [key in 'tr' | 'en' | 'de' | 'ru' | 'ar']: TranslationType;
};

const translations: Translations = {
  tr: {
    hero: {
      title: "25 Yıllık Tecrübe, Sonsuz Güven",
      subtitle: "Kimya sektöründe çeyrek asırlık yolculuğumuz"
    },
    stats: [
      { number: "25+", label: "Yıllık Tecrübe" },
      { number: "1000+", label: "Ürün Çeşidi" },
      { number: "50+", label: "İhracat Ülkesi" },
      { number: "5000+", label: "Mutlu Müşteri" }
    ],
    mission: {
      title: "Misyonumuz",
      description: "Dünya standartlarında kalite ve güvenilirlik ilkesiyle, müşterilerimize yenilikçi çözümler sunarak, kimya sektöründe öncü ve tercih edilen bir iş ortağı olmak.",
      values: [
        "Müşteri Odaklılık",
        "Sürdürülebilirlik",
        "İnovasyon",
        "Kalite"
      ]
    },
    vision: {
      title: "Vizyonumuz",
      description: "Global kimya sektöründe sürdürülebilir büyüme ile lider konuma ulaşmak ve sektöre yön veren bir firma olmak."
    },
    history: {
      title: "Tarihçemiz",
      timeline: [
        {
          year: "1998",
          title: "Kuruluş",
          description: "İstanbul'da kimyasal hammadde ticareti ile faaliyetlerimize başladık."
        },
        {
          year: "2005",
          title: "İlk İhracat",
          description: "Orta Doğu pazarına açılarak uluslararası ticarete başladık."
        },
        {
          year: "2010",
          title: "Üretim Tesisi",
          description: "Gebze'de ilk üretim tesisimizi kurduk."
        },
        {
          year: "2015",
          title: "AR-GE Merkezi",
          description: "Yenilikçi ürün geliştirme çalışmaları için AR-GE merkezimizi açtık."
        },
        {
          year: "2020",
          title: "Dijital Dönüşüm",
          description: "Endüstri 4.0 uyumlu akıllı üretim sistemlerine geçiş yaptık."
        }
      ]
    },
    sustainability: {
      title: "Sürdürülebilirlik",
      description: "Çevreye ve geleceğe olan sorumluluğumuzun bilincindeyiz",
      initiatives: [
        {
          title: "Karbon Ayak İzi Azaltma",
          description: "2025 yılına kadar karbon emisyonlarımızı %50 azaltmayı hedefliyoruz",
          icon: "🌱"
        },
        {
          title: "Yenilenebilir Enerji",
          description: "Tesislerimizde güneş enerjisi kullanımını artırıyoruz",
          icon: "☀️"
        },
        {
          title: "Atık Yönetimi",
          description: "Sıfır atık politikası ile çalışıyoruz",
          icon: "♻️"
        }
      ]
    },
    certificates: {
      title: "Sertifikalarımız",
      list: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "GMP", "HACCP"]
    },
    facilities: {
      title: "Tesislerimiz",
      items: [
        {
          title: "Üretim Tesisi",
          description: "Modern üretim hatlarımız",
          image: "/images/facility1.jpg"
        },
        {
          title: "AR-GE Merkezi",
          description: "Yenilikçi çözümler için araştırma merkezi",
          image: "/images/facility2.jpg"
        },
        {
          title: "Lojistik Merkezi",
          description: "Dünya çapında dağıtım ağı",
          image: "/images/facility3.jpg"
        }
      ]
    }
  },
  en: {
    hero: {
      title: "25 Years of Experience, Infinite Trust",
      subtitle: "A quarter-century journey in the chemical industry"
    },
    stats: [
      { number: "25+", label: "Years Experience" },
      { number: "1000+", label: "Product Types" },
      { number: "50+", label: "Export Countries" },
      { number: "5000+", label: "Happy Clients" }
    ],
    mission: {
      title: "Our Mission",
      description: "To become a leading and preferred business partner in the chemical industry by providing innovative solutions to our customers with world-class quality and reliability.",
      values: [
        "Customer Focus",
        "Sustainability",
        "Innovation",
        "Quality"
      ]
    },
    vision: {
      title: "Our Vision",
      description: "To achieve a leading position in the global chemical industry through sustainable growth and become a company that shapes the sector."
    },
    history: {
      title: "Our History",
      timeline: [
        {
          year: "1998",
          title: "Foundation",
          description: "We started our operations in Istanbul with chemical raw material trading."
        },
        {
          year: "2005",
          title: "First Export",
          description: "We entered international trade by expanding to the Middle East market."
        },
        {
          year: "2010",
          title: "Production Facility",
          description: "We established our first production facility in Gebze."
        },
        {
          year: "2015",
          title: "R&D Center",
          description: "We opened our R&D center for innovative product development."
        },
        {
          year: "2020",
          title: "Digital Transformation",
          description: "We transitioned to Industry 4.0 compatible smart production systems."
        }
      ]
    },
    sustainability: {
      title: "Sustainability",
      description: "We are aware of our responsibility to the environment and the future",
      initiatives: [
        {
          title: "Carbon Footprint Reduction",
          description: "We aim to reduce our carbon emissions by 50% by 2025",
          icon: "🌱"
        },
        {
          title: "Renewable Energy",
          description: "We are increasing solar energy usage in our facilities",
          icon: "☀️"
        },
        {
          title: "Waste Management",
          description: "We operate with a zero waste policy",
          icon: "♻️"
        }
      ]
    },
    certificates: {
      title: "Our Certificates",
      list: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "GMP", "HACCP"]
    },
    facilities: {
      title: "Our Facilities",
      items: [
        {
          title: "Production Facility",
          description: "State-of-the-art production lines",
          image: "/images/facility1.jpg"
        },
        {
          title: "R&D Center",
          description: "Research center for innovative solutions",
          image: "/images/facility2.jpg"
        },
        {
          title: "Logistics Center",
          description: "Worldwide distribution network",
          image: "/images/facility3.jpg"
        }
      ]
    }
  },
  de: {
    hero: {
      title: "25 Jahre Erfahrung, Unendliches Vertrauen",
      subtitle: "Eine vierteljahrhundertlange Reise in der chemischen Industrie"
    },
    stats: [
      { number: "25+", label: "Jahre Erfahrung" },
      { number: "1000+", label: "Produktarten" },
      { number: "50+", label: "Exportländer" },
      { number: "5000+", label: "Zufriedene Kunden" }
    ],
    mission: {
      title: "Unsere Mission",
      description: "Ein führender und bevorzugter Geschäftspartner in der chemischen Industrie zu werden, indem wir unseren Kunden innovative Lösungen mit Weltklasse-Qualität und Zuverlässigkeit bieten.",
      values: [
        "Kundenorientierung",
        "Nachhaltigkeit",
        "Innovation",
        "Qualität"
      ]
    },
    vision: {
      title: "Unsere Vision",
      description: "Eine führende Position in der globalen chemischen Industrie durch nachhaltiges Wachstum zu erreichen und ein Unternehmen zu werden, das den Sektor prägt."
    },
    history: {
      title: "Unsere Geschichte",
      timeline: [
        {
          year: "1998",
          title: "Gründung",
          description: "Wir begannen unsere Tätigkeit in Istanbul mit dem Handel von chemischen Rohstoffen."
        },
        {
          year: "2005",
          title: "Erster Export",
          description: "Wir traten in den internationalen Handel ein, indem wir in den Nahost-Markt expandierten."
        },
        {
          year: "2010",
          title: "Produktionsanlage",
          description: "Wir errichteten unsere erste Produktionsanlage in Gebze."
        },
        {
          year: "2015",
          title: "F&E-Zentrum",
          description: "Wir eröffneten unser F&E-Zentrum für innovative Produktentwicklung."
        },
        {
          year: "2020",
          title: "Digitale Transformation",
          description: "Wir sind auf Industrie 4.0-kompatible intelligente Produktionssysteme umgestiegen."
        }
      ]
    },
    sustainability: {
      title: "Nachhaltigkeit",
      description: "Wir sind uns unserer Verantwortung für die Umwelt und die Zukunft bewusst",
      initiatives: [
        {
          title: "CO2-Fußabdruck-Reduzierung",
          description: "Wir streben an, unsere CO2-Emissionen bis 2025 um 50% zu reduzieren",
          icon: "🌱"
        },
        {
          title: "Erneuerbare Energie",
          description: "Wir erhöhen die Nutzung von Solarenergie in unseren Anlagen",
          icon: "☀️"
        },
        {
          title: "Abfallmanagement",
          description: "Wir arbeiten mit einer Null-Abfall-Politik",
          icon: "♻️"
        }
      ]
    },
    certificates: {
      title: "Unsere Zertifikate",
      list: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "GMP", "HACCP"]
    },
    facilities: {
      title: "Unsere Anlagen",
      items: [
        {
          title: "Produktionsanlage",
          description: "Modern Produktionslinien",
          image: "/images/facility1.jpg"
        },
        {
          title: "F&E-Zentrum",
          description: "Forschungszentrum für innovative Lösungen",
          image: "/images/facility2.jpg"
        },
        {
          title: "Logistikzentrum",
          description: "Weltweite Verteilungsnetz",
          image: "/images/facility3.jpg"
        }
      ]
    }
  },
  ru: {
    hero: {
      title: "25 Лет Опыта, Бесконечное Доверие",
      subtitle: "Четверть века в химической промышленности"
    },
    stats: [
      { number: "25+", label: "Лет Опыта" },
      { number: "1000+", label: "Видов Продукции" },
      { number: "50+", label: "Стран Экспорта" },
      { number: "5000+", label: "Довольных Клиентов" }
    ],
    mission: {
      title: "Наша Миссия",
      description: "Стать ведущим и предпочтительным деловым партнером в химической промышленности, предоставляя инновационные решения нашим клиентам с качеством и надежностью мирового класса.",
      values: [
        "Ориентация на клиента",
        "Устойчивое развитие",
        "Инновации",
        "Качество"
      ]
    },
    vision: {
      title: "Наше Видение",
      description: "Достичь лидирующей позиции в глобальной химической промышленности через устойчивое развитие и стать компанией, формирующей сектор."
    },
    history: {
      title: "Наша История",
      timeline: [
        {
          year: "1998",
          title: "Основание",
          description: "Мы начали свою деятельность в Стамбуле с торговли химическим сырьем."
        },
        {
          year: "2005",
          title: "Первый Экспорт",
          description: "Мы вышли на международную торговлю, расширившись на рынок Ближнего Востока."
        },
        {
          year: "2010",
          title: "Производственный Объект",
          description: "Мы создали наш первый производственный объект в Гебзе."
        },
        {
          year: "2015",
          title: "Центр НИОКР",
          description: "Мы открыли наш центр НИОКР для инновационной разработки продуктов."
        },
        {
          year: "2020",
          title: "Цифровая Трансформация",
          description: "Мы перешли на интеллектуальные производственные системы, совместимые с Индустрией 4.0."
        }
      ]
    },
    sustainability: {
      title: "Устойчивое Развитие",
      description: "Мы осознаем нашу ответственность перед окружающей средой и будущим",
      initiatives: [
        {
          title: "Снижение Углеродного Следа",
          description: "Мы стремимся сократить наши выбросы углерода на 50% к 2025 году",
          icon: "🌱"
        },
        {
          title: "Возобновляемая Энергия",
          description: "Мы увеличиваем использование солнечной энергии на наших объектах",
          icon: "☀️"
        },
        {
          title: "Управление Отходами",
          description: "Мы работаем по политике нулевых отходов",
          icon: "♻️"
        }
      ]
    },
    certificates: {
      title: "Наши Сертификаты",
      list: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "GMP", "HACCP"]
    },
    facilities: {
      title: "Наши Объекты",
      items: [
        {
          title: "Производственный Объект",
          description: "Современные производственные линии",
          image: "/images/facility1.jpg"
        },
        {
          title: "Центр НИОКР",
          description: "Центр для инновационных решений",
          image: "/images/facility2.jpg"
        },
        {
          title: "Логистический Центр",
          description: "Мировая сеть доставки",
          image: "/images/facility3.jpg"
        }
      ]
    }
  },
  ar: {
    hero: {
      title: "25 عامًا من الخبرة، ثقة لا نهائية",
      subtitle: "رحلة ربع قرن في صناعة الكيماويات"
    },
    stats: [
      { number: "25+", label: "سنوات من الخبرة" },
      { number: "1000+", label: "نوع من المنتجات" },
      { number: "50+", label: "دولة تصدير" },
      { number: "5000+", label: "عميل سعيد" }
    ],
    mission: {
      title: "مهمتنا",
      description: "أن نصبح شريكًا تجاريًا رائدًا ومفضلاً في صناعة الكيماويات من خلال تقديم حلول مبتكرة لعملائنا بجودة وموثوقية عالمية.",
      values: [
        "التركيز على العملاء",
        "الاستدامة",
        "الابتكار",
        "الجودة"
      ]
    },
    vision: {
      title: "رؤيتنا",
      description: "تحقيق مكانة رائدة في صناعة الكيماويات العالمية من خلال النمو المستدام وأن نصبح شركة تشكل القطاع."
    },
    history: {
      title: "تاريخنا",
      timeline: [
        {
          year: "1998",
          title: "التأسيس",
          description: "بدأنا عملياتنا في إسطنبول بتجارة المواد الخام الكيميائية."
        },
        {
          year: "2005",
          title: "أول تصدير",
          description: "دخلنا التجارة الدولية من خلال التوسع في سوق الشرق الأوسط."
        },
        {
          year: "2010",
          title: "منشأة الإنتاج",
          description: "أنشأنا أول منشأة إنتاج لنا في جبزة."
        },
        {
          year: "2015",
          title: "مركز البحث والتطوير",
          description: "افتتحنا مركز البحث والتطوير لتطوير المنتجات المبتكرة."
        },
        {
          year: "2020",
          title: "التحول الرقمي",
          description: "انتقلنا إلى أنظمة الإنتاج الذكية المتوافقة مع الصناعة 4.0."
        }
      ]
    },
    sustainability: {
      title: "الاستدامة",
      description: "نحن ندرك مسؤوليتنا تجاه البيئة والمستقبل",
      initiatives: [
        {
          title: "تقليل البصمة الكربونية",
          description: "نهدف إلى تقليل انبعاثاتنا الكربونية بنسبة 50٪ بحلول عام 2025",
          icon: "🌱"
        },
        {
          title: "الطاقة المتجددة",
          description: "نزيد من استخدام الطاقة الشمسية في منشآتنا",
          icon: "☀️"
        },
        {
          title: "إدارة النفايات",
          description: "نعمل بسياسة النفايات الصفرية",
          icon: "♻️"
        }
      ]
    },
    certificates: {
      title: "شهاداتنا",
      list: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "GMP", "HACCP"]
    },
    facilities: {
      title: "مرافقنا",
      items: [
        {
          title: "منشأة الإنتاج",
          description: "خطوط إنتاج حديثة",
          image: "/images/facility1.jpg"
        },
        {
          title: "مركز البحث والتطوير",
          description: "مركز للابتكار",
          image: "/images/facility2.jpg"
        },
        {
          title: "مركز اللوجستيات",
          description: "شبكة توزيع عالمية",
          image: "/images/facility3.jpg"
        }
      ]
    }
  }
} as const;

export default function AboutPage() {
  const pathname = usePathname();
  const langFromPath = pathname.split('/')[1] || 'tr';
  
  // Debug logging
  console.log('Current path:', pathname);
  console.log('Language from path:', langFromPath);
  console.log('Available translations:', Object.keys(translations));
  
  // Ensure language is valid and use type assertion
  const currentLang = (langFromPath in translations) ? langFromPath : 'tr';
  const t = translations[currentLang as keyof typeof translations];
  
  console.log('Selected language:', currentLang);
  console.log('Translation object:', t);
  
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Early return if translations are not loaded
  if (!t || !t.hero) {
    console.error('Translation data is missing:', { currentLang, translations: !!translations });
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading translations...</p>
      </div>
    );
  }

  return (
    <main className="pt-20" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Chemistry Laboratory"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 mix-blend-multiply" />
        
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="h-full flex flex-col justify-center">
            {t.hero && (
              <>
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
              </>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {t.stats && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {t.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4 text-primary">{t.mission.title}</h2>
              <p className="text-gray-600 mb-6">{t.mission.description}</p>
              <ul className="space-y-2">
                {t.mission.values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    {value}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4 text-primary">{t.vision.title}</h2>
              <p className="text-gray-600">{t.vision.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.history.title}</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            {t.history.timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="text-2xl font-bold text-primary mb-2">{event.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t.sustainability.title}</h2>
          <p className="text-gray-600 text-center mb-12">{t.sustainability.description}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.sustainability.initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{initiative.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.facilities.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.facilities.items.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                  <p className="text-gray-600 mb-2">{facility.location}</p>
                  <p className="text-gray-600">{facility.size}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t.certificates.title}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {t.certificates.list.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white px-6 py-3 rounded-full shadow-md"
              >
                {certificate}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
