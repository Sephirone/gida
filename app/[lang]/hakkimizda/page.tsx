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
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] overflow-hidden">
          <Image
            src="/images/about-hero.jpg"
            alt="About Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex flex-col justify-center h-full text-white">
              <h1 className="text-5xl font-bold mb-4">{t.hero.title}</h1>
              <p className="text-xl">{t.hero.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {t.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">{t.mission.title}</h2>
                <p className="text-gray-600 mb-8">{t.mission.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {t.mission.values.map((value, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg shadow-md"
                    >
                      {value}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">{t.vision.title}</h2>
                <p className="text-gray-600">{t.vision.description}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.main>
  );
}
