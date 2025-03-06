import { usePathname } from 'next/navigation';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const translations = {
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
      description: "Global kimya sektöründe lider konuma ulaşarak, dünya çapında tercih edilen bir marka olmak ve sürdürülebilir bir gelecek için değer yaratmak."
    },
    history: {
      title: "Tarihçemiz",
      timeline: [
        {
          year: "1998",
          title: "Kuruluş",
          description: "İstanbul'da ticari faaliyetlerimize başladık"
        },
        {
          year: "2005",
          title: "İlk İhracat",
          description: "Uluslararası pazarlara açılış"
        },
        {
          year: "2010",
          title: "AR-GE Merkezi",
          description: "Modern laboratuvarımızın kurulması"
        },
        {
          year: "2015",
          title: "Dijital Dönüşüm",
          description: "Endüstri 4.0 uyumlu üretim sistemleri"
        },
        {
          year: "2023",
          title: "Sürdürülebilirlik",
          description: "Yeşil kimya projelerinin başlatılması"
        }
      ]
    },
    values: {
      title: "Değerlerimiz",
      list: [
        {
          title: "İnovasyon",
          description: "Sürekli gelişim ve yenilikçi çözümler",
          icon: "💡"
        },
        {
          title: "Sürdürülebilirlik",
          description: "Çevre dostu ve sürdürülebilir iş modelleri",
          icon: "🌱"
        },
        {
          title: "Kalite",
          description: "En yüksek kalite standartlarında üretim",
          icon: "⭐"
        },
        {
          title: "Müşteri Odaklılık",
          description: "Müşteri memnuniyeti odaklı hizmet anlayışı",
          icon: "🤝"
        }
      ]
    },
    achievements: {
      title: "Başarılarımız",
      list: [
        {
          year: "2023",
          title: "Yılın İhracatçısı Ödülü",
          description: "İKMİB tarafından verilen prestijli ödül"
        },
        {
          year: "2022",
          title: "AR-GE Merkezi Sertifikası",
          description: "T.C. Sanayi ve Teknoloji Bakanlığı onaylı"
        },
        {
          year: "2021",
          title: "ISO 14001:2015 Sertifikası",
          description: "Çevre Yönetim Sistemi sertifikası"
        }
      ]
    },
    facilities: {
      title: "Tesislerimiz",
      description: "Modern üretim ve depolama tesislerimiz",
      items: [
        {
          title: "Üretim Tesisi",
          location: "İstanbul",
          size: "15.000 m²",
          image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "AR-GE Merkezi",
          location: "İstanbul",
          size: "2.000 m²",
          image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Lojistik Merkezi",
          location: "Kocaeli",
          size: "10.000 m²",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    certificates: {
      title: "Sertifikalarımız",
      list: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "GMP", "HACCP"]
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
      description: "To be a leading and preferred business partner in the chemical industry by providing innovative solutions to our customers with world-class quality and reliability principles.",
      values: [
        "Customer Focus",
        "Sustainability",
        "Innovation",
        "Quality"
      ]
    },
    vision: {
      title: "Our Vision",
      description: "To become a globally preferred brand by reaching a leading position in the global chemical industry and creating value for a sustainable future."
    },
    history: {
      title: "Our History",
      timeline: [
        {
          year: "1998",
          title: "Foundation",
          description: "Started our commercial activities in Istanbul"
        },
        {
          year: "2005",
          title: "First Export",
          description: "Expansion to international markets"
        },
        {
          year: "2010",
          title: "R&D Center",
          description: "Establishment of our modern laboratory"
        },
        {
          year: "2015",
          title: "Digital Transformation",
          description: "Industry 4.0 compatible production systems"
        },
        {
          year: "2023",
          title: "Sustainability",
          description: "Launch of green chemistry projects"
        }
      ]
    },
    values: {
      title: "Our Core Values",
      list: [
        {
          title: "Innovation",
          description: "Continuous development and innovative solutions",
          icon: "💡"
        },
        {
          title: "Sustainability",
          description: "Eco-friendly and sustainable business models",
          icon: "🌱"
        },
        {
          title: "Quality",
          description: "Production at the highest quality standards",
          icon: "⭐"
        },
        {
          title: "Customer Focus",
          description: "Customer satisfaction oriented service approach",
          icon: "🤝"
        }
      ]
    },
    achievements: {
      title: "Our Achievements",
      list: [
        {
          year: "2023",
          title: "Exporter of the Year Award",
          description: "Prestigious award by IKMIB"
        },
        {
          year: "2022",
          title: "R&D Center Certificate",
          description: "Approved by Ministry of Industry and Technology"
        },
        {
          year: "2021",
          title: "ISO 14001:2015 Certificate",
          description: "Environmental Management System certificate"
        }
      ]
    },
    facilities: {
      title: "Our Facilities",
      description: "Modern production and storage facilities",
      items: [
        {
          title: "Production Facility",
          location: "Istanbul",
          size: "15,000 m²",
          image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "R&D Center",
          location: "Istanbul",
          size: "2,000 m²",
          image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Logistics Center",
          location: "Kocaeli",
          size: "10,000 m²",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    certificates: {
      title: "Our Certificates",
      list: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "GMP", "HACCP"]
    }
  }
};

export default function AboutPage() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'tr';
  const t = translations[currentLang as keyof typeof translations];
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = scrollYProgress;
  
  return (
    <motion.main style={{ opacity }} className="pt-20" ref={containerRef}>
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
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 mix-blend-multiply"></div>
        
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

      {/* Stats Section */}
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

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">{t.mission.title}</h2>
              <p className="text-gray-600 leading-relaxed">{t.mission.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {t.mission.values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">{t.vision.title}</h2>
              <p className="text-gray-600 leading-relaxed">{t.vision.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">{t.history.title}</h2>
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

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16"
          >
            {t.values.title}
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {t.values.list.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16"
          >
            {t.achievements.title}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.achievements.list.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="text-primary text-2xl font-bold mb-3">
                  {achievement.year}
                </div>
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">{t.facilities.title}</h2>
            <p className="text-gray-600">{t.facilities.description}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.facilities.items.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
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
    </motion.main>
  );
}
