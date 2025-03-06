import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const translations = {
  tr: {
    hero: {
      title: "İletişime Geçin",
      subtitle: "Size yardımcı olmak için buradayız"
    },
    contactInfo: {
      title: "İletişim Bilgilerimiz",
      description: "Farklı departmanlarımıza doğrudan ulaşabilirsiniz",
      departments: [
        {
          name: "Genel Merkez",
          address: "Maslak, Büyükdere Cad. No:123, 34485 Sarıyer/İstanbul",
          phone: "+90 (212) 555 00 00",
          email: "info@chemex.com",
          workHours: "Pazartesi - Cuma: 09:00 - 18:00"
        },
        {
          name: "Üretim Tesisi",
          address: "GOSB, Teknoloji Cad. No:45, 41480 Gebze/Kocaeli",
          phone: "+90 (262) 555 00 00",
          email: "factory@chemex.com",
          workHours: "7/24 Operasyon"
        }
      ]
    }
  },
  en: {
    hero: {
      title: "Contact Us",
      subtitle: "We are here to help you"
    },
    contactInfo: {
      title: "Contact Information",
      description: "Reach out to our different departments directly",
      departments: [
        {
          name: "Headquarters",
          address: "Maslak, Buyukdere St. No:123, 34485 Sariyer/Istanbul",
          phone: "+90 (212) 555 00 00",
          email: "info@chemex.com",
          workHours: "Monday - Friday: 09:00 - 18:00"
        },
        {
          name: "Production Facility",
          address: "GOSB, Technology St. No:45, 41480 Gebze/Kocaeli",
          phone: "+90 (262) 555 00 00",
          email: "factory@chemex.com",
          workHours: "24/7 Operation"
        }
      ]
    }
  }
};

export default function Contact() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'tr';
  const t = translations[currentLang as keyof typeof translations];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
          alt="Contact"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 mix-blend-multiply" />
        
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="h-full flex flex-col justify-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-4"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl"
            >
              {t.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            {t.contactInfo.title}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.contactInfo.departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{dept.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>{dept.address}</p>
                  <p>{dept.phone}</p>
                  <p>{dept.email}</p>
                  <p>{dept.workHours}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
