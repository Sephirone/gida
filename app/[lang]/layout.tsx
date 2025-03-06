import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/app/Providers";

export async function generateStaticParams() {
  return [
    { lang: "tr" }, 
    { lang: "en" },
    { lang: "de" },
    { lang: "ru" },
    { lang: "ar" }
  ];
}

const translations: { [key: string]: { title: string; description: string } } = {
  tr: {
    title: "CHEMEX | Gıda, İlaç ve Kimyasal Hammadde Tedariki",
    description: "Profesyonel gıda, ilaç ve kimyasal hammadde tedarik çözümleri sunuyoruz.",
  },
  en: {
    title: "CHEMEX | Food, Pharmaceutical and Chemical Raw Material Supply",
    description: "We provide professional food, pharmaceutical and chemical raw material supply solutions.",
  },
  de: {
    title: "CHEMEX | Lebensmittel, Pharma und Chemische Rohstoffversorgung",
    description: "Wir bieten professionelle Lösungen für die Versorgung mit Lebensmitteln, Pharma und chemischen Rohstoffen.",
  },
  ru: {
    title: "CHEMEX | Поставка пищевого, фармацевтического и химического сырья",
    description: "Мы предоставляем профессиональные решения по поставке пищевого, фармацевтического и химического сырья.",
  },
  ar: {
    title: "CHEMEX | توريد المواد الخام الغذائية والدوائية والكيميائية",
    description: "نقدم حلولاً مهنية لتوريد المواد الخام الغذائية والدوائية والكيميائية.",
  }
};

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return {
    title: translations[params.lang]?.title || translations.tr.title,
    description: translations[params.lang]?.description || translations.tr.description,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
