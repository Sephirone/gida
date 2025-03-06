'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import type { AboutPageTranslations, SupportedLanguages } from '@/types/common';

const translations: Record<SupportedLanguages, AboutPageTranslations> = {
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
    },
    history: {
      title: "Tarihçemiz",
      timeline: [
        {
          year: "1998",
          title: "Kuruluş",
          description: "Şirketimizin temelleri atıldı"
        }
        // ... diğer timeline öğeleri
      ]
    }
  },
  en: { /* İngilizce çeviriler */ },
  de: { /* Almanca çeviriler */ },
  ru: { /* Rusça çeviriler */ },
  ar: { /* Arapça çeviriler */ }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function About() {
  const pathname = usePathname();
  const currentLang = (pathname?.split('/')[1] as SupportedLanguages) || 'tr';
  const t = translations[currentLang];

  return (
    <div className="pt-20">
      <motion.div
        style={{ opacity: scrollYProgress }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="pt-20"
        as="div"
      >
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
                {...fadeInUp}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                {t.hero.title}
              </motion.h1>
              <motion.p
                {...fadeInUp}
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
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">{t.mission.title}</h2>
              <p className="text-gray-600 mb-8">{t.mission.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {t.mission.values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 rounded-lg shadow"
                  >
                    {value}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">{t.vision.title}</h2>
              <p className="text-gray-600">{t.vision.description}</p>
            </motion.div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t.history.title}
            </h2>
            <div className="max-w-4xl mx-auto">
              {t.history.timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center mb-8"
                >
                  <div className="w-24 flex-shrink-0 text-primary font-bold">
                    {item.year}
                  </div>
                  <div className="flex-grow bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
