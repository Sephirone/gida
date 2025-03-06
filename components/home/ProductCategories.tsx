'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const translations = {
  tr: {
    title: "Ürün Kategorilerimiz",
    subtitle: "Yüksek kaliteli ve güvenilir ürün çeşitlerimiz",
    learnMore: "Detaylı Bilgi",
    categories: [
      {
        title: "Gıda Hammaddeleri",
        description: "Yüksek kaliteli gıda katkı maddeleri ve hammaddeler",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["Katkı Maddeleri", "Koruyucular", "Tatlandırıcılar", "Renklendiriciler"]
      },
      {
        title: "İlaç Hammaddeleri",
        description: "Farmasötik grade hammaddeler ve aktif bileşenler",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["API'ler", "Yardımcı Maddeler", "Vitaminler", "Mineraller"]
      },
      {
        title: "Kimyasal Ürünler",
        description: "Endüstriyel kimyasallar ve özel kimyasallar",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["Solventler", "Asitler", "Bazlar", "Katalizörler"]
      }
    ]
  },
  en: {
    title: "Our Product Categories",
    subtitle: "High quality and reliable product varieties",
    learnMore: "Learn More",
    categories: [
      {
        title: "Food Raw Materials",
        description: "High quality food additives and raw materials",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["Additives", "Preservatives", "Sweeteners", "Colorants"]
      },
      {
        title: "Pharmaceutical Raw Materials",
        description: "Pharmaceutical grade raw materials and active ingredients",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["APIs", "Excipients", "Vitamins", "Minerals"]
      },
      {
        title: "Chemical Products",
        description: "Industrial chemicals and specialty chemicals",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["Solvents", "Acids", "Bases", "Catalysts"]
      }
    ]
  },
  de: {
    title: "Unsere Produktkategorien",
    subtitle: "Hochwertige und zuverlässige Produktvarianten",
    learnMore: "Mehr Erfahren",
    categories: [
      {
        title: "Lebensmittelrohstoffe",
        description: "Hochwertige Lebensmittelzusätze und Rohstoffe",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["Zusatzstoffe", "Konservierungsmittel", "Süßungsmittel", "Farbstoffe"]
      },
      {
        title: "Pharmazeutische Rohstoffe",
        description: "Pharmazeutische Rohstoffe und Wirkstoffe",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["Wirkstoffe", "Hilfsstoffe", "Vitamine", "Mineralstoffe"]
      },
      {
        title: "Chemische Produkte",
        description: "Industriechemikalien und Spezialchemikalien",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["Lösungsmittel", "Säuren", "Basen", "Katalysatoren"]
      }
    ]
  },
  ru: {
    title: "Наши Категории Продукции",
    subtitle: "Высококачественные и надежные разновидности продукции",
    learnMore: "Подробнее",
    categories: [
      {
        title: "Пищевое Сырье",
        description: "Высококачественные пищевые добавки и сырье",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["Добавки", "Консерванты", "Подсластители", "Красители"]
      },
      {
        title: "Фармацевтическое Сырье",
        description: "Фармацевтическое сырье и активные ингредиенты",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["АФИ", "Вспомогательные Вещества", "Витамины", "Минералы"]
      },
      {
        title: "Химическая Продукция",
        description: "Промышленные и специальные химикаты",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["Растворители", "Кислоты", "Основания", "Катализаторы"]
      }
    ]
  },
  ar: {
    title: "فئات منتجاتنا",
    subtitle: "تشكيلة منتجات عالية الجودة وموثوقة",
    learnMore: "اكتشف المزيد",
    categories: [
      {
        title: "المواد الخام الغذائية",
        description: "مواد مضافة ومواد خام غذائية عالية الجودة",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["المواد المضافة", "المواد الحافظة", "المحليات", "الملونات"]
      },
      {
        title: "المواد الخام الصيدلانية",
        description: "مواد خام صيدلانية ومكونات نشطة",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["المواد الفعالة", "السواغات", "الفيتامينات", "المعادن"]
      },
      {
        title: "المنتجات الكيميائية",
        description: "كيماويات صناعية وكيماويات متخصصة",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        features: ["المذيبات", "الأحماض", "القواعد", "المحفزات"]
      }
    ]
  }
};

export default function ProductCategories() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'tr';
  const t = translations[currentLang as keyof typeof translations] || translations.tr;
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {t.categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full btn-primary">
                  {t.learnMore}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
