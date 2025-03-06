'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { SupportedLanguages } from '@/types/common';

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
      description: "Dünya standartlarında kalite ve güvenilirlik ilkesiyle...",
      values: ["Müşteri Odaklılık", "Sürdürülebilirlik", "İnovasyon", "Kalite"]
    },
    vision: {
      title: "Vizyonumuz",
      description: "Global kimya sektöründe sürdürülebilir büyüme..."
    }
  },
  en: {
    hero: {
      title: "25 Years of Experience, Endless Trust",
      subtitle: "Our quarter-century journey in the chemical industry"
    },
    stats: [
      { number: "25+", label: "Years Experience" },
      { number: "1000+", label: "Products" },
      { number: "50+", label: "Export Countries" },
      { number: "5000+", label: "Happy Clients" }
    ],
    mission: {
      title: "Our Mission",
      description: "With world-class quality and reliability principles...",
      values: ["Customer Focus", "Sustainability", "Innovation", "Quality"]
    },
    vision: {
      title: "Our Vision",
      description: "Sustainable growth in the global chemical industry..."
    }
  }
} as const;

export default function AboutPage() {
  const pathname = usePathname();
  const currentLang = (pathname?.split('/')[1] as SupportedLanguages) || 'tr';
  const t = translations[currentLang];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
          alt="Chemistry Laboratory"
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
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              {t.hero.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">{t.mission.title}</h2>
              <p className="text-gray-600 mb-8">{t.mission.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {t.mission.values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-white rounded-lg shadow"
                  >
                    {value}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6">{t.vision.title}</h2>
              <p className="text-gray-600">{t.vision.description}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
