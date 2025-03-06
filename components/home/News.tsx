'use client';

import { usePathname } from 'next/navigation';

const translations = {
  tr: {
    title: "Son Haberler"
  },
  en: {
    title: "Latest News"
  }
};

export default function News() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'tr';
  const t = translations[currentLang as keyof typeof translations];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Haber öğeleri buraya eklenecek */}
        </div>
      </div>
    </section>
  );
}
