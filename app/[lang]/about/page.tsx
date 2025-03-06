'use client';

import { usePathname } from 'next/navigation';
import { motion, HTMLMotionProps, MotionValue } from 'framer-motion';
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

// Define proper types for motion components
type MotionDivProps = HTMLMotionProps<"div"> & {
  style?: {
    opacity?: MotionValue<number>;
    y?: MotionValue<number>;
    [key: string]: any;
  };
};

// Create a properly typed motion component
const MotionDiv = motion.div as React.FC<MotionDivProps>;

export default function About() {
  const pathname = usePathname();
  const currentLang = (pathname?.split('/')[1] as SupportedLanguages) || 'tr';
  const t = translations[currentLang];
  const containerRef = useRef<HTMLDivElement>(null);

  if (!t || !t.hero) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading translations...</p>
      </div>
    );
  }

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={containerRef}
      className="pt-20"
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
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              {t.hero.title}
            </MotionDiv>
            
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-100"
            >
              {t.hero.subtitle}
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">{t.mission.title}</h2>
            <p className="text-gray-600 mb-8">{t.mission.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.mission.values.map((value, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-white rounded-lg shadow"
                >
                  {value}
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">{t.vision.title}</h2>
            <p className="text-gray-600">{t.vision.description}</p>
          </MotionDiv>
        </div>
      </section>
    </MotionDiv>
  );
}
