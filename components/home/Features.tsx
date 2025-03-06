'use client';

import { usePathname } from 'next/navigation';

const translations = {
  tr: {
    title: "Neden Bizi Tercih Etmelisiniz?",
    features: [
      {
        title: "Kalite Güvencesi",
        description: "Tüm ürünlerimiz uluslararası kalite standartlarına uygun olarak tedarik edilmektedir",
        icon: "🏆"
      },
      {
        title: "Hızlı Teslimat",
        description: "Güçlü lojistik ağımız sayesinde siparişleriniz en kısa sürede teslim edilir",
        icon: "🚚"
      },
      {
        title: "Teknik Destek",
        description: "Uzman ekibimiz 7/24 teknik destek ve danışmanlık hizmeti sunmaktadır",
        icon: "👨‍🔬"
      },
      {
        title: "Geniş Ürün Yelpazesi",
        description: "Binlerce ürün çeşidi ile tüm ihtiyaçlarınıza çözüm sunuyoruz",
        icon: "📦"
      }
    ]
  },
  en: {
    title: "Why Choose Us?",
    features: [
      {
        title: "Quality Assurance",
        description: "All our products are supplied in accordance with international quality standards",
        icon: "🏆"
      },
      {
        title: "Fast Delivery",
        description: "Thanks to our strong logistics network, your orders are delivered in the shortest time",
        icon: "🚚"
      },
      {
        title: "Technical Support",
        description: "Our expert team provides 24/7 technical support and consultancy services",
        icon: "👨‍🔬"
      },
      {
        title: "Wide Product Range",
        description: "We offer solutions to all your needs with thousands of product varieties",
        icon: "📦"
      }
    ]
  },
  de: {
    title: "Warum Uns Wählen?",
    features: [
      {
        title: "Qualitätssicherung",
        description: "Alle unsere Produkte werden nach internationalen Qualitätsstandards geliefert",
        icon: "🏆"
      },
      {
        title: "Schnelle Lieferung",
        description: "Dank unseres starken Logistiknetzwerks werden Ihre Bestellungen in kürzester Zeit geliefert",
        icon: "🚚"
      },
      {
        title: "Technischer Support",
        description: "Unser Expertenteam bietet 24/7 technischen Support und Beratungsservice",
        icon: "👨‍🔬"
      },
      {
        title: "Breites Produktsortiment",
        description: "Wir bieten Lösungen für alle Ihre Bedürfnisse mit Tausenden von Produktvarianten",
        icon: "📦"
      }
    ]
  },
  ru: {
    title: "Почему Выбирают Нас?",
    features: [
      {
        title: "Гарантия Качества",
        description: "Все наши продукты поставляются в соответствии с международными стандартами качества",
        icon: "🏆"
      },
      {
        title: "Быстрая Доставка",
        description: "Благодаря нашей сильной логистической сети ваши заказы доставляются в кратчайшие сроки",
        icon: "🚚"
      },
      {
        title: "Техническая Поддержка",
        description: "Наша команда экспертов предоставляет техническую поддержку и консультации 24/7",
        icon: "👨‍🔬"
      },
      {
        title: "Широкий Ассортимент",
        description: "Мы предлагаем решения для всех ваших потребностей с тысячами разновидностей продукции",
        icon: "📦"
      }
    ]
  },
  ar: {
    title: "لماذا تختارنا؟",
    features: [
      {
        title: "ضمان الجودة",
        description: "يتم توريد جميع منتجاتنا وفقًا لمعايير الجودة الدولية",
        icon: "🏆"
      },
      {
        title: "توصيل سريع",
        description: "بفضل شبكة الخدمات اللوجستية القوية لدينا، يتم تسليم طلباتك في أقصر وقت",
        icon: "🚚"
      },
      {
        title: "الدعم الفني",
        description: "يقدم فريق الخبراء لدينا الدعم الفني والخدمات الاستشارية على مدار الساعة",
        icon: "👨‍🔬"
      },
      {
        title: "مجموعة واسعة من المنتجات",
        description: "نقدم حلولاً لجميع احتياجاتك مع آلاف الأصناف من المنتجات",
        icon: "📦"
      }
    ]
  }
};

export default function Features() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'tr';
  const t = translations[currentLang as keyof typeof translations] || translations.tr;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
