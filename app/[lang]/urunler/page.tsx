'use client';

import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';

const translations = {
  tr: {
    hero: {
      title: "Ürün Kategorilerimiz",
      subtitle: "Yüksek kaliteli ve güvenilir ürün portföyümüz"
    },
    filters: {
      title: "Filtrele",
      categories: "Kategoriler",
      industries: "Endüstriler",
      certifications: "Sertifikalar",
      search: "Ürün Ara...",
      all: "Tümü"
    },
    categories: [
      {
        id: "food",
        name: "Gıda Katkı Maddeleri",
        description: "Gıda endüstrisi için yüksek kaliteli katkı maddeleri",
        image: "/images/products/food-additives.jpg",
        products: [
          {
            id: "f1",
            name: "Sitrik Asit",
            code: "CA-100",
            description: "Gıda asitliği düzenleyici ve koruyucu",
            specifications: {
              appearance: "Beyaz kristal toz",
              purity: "≥99.5%",
              moisture: "≤0.5%",
              ph: "1.8 (1% solution)",
              heavyMetals: "≤10ppm"
            },
            applications: [
              "İçecek Endüstrisi",
              "Şekerleme",
              "Konserve Gıdalar"
            ],
            certifications: ["ISO 9001", "FSSC 22000", "Helal", "Kosher"],
            packaging: ["25 kg kraft torba", "1000 kg big bag"],
            storage: "Serin ve kuru yerde saklayınız"
          },
          {
            id: "f2",
            name: "Sodyum Bikarbonat",
            code: "SB-200",
            description: "Gıda kabartma ajanı",
            specifications: {
              appearance: "Beyaz kristal toz",
              purity: "≥99.0%",
              moisture: "≤0.2%",
              ph: "8.2 (1% solution)",
              heavyMetals: "≤5ppm"
            },
            applications: [
              "Fırıncılık Ürünleri",
              "İçecekler",
              "Şekerleme"
            ],
            certifications: ["ISO 9001", "FSSC 22000", "Helal"],
            packaging: ["25 kg PP torba", "500 kg big bag"],
            storage: "Kuru yerde saklayınız"
          }
        ]
      },
      {
        id: "pharma",
        name: "Farmasötik Hammaddeler",
        description: "İlaç endüstrisi için API ve yardımcı maddeler",
        image: "/images/products/pharma-raw.jpg",
        products: [
          {
            id: "p1",
            name: "Magnezyum Stearat",
            code: "MS-300",
            description: "Tablet ve kapsül kaydırıcı",
            specifications: {
              appearance: "Beyaz ince toz",
              purity: "≥98.0%",
              moisture: "≤3.0%",
              heavyMetals: "≤20ppm",
              particleSize: "≥98% < 75μm"
            },
            applications: [
              "Tablet Formülasyonları",
              "Kapsül Formülasyonları"
            ],
            certifications: ["GMP", "USP", "EP"],
            packaging: ["20 kg fiber drum"],
            storage: "25°C altında saklayınız"
          }
        ]
      },
      {
        id: "chemical",
        name: "Endüstriyel Kimyasallar",
        description: "Çeşitli endüstriler için temel ve özel kimyasallar",
        image: "/images/products/industrial-chemicals.jpg",
        products: [
          {
            id: "c1",
            name: "Sodyum Hidroksit",
            code: "SH-400",
            description: "Kostik soda",
            specifications: {
              appearance: "Beyaz pul",
              concentration: "≥99.0%",
              carbonates: "≤0.4%",
              chlorides: "≤0.01%"
            },
            applications: [
              "Deterjan Üretimi",
              "Kağıt Endüstrisi",
              "Su Arıtma"
            ],
            certifications: ["ISO 9001", "ISO 14001"],
            packaging: ["25 kg PE torba", "1000 kg big bag"],
            safety: "Korozif madde, özel depolama gerektirir"
          }
        ]
      }
    ],
    industries: [
      "Gıda ve İçecek",
      "İlaç",
      "Kozmetik",
      "Deterjan",
      "Tekstil",
      "Kağıt",
      "Su Arıtma"
    ],
    certifications: [
      "ISO 9001",
      "ISO 14001",
      "FSSC 22000",
      "GMP",
      "Helal",
      "Kosher"
    ]
  },
  en: {
    hero: {
      title: "Our Product Categories",
      subtitle: "High-quality and reliable product portfolio"
    },
    filters: {
      title: "Filter",
      categories: "Categories",
      industries: "Industries",
      certifications: "Certifications",
      search: "Search Products...",
      all: "All"
    },
    categories: [
      {
        id: "food",
        name: "Food Additives",
        description: "High-quality additives for the food industry",
        image: "/images/products/food-additives.jpg",
        products: [
          {
            id: "f1",
            name: "Citric Acid",
            code: "CA-100",
            description: "Food acidity regulator and preservative",
            specifications: {
              appearance: "White crystalline powder",
              purity: "≥99.5%",
              moisture: "≤0.5%",
              ph: "1.8 (1% solution)",
              heavyMetals: "≤10ppm"
            },
            applications: [
              "Beverage Industry",
              "Confectionery",
              "Canned Foods"
            ],
            certifications: ["ISO 9001", "FSSC 22000", "Halal", "Kosher"],
            packaging: ["25 kg kraft bag", "1000 kg big bag"],
            storage: "Store in a cool and dry place"
          },
          {
            id: "f2",
            name: "Sodium Bicarbonate",
            code: "SB-200",
            description: "Food leavening agent",
            specifications: {
              appearance: "White crystalline powder",
              purity: "≥99.0%",
              moisture: "≤0.2%",
              ph: "8.2 (1% solution)",
              heavyMetals: "≤5ppm"
            },
            applications: [
              "Bakery Products",
              "Beverages",
              "Confectionery"
            ],
            certifications: ["ISO 9001", "FSSC 22000", "Halal"],
            packaging: ["25 kg PP bag", "500 kg big bag"],
            storage: "Store in a dry place"
          }
        ]
      },
      {
        id: "pharma",
        name: "Pharmaceutical Raw Materials",
        description: "APIs and excipients for the pharmaceutical industry",
        image: "/images/products/pharma-raw.jpg",
        products: [
          {
            id: "p1",
            name: "Magnesium Stearate",
            code: "MS-300",
            description: "Tablet and capsule lubricant",
            specifications: {
              appearance: "White fine powder",
              purity: "≥98.0%",
              moisture: "≤3.0%",
              heavyMetals: "≤20ppm",
              particleSize: "≥98% < 75μm"
            },
            applications: [
              "Tablet Formulations",
              "Capsule Formulations"
            ],
            certifications: ["GMP", "USP", "EP"],
            packaging: ["20 kg fiber drum"],
            storage: "Store below 25°C"
          }
        ]
      },
      {
        id: "chemical",
        name: "Industrial Chemicals",
        description: "Basic and specialty chemicals for various industries",
        image: "/images/products/industrial-chemicals.jpg",
        products: [
          {
            id: "c1",
            name: "Sodium Hydroxide",
            code: "SH-400",
            description: "Caustic soda",
            specifications: {
              appearance: "White flakes",
              concentration: "≥99.0%",
              carbonates: "≤0.4%",
              chlorides: "≤0.01%"
            },
            applications: [
              "Detergent Production",
              "Paper Industry",
              "Water Treatment"
            ],
            certifications: ["ISO 9001", "ISO 14001"],
            packaging: ["25 kg PE bag", "1000 kg big bag"],
            safety: "Corrosive material, requires special storage"
          }
        ]
      }
    ],
    industries: [
      "Food & Beverage",
      "Pharmaceutical",
      "Cosmetics",
      "Detergent",
      "Textile",
      "Paper",
      "Water Treatment"
    ],
    certifications: [
      "ISO 9001",
      "ISO 14001",
      "FSSC 22000",
      "GMP",
      "Halal",
      "Kosher"
    ]
  },
  de: {
    hero: {
      title: "Unsere Produktkategorien",
      subtitle: "Hochwertiges und zuverlässiges Produktportfolio"
    },
    filters: {
      title: "Filter",
      categories: "Kategorien",
      industries: "Industrien",
      certifications: "Zertifizierungen",
      search: "Produkte suchen...",
      all: "Alle"
    },
    categories: [
      {
        id: "food",
        name: "Ernährungszusatzstoffe",
        description: "Hohe Qualitätsernährungszusatzstoffe für die Lebensmittelindustrie",
        image: "/images/products/food-additives.jpg",
        products: [
          {
            id: "f1",
            name: "Zitronensäure",
            code: "CA-100",
            description: "Ernährungsakidität regulierend und beibehaltend",
            specifications: {
              appearance: "Weißer Kristallpulver",
              purity: "≥99.5%",
              moisture: "≤0.5%",
              ph: "1.8 (1% Lösung)",
              heavyMetals: "≤10ppm"
            },
            applications: [
              "Getränkeindustrie",
              "Zuckerindustrie",
              "Konserven"
            ],
            certifications: ["ISO 9001", "FSSC 22000", "Halal", "Koscher"],
            packaging: ["25 kg Kraftsack", "1000 kg Big Bag"],
            storage: "In einem kühlten und trockenen Ort lagern"
          },
          {
            id: "f2",
            name: "Sodiumbicarbonat",
            code: "SB-200",
            description: "Ernährungsweiznachrichtig",
            specifications: {
              appearance: "Weißer Kristallpulver",
              purity: "≥99.0%",
              moisture: "≤0.2%",
              ph: "8.2 (1% Lösung)",
              heavyMetals: "≤5ppm"
            },
            applications: [
              "Bäckerei",
              "Getränke",
              "Zuckerindustrie"
            ],
            certifications: ["ISO 9001", "FSSC 22000", "Halal"],
            packaging: ["25 kg PP Sack", "500 kg Big Bag"],
            storage: "In einem trockenen Ort lagern"
          }
        ]
      },
      {
        id: "pharma",
        name: "Pharmazeutische Rohstoffe",
        description: "APIs und Hilfsstoffe für die pharmazeutische Industrie",
        image: "/images/products/pharma-raw.jpg",
        products: [
          {
            id: "p1",
            name: "Magnesiumstearat",
            code: "MS-300",
            description: "Tabletten- und Kapsel-lubrifizierend",
            specifications: {
              appearance: "Weißer feiner Pulver",
              purity: "≥98.0%",
              moisture: "≤3.0%",
              heavyMetals: "≤20ppm",
              particleSize: "≥98% < 75μm"
            },
            applications: [
              "Tablettenformulierungen",
              "Kapselformulierungen"
            ],
            certifications: ["GMP", "USP", "EP"],
            packaging: ["20 kg Faserdrum"],
            storage: "Unter 25°C lagern"
          }
        ]
      },
      {
        id: "chemical",
        name: "Industrielle Chemikalien",
        description: "Grund- und Spezialchemikalien für verschiedene Industrien",
        image: "/images/products/industrial-chemicals.jpg",
        products: [
          {
            id: "c1",
            name: "Sodiumhydroxid",
            code: "SH-400",
            description: "Kalka",
            specifications: {
              appearance: "Weißer Pulver",
              concentration: "≥99.0%",
              carbonates: "≤0.4%",
              chlorides: "≤0.01%"
            },
            applications: [
              "Spülung",
              "Papierindustrie",
              "Wasserreinigung"
            ],
            certifications: ["ISO 9001", "ISO 14001"],
            packaging: ["25 kg PE Sack", "1000 kg Big Bag"],
            safety: "Korrosive Substanz, spezielle Lagereinrichtung erforderlich"
          }
        ]
      }
    ],
    industries: [
      "Lebensmittel und Getränke",
      "Pharmazeutische",
      "Kosmetik",
      "Spülung",
      "Textil",
      "Papier",
      "Wasserreinigung"
    ],
    certifications: [
      "ISO 9001",
      "ISO 14001",
      "FSSC 22000",
      "GMP",
      "Halal",
      "Koscher"
    ]
  },
  ru: {
    hero: {
      title: "Наши категории продуктов",
      subtitle: "Высококачественный и надежный портфель продуктов"
    },
    filters: {
      title: "Фильтр",
      categories: "Категории",
      industries: "Отрасли",
      certifications: "Сертификации",
      search: "Поиск продуктов...",
      all: "Все"
    },
    categories: [
      {
        id: "food",
        name: "Еда",
        description: "Высококачественные добавки для пищевой промышленности",
        image: "/images/products/food-additives.jpg",
        products: [
          {
            id: "f1",
            name: "Цитрусовая кислота",
            code: "CA-100",
            description: "Регулятор пищевой кислотности и консервант",
            specifications: {
              appearance: "Белый кристаллический порошок",
              purity: "≥99.5%",
              moisture: "≤0.5%",
              ph: "1.8 (1% раствор)",
              heavyMetals: "≤10ppm"
            },
            applications: [
              "Пищевая промышленность",
              "Кондитерская",
              "Консервация"
            ],
            certifications: ["ISO 9001", "FSSC 22000", "Halal", "Kosher"],
            packaging: ["25 кг коробка Kraft", "1000 кг Big Bag"],
            storage: "Храните в прохладном и сухом месте"
          },
          {
            id: "f2",
            name: "Сода натрия",
            code: "SB-200",
            description: "Добавка для выпечки",
            specifications: {
              appearance: "Белый кристаллический порошок",
              purity: "≥99.0%",
              moisture: "≤0.2%",
              ph: "8.2 (1% раствор)",
              heavyMetals: "≤5ppm"
            },
            applications: [
              "Пекарня",
              "Напитки",
              "Кондитерская"
            ],
            certifications: ["ISO 9001", "FSSC 22000", "Halal"],
            packaging: ["25 кг PP пакет", "500 кг Big Bag"],
            storage: "Храните в сухом месте"
          }
        ]
      },
      {
        id: "pharma",
        name: "Фармацевтические сырье",
        description: "APIs и вспомогательные вещества для фармацевтической промышленности",
        image: "/images/products/pharma-raw.jpg",
        products: [
          {
            id: "p1",
            name: "Магниястый стеарат",
            code: "MS-300",
            description: "Любитель для таблеток и капсул",
            specifications: {
              appearance: "Белый мелкий порошок",
              purity: "≥98.0%",
              moisture: "≤3.0%",
              heavyMetals: "≤20ppm",
              particleSize: "≥98% < 75μm"
            },
            applications: [
              "Таблетные формулы",
              "Капсульные формулы"
            ],
            certifications: ["GMP", "USP", "EP"],
            packaging: ["20 кг фибронакопитель"],
            storage: "Храните при температуре ниже 25°C"
          }
        ]
      },
      {
        id: "chemical",
        name: "Промышленные химикаты",
        description: "Основные и специальные химикаты для различных отраслей",
        image: "/images/products/industrial-chemicals.jpg",
        products: [
          {
            id: "c1",
            name: "Натрий гидроксид",
            code: "SH-400",
            description: "Кальций гидроксид",
            specifications: {
              appearance: "Белые хлопья",
              concentration: "≥99.0%",
              carbonates: "≤0.4%",
              chlorides: "≤0.01%"
            },
            applications: [
              "Производство мыла",
              "Пищевая промышленность",
              "Обработка воды"
            ],
            certifications: ["ISO 9001", "ISO 14001"],
            packaging: ["25 кг PE пакет", "1000 кг Big Bag"],
            safety: "Коррозионная среда, требует специального хранения"
          }
        ]
      }
    ],
    industries: [
      "Еда и напитки",
      "Фармацевтика",
      "Косметика",
      "Мыло",
      "Текстиль",
      "Бумага",
      "Обработка воды"
    ],
    certifications: [
      "ISO 9001",
      "ISO 14001",
      "FSSC 22000",
      "GMP",
      "Halal",
      "Kosher"
    ]
  },
  ar: {
    hero: {
      title: "فئات منتجاتنا",
      subtitle: "محفظة منتجات عالية الجودة وموثوقة"
    },
    filters: {
      title: "الفلتر",
      categories: "التصنيفات",
      industries: "الصناعات",
      certifications: "الشهادات",
      search: "ابحث عن المنتجات...",
      all: "الجميع"
    },
    categories: [
      {
        id: "food",
        name: "إضادات غذائية",
        description: "إضادات غذائية عالية الجودة للصناعة الغذائية",
        image: "/images/products/food-additives.jpg",
        products: [
          {
            id: "f1",
            name: "حمض الليمون",
            code: "CA-100",
            description: "معدل حموضة الغذاء ومحافظ",
            specifications: {
              appearance: "بودرة بيضاء",
              purity: "≥99.5%",
              moisture: "≤0.5%",
              ph: "1.8 (1% раствор)",
              heavyMetals: "≤10ppm"
            },
            applications: [
              "صناعة المشروبات",
              "العسل",
              "الغذاء المعلب"
            ],
            certifications: ["ISO 9001", "FSSC 22000", "Halal", "Kosher"],
            packaging: ["25 كجم كيس Kraft", "1000 كجم Big Bag"],
            storage: "خزن في مكان прохлад و khô"
          },
          {
            id: "f2",
            name: "سيوديوم بيكربونات",
            code: "SB-200",
            description: "عامل خفيف للغذاء",
            specifications: {
              appearance: "بودرة بيضاء",
              purity: "≥99.0%",
              moisture: "≤0.2%",
              ph: "8.2 (1% раствор)",
              heavyMetals: "≤5ppm"
            },
            applications: [
              "منتجات الخبز",
              "المشروبات",
              "العسل"
            ],
            certifications: ["ISO 9001", "FSSC 22000", "Halal"],
            packaging: ["25 كجم PP كيس", "500 كجم Big Bag"],
            storage: "خزن في مكان khô"
          }
        ]
      },
      {
        id: "pharma",
        name: "مواد الأدوية الخام",
        description: "APIs و مكونات المساعدات للأدوية",
        image: "/images/products/pharma-raw.jpg",
        products: [
          {
            id: "p1",
            name: "ستيرات ماغنيسيوم",
            code: "MS-300",
            description: "مطحنة للعطور",
            specifications: {
              appearance: "بودرة بيضاء",
              purity: "≥98.0%",
              moisture: "≤3.0%",
              heavyMetals: "≤20ppm",
              particleSize: "≥98% < 75μm"
            },
            applications: [
              "تشكيلات الأدوية",
              "تشكيلات العطور"
            ],
            certifications: ["GMP", "USP", "EP"],
            packaging: ["20 كجم د럼 من الألياف"],
            storage: "خزن تحت درجة حرارة 25°C"
          }
        ]
      },
      {
        id: "chemical",
        name: "المواد الكيميائية الصناعية",
        description: "المواد الكيميائية الأساسية والخاصة لصناعات متعددة",
        image: "/images/products/industrial-chemicals.jpg",
        products: [
          {
            id: "c1",
            name: "هيدروكسيد الصوديوم",
            code: "SH-400",
            description: "هيدروكسيد الكالسيوم",
            specifications: {
              appearance: "بودرة بيضاء",
              concentration: "≥99.0%",
              carbonates: "≤0.4%",
              chlorides: "≤0.01%"
            },
            applications: [
              "صناعة الصابون",
              "صناعة الورق",
              "معالجة المياه"
            ],
            certifications: ["ISO 9001", "ISO 14001"],
            packaging: ["25 كجم حقيبة PE", "1000 كجم Big Bag"],
            safety: "مواد كيميائية حادة، تحتاج إلى تخزين خاص"
          }
        ]
      }
    ],
    industries: [
      "الغذاء والمشروبات",
      "الأدوية",
      "الكريمات",
      "الصابون",
      "النصيل",
      "الورق",
      "معالجة المياه"
    ],
    certifications: [
      "ISO 9001",
      "ISO 14001",
      "FSSC 22000",
      "GMP",
      "Halal",
      "Kosher"
    ]
  }
};

export default function ProductsPage() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'tr';
  const t = translations[currentLang as keyof typeof translations];
  
  const containerRef = useRef(null);
  const { scrollYProgress: _scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedCertification, setSelectedCertification] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = t.categories.filter(category => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) return false;
    
    const products = category.products.filter(product => {
      if (selectedIndustry !== 'all' && !product.applications.some(app => 
        app.toLowerCase().includes(selectedIndustry.toLowerCase()))) return false;
      
      if (selectedCertification !== 'all' && !product.certifications.some(cert => 
        cert.toLowerCase().includes(selectedCertification.toLowerCase()))) return false;
      
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      
      return true;
    });

    return products.length > 0;
  });

  return (
    <main className="pt-20" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Products"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 mix-blend-multiply" />
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="h-full flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              {t.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">{t.filters.search}</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder={t.filters.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">{t.filters.categories}</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">{t.filters.all}</option>
                {t.categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">{t.filters.industries}</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                <option value="all">{t.filters.all}</option>
                {t.industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">{t.filters.certifications}</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={selectedCertification}
                onChange={(e) => setSelectedCertification(e.target.value)}
              >
                <option value="all">{t.filters.all}</option>
                {t.certifications.map(cert => (
                  <option key={cert} value={cert}>{cert}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map(category => (
              <div key={category.id} className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    {category.products.map(product => (
                      <div key={product.id} className="border-t border-gray-200 pt-4 mt-4">
                        <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                        <p className="text-gray-500 text-sm mb-2">Code: {product.code}</p>
                        <p className="text-gray-600 mb-3">{product.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-gray-700 mb-1">Specifications</h5>
                            <ul className="text-sm text-gray-600">
                              {Object.entries(product.specifications).map(([key, value]) => (
                                <li key={key} className="flex justify-between">
                                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                  <span>{value}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-gray-700 mb-1">Applications</h5>
                            <ul className="text-sm text-gray-600">
                              {product.applications.map(app => (
                                <li key={app}>{app}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-gray-700 mb-1">Certifications</h5>
                            <div className="flex flex-wrap gap-2">
                              {product.certifications.map(cert => (
                                <span
                                  key={cert}
                                  className="px-2 py-1 text-xs bg-primary-50 text-primary rounded"
                                >
                                  {cert}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-gray-700 mb-1">Packaging</h5>
                            <ul className="text-sm text-gray-600">
                              {product.packaging.map(pack => (
                                <li key={pack}>{pack}</li>
                              ))}
                            </ul>
                          </div>
                          
                          {product.storage && (
                            <div>
                              <h5 className="font-medium text-gray-700 mb-1">Storage</h5>
                              <p className="text-sm text-gray-600">{product.storage}</p>
                            </div>
                          )}
                          
                          {product.safety && (
                            <div>
                              <h5 className="font-medium text-gray-700 mb-1">Safety</h5>
                              <p className="text-sm text-gray-600">{product.safety}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
