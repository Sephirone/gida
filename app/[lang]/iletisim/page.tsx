'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

const DEFAULT_LANG = 'tr';

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
        }
      ]
    },
    form: {
      title: "Mesaj Gönderin",
      description: "Formu doldurun, size en kısa sürede dönüş yapalım",
      fields: {
        name: "Ad Soyad",
        email: "E-posta",
        phone: "Telefon",
        company: "Şirket",
        department: "Departman",
        subject: "Konu",
        message: "Mesajınız",
        attachment: "Dosya Ekle"
      },
      departments: [
        "Satış",
        "Teknik Destek",
        "Müşteri Hizmetleri",
        "İnsan Kaynakları",
        "Diğer"
      ],
      submit: "Gönder",
      success: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
      error: "Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
      placeholders: {
        name: "Adınız ve soyadınız",
        email: "ornek@email.com",
        phone: "+90 (___) ___ __ __",
        message: "Mesajınızı buraya yazın...",
        selectDepartment: "Departman seçin"
      }
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      questions: [
        {
          question: "Ne kadar sürede dönüş yapıyorsunuz?",
          answer: "Genellikle 24 saat içerisinde dönüş yapmaktayız."
        },
        {
          question: "Hangi bölgelere hizmet veriyorsunuz?",
          answer: "Türkiye genelinde ve 50'den fazla ülkede hizmet vermekteyiz."
        },
        {
          question: "Teknik destek nasıl alabilirim?",
          answer: "7/24 müşteri hizmetlerimiz ve online destek kanallarımız üzerinden teknik destek alabilirsiniz."
        }
      ]
    },
    support: {
      title: "Destek Kanallarımız",
      channels: [
        {
          name: "Online Destek",
          description: "7/24 canlı destek hizmetimiz",
          icon: "💬",
          available: true
        },
        {
          name: "Telefon Desteği",
          description: "Müşteri hizmetleri hattımız",
          icon: "📞",
          available: true
        },
        {
          name: "E-posta Desteği",
          description: "Teknik destek ekibimiz",
          icon: "✉️",
          available: true
        }
      ]
    },
    social: {
      title: "Sosyal Medya",
      description: "Bizi sosyal medyada takip edin",
      platforms: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com/company/chemex",
          icon: "linkedin",
          description: "Şirket haberlerimiz ve kariyer fırsatları"
        },
        {
          name: "Twitter",
          url: "https://twitter.com/chemex",
          icon: "twitter",
          description: "Güncel gelişmeler ve duyurular"
        },
        {
          name: "Instagram",
          url: "https://instagram.com/chemex",
          icon: "instagram",
          description: "Ürün ve etkinlik fotoğrafları"
        },
        {
          name: "YouTube",
          url: "https://youtube.com/chemex",
          icon: "youtube",
          description: "Video içeriklerimiz ve eğitimler"
        }
      ]
    }
  },
  en: {
    hero: {
      title: "Contact Us",
      subtitle: "We're here to help"
    },
    contactInfo: {
      title: "Contact Information",
      description: "Reach our departments directly",
      departments: [
        {
          name: "Headquarters",
          address: "Maslak, Buyukdere St. No:123, 34485 Sariyer/Istanbul",
          phone: "+90 (212) 555 00 00",
          email: "info@chemex.com",
          workHours: "Monday - Friday: 09:00 - 18:00"
        }
      ]
    },
    form: {
      title: "Send Message",
      description: "Fill out the form and we'll get back to you soon",
      fields: {
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        department: "Department",
        subject: "Subject",
        message: "Message",
        attachment: "Attach File"
      },
      departments: [
        "Sales",
        "Technical Support",
        "Customer Service",
        "Human Resources",
        "Other"
      ],
      submit: "Send Message",
      success: "Your message has been sent successfully. We will get back to you soon.",
      error: "An error occurred while sending your message. Please try again.",
      placeholders: {
        name: "Enter your full name",
        email: "example@email.com",
        phone: "+1 (___) ___-____",
        message: "Write your message here...",
        selectDepartment: "Select department"
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "What is your response time?",
          answer: "We typically respond within 24 hours."
        },
        {
          question: "Which regions do you serve?",
          answer: "We provide services throughout Turkey and in more than 50 countries."
        },
        {
          question: "How can I get technical support?",
          answer: "You can get technical support through our 24/7 customer service and online support channels."
        }
      ]
    },
    support: {
      title: "Support Channels",
      channels: [
        {
          name: "Online Support",
          description: "24/7 live support service",
          icon: "💬",
          available: true
        },
        {
          name: "Phone Support",
          description: "Customer service line",
          icon: "📞",
          available: true
        },
        {
          name: "Email Support",
          description: "Technical support team",
          icon: "✉️",
          available: true
        }
      ]
    },
    social: {
      title: "Social Media",
      description: "Follow us on social media",
      platforms: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com/company/chemex",
          icon: "linkedin",
          description: "Company news and career opportunities"
        },
        {
          name: "Twitter",
          url: "https://twitter.com/chemex",
          icon: "twitter",
          description: "Latest updates and announcements"
        },
        {
          name: "Instagram",
          url: "https://instagram.com/chemex",
          icon: "instagram",
          description: "Product and event photos"
        },
        {
          name: "YouTube",
          url: "https://youtube.com/chemex",
          icon: "youtube",
          description: "Video content and tutorials"
        }
      ]
    }
  },
  de: {
    hero: {
      title: "Kontakt",
      subtitle: "Wir sind hier um Ihnen zu helfen"
    },
    contactInfo: {
      title: "Kontaktinformationen",
      description: "Sie können unsere verschiedenen Abteilungen direkt erreichen",
      departments: [
        {
          name: "Hauptsitz",
          address: "Maslak, Büyükdere Cad. No:123, 34485 Sarıyer/Istanbul",
          phone: "+90 (212) 555 00 00",
          email: "info@chemex.com",
          workHours: "Montag - Freitag: 09:00 - 18:00"
        },
        {
          name: "Produktionsanlage",
          address: "GOSB, Teknoloji Cad. No:45, 41480 Gebze/Kocaeli",
          phone: "+90 (262) 555 00 00",
          email: "factory@chemex.com",
          workHours: "24/7 Betrieb"
        }
      ]
    },
    form: {
      title: "Nachricht senden",
      description: "Füllen Sie das Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden",
      fields: {
        name: "Name und Nachname",
        email: "E-Mail",
        phone: "Telefon",
        department: "Abteilung",
        message: "Nachricht",
        attachment: "Anhang"
      },
      placeholders: {
        name: "Geben Sie Ihren vollständigen Namen ein",
        email: "beispiel@email.com",
        phone: "+49 (___) ___-____",
        message: "Schreiben Sie Ihre Nachricht hier...",
        selectDepartment: "Abteilung auswählen"
      },
      departments: [
        "Vertrieb",
        "Technischer Support",
        "Kundenservice",
        "Marketing",
        "Personal"
      ],
      submit: "Nachricht senden",
      success: "Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.",
      error: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
    },
    support: {
      title: "Unterstützungskanäle",
      channels: [
        {
          name: "Live-Chat",
          description: "Sofortige Unterstützung durch unsere Kundendienstmitarbeiter",
          icon: "💬",
          available: true
        },
        {
          name: "Wissensdatenbank",
          description: "Umfangreiche Dokumentation und häufig gestellte Fragen",
          icon: "📚",
          available: true
        },
        {
          name: "E-Mail-Support",
          description: "Technisches Support-Team",
          icon: "✉️",
          available: true
        }
      ]
    },
    faq: {
      title: "Häufig gestellte Fragen",
      questions: [
        {
          question: "Wie kann ich ein Angebot anfordern?",
          answer: "Sie können über unser Kontaktformular oder direkt per E-Mail an sales@chemex.com eine Angebotsanfrage stellen."
        },
        {
          question: "Wie lange dauert die Bearbeitung einer Anfrage?",
          answer: "Wir bearbeiten alle Anfragen innerhalb von 24 Stunden an Werktagen."
        },
        {
          question: "Bieten Sie technische Beratung an?",
          answer: "Ja, unser technisches Team steht Ihnen für detaillierte Produktberatung zur Verfügung."
        }
      ]
    },
    social: {
      title: "Social Media",
      description: "Follow us on social media",
      platforms: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com/company/chemex",
          icon: "linkedin",
          description: "Company news and career opportunities"
        },
        {
          name: "Twitter",
          url: "https://twitter.com/chemex",
          icon: "twitter",
          description: "Latest updates and announcements"
        },
        {
          name: "Instagram",
          url: "https://instagram.com/chemex",
          icon: "instagram",
          description: "Product and event photos"
        },
        {
          name: "YouTube",
          url: "https://youtube.com/chemex",
          icon: "youtube",
          description: "Video content and tutorials"
        }
      ]
    }
  },
  ru: {
    hero: {
      title: "Контакты",
      subtitle: "Мы здесь, чтобы помочь вам"
    },
    contactInfo: {
      title: "Контактная информация",
      description: "Вы можете напрямую связаться с нашими различными отделами",
      departments: [
        {
          name: "Главный офис",
          address: "Маслак, пр. Бююкдере №123, 34485 Сарыер/Стамбул",
          phone: "+90 (212) 555 00 00",
          email: "info@chemex.com",
          workHours: "Понедельник - Пятница: 09:00 - 18:00"
        },
        {
          name: "Производственный объект",
          address: "GOSB, пр. Технолоджи №45, 41480 Гебзе/Коджаэли",
          phone: "+90 (262) 555 00 00",
          email: "factory@chemex.com",
          workHours: "Круглосуточно"
        }
      ]
    },
    form: {
      title: "Отправить сообщение",
      description: "Заполните форму, и мы свяжемся с вами в кратчайшие сроки",
      fields: {
        name: "Имя и фамилия",
        email: "Электронная почта",
        phone: "Телефон",
        department: "Отдел",
        message: "Сообщение",
        attachment: "Вложение"
      },
      placeholders: {
        name: "Введите ваше полное имя",
        email: "пример@почта.com",
        phone: "+7 (___) ___-__-__",
        message: "Напишите ваше сообщение здесь...",
        selectDepartment: "Выберите отдел"
      },
      departments: [
        "Отдел продаж",
        "Техническая поддержка",
        "Обслуживание клиентов",
        "Маркетинг",
        "Отдел кадров"
      ],
      submit: "Отправить сообщение",
      success: "Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.",
      error: "При отправке сообщения произошла ошибка. Пожалуйста, попробуйте позже."
    },
    support: {
      title: "Каналы поддержки",
      channels: [
        {
          name: "Онлайн-чат",
          description: "Мгновенная поддержка от наших специалистов",
          icon: "💬",
          available: true
        },
        {
          name: "База знаний",
          description: "Обширная документация и часто задаваемые вопросы",
          icon: "📚",
          available: true
        },
        {
          name: "Электронная поддержка",
          description: "Техническая поддержка по электронной почте",
          icon: "✉️",
          available: true
        }
      ]
    },
    faq: {
      title: "Часто задаваемые вопросы",
      questions: [
        {
          question: "Как запросить коммерческое предложение?",
          answer: "Вы можете отправить запрос через нашу контактную форму или напрямую на email sales@chemex.com"
        },
        {
          question: "Сколько времени занимает обработка запроса?",
          answer: "Мы обрабатываем все запросы в течение 24 часов в рабочие дни."
        },
        {
          question: "Предоставляете ли вы техническую консультацию?",
          answer: "Да, наша техническая команда готова предоставить подробную консультацию по продукции."
        }
      ]
    },
    social: {
      title: "Social Media",
      description: "Follow us on social media",
      platforms: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com/company/chemex",
          icon: "linkedin",
          description: "Company news and career opportunities"
        },
        {
          name: "Twitter",
          url: "https://twitter.com/chemex",
          icon: "twitter",
          description: "Latest updates and announcements"
        },
        {
          name: "Instagram",
          url: "https://instagram.com/chemex",
          icon: "instagram",
          description: "Product and event photos"
        },
        {
          name: "YouTube",
          url: "https://youtube.com/chemex",
          icon: "youtube",
          description: "Video content and tutorials"
        }
      ]
    }
  },
  ar: {
    hero: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لمساعدتك"
    },
    contactInfo: {
      title: "معلومات الاتصال",
      description: "يمكنك التواصل مباشرة مع أقسامنا المختلفة",
      departments: [
        {
          name: "المقر الرئيسي",
          address: "ماسلاك، شارع بويوكديري رقم 123، 34485 ساريير/إسطنبول",
          phone: "+90 (212) 555 00 00",
          email: "info@chemex.com",
          workHours: "الإثنين - الجمعة: 09:00 - 18:00"
        },
        {
          name: "المصنع",
          address: "GOSB، شارع التكنولوجيا رقم 45، 41480 غبزة/قوجه ايلي",
          phone: "+90 (262) 555 00 00",
          email: "factory@chemex.com",
          workHours: "24/7"
        }
      ]
    },
    form: {
      title: "أرسل رسالة",
      description: "املأ النموذج وسنتواصل معك في أقرب وقت ممكن",
      fields: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        company: "الشركة",
        department: "القسم",
        subject: "الموضوع",
        message: "الرسالة",
        attachment: "إرفاق ملف"
      },
      placeholders: {
        name: "أدخل اسمك الكامل",
        email: "example@email.com",
        phone: "+90 (___) ___ __ __",
        message: "اكتب رسالتك هنا...",
        selectDepartment: "اختر القسم"
      },
      departments: [
        "المبيعات",
        "الدعم الفني",
        "خدمة العملاء",
        "الموارد البشرية",
        "أخرى"
      ],
      submit: "إرسال",
      success: "تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.",
      error: "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى."
    },
    support: {
      title: "قنوات الدعم",
      channels: [
        {
          name: "المحادثة المباشرة",
          description: "دعم فوري من فريق خدمة العملاء",
          icon: "💬",
          available: true
        },
        {
          name: "قاعدة المعرفة",
          description: "وثائق شاملة والأسئلة الشائعة",
          icon: "📚",
          available: true
        },
        {
          name: "الدعم عبر البريد الإلكتروني",
          description: "الدعم الفني عبر البريد الإلكتروني",
          icon: "✉️",
          available: true
        }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      questions: [
        {
          question: "كيف يمكنني طلب عرض سعر؟",
          answer: "يمكنك إرسال طلب من خلال نموذج الاتصال أو مباشرة على البريد الإلكتروني sales@chemex.com"
        },
        {
          question: "كم يستغرق الرد على الطلبات؟",
          answer: "نقوم بمعالجة جميع الطلبات خلال 24 ساعة في أيام العمل."
        },
        {
          question: "هل تقدمون استشارات فنية؟",
          answer: "نعم، فريقنا الفني جاهز لتقديم استشارات مفصلة حول المنتجات."
        }
      ]
    },
    social: {
      title: "وسائل التواصل الاجتماعي",
      description: "تابعنا على وسائل التواصل الاجتماعي",
      platforms: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com/company/chemex",
          icon: "linkedin",
          description: "أخبار الشركة وفرص العمل"
        },
        {
          name: "Twitter",
          url: "https://twitter.com/chemex",
          icon: "twitter",
          description: "آخر التحديثات والإعلانات"
        },
        {
          name: "Facebook",
          url: "https://facebook.com/chemex",
          icon: "facebook",
          description: "المجتمع وثقافة الشركة"
        },
        {
          name: "Instagram",
          url: "https://instagram.com/chemex",
          icon: "instagram",
          description: "صور المنتجات والفعاليات"
        }
      ]
    }
  }
} as const;

const SocialIcons = {
  linkedin: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  twitter: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  ),
  instagram: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  youtube: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
};

function getSocialBgColor(platform: string) {
  const colors = {
    linkedin: "bg-[#0077B5] text-white",
    twitter: "bg-[#1DA1F2] text-white",
    instagram: "bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] text-white",
    youtube: "bg-[#FF0000] text-white"
  };
  return colors[platform as keyof typeof colors] || "bg-gray-100 text-gray-500";
}

export default function ContactPage() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({});
  const [_isSubmitting, _setIsSubmitting] = useState(false);
  
  // Early return öncesi hooks'ları taşı
  if (!pathname) {
    return <div>Loading...</div>;
  }

  // Dil kodunu güvenli bir şekilde alalım
  const langFromPath = pathname.split('/')[1];
  console.log('Language from path:', langFromPath);

  // Geçerli bir dil kodu mu kontrol edelim
  const isValidLang = langFromPath && langFromPath in translations;
  const currentLang = isValidLang ? langFromPath : DEFAULT_LANG;
  console.log('Current language:', currentLang);

  // Translation objesini güvenli bir şekilde alalım
  const t = translations[currentLang as keyof typeof translations];
  console.log('Translation object:', t);

  // Translation objesi veya gerekli alanlar eksikse
  if (!t || !t.hero || !t.hero.title) {
    console.error('Missing translation data:', {
      currentLang,
      hasTranslation: !!t,
      hasHero: !!t?.hero,
      hasTitle: !!t?.hero?.title
    });
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Content is loading...</p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemleri burada yapılacak
    setFormStatus('success');
  };

  return (
    <main className="pt-20" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
          alt={t.hero.title}
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
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8">{t.form.title}</h2>
            <p className="text-center text-gray-600 mb-12">{t.form.description}</p>
            
            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-primary transition-colors">
                    {t.form.fields.name}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl 
                                 focus:ring-4 focus:ring-primary/20 focus:border-primary 
                                 transition-all duration-300 outline-none"
                      placeholder={t.form.placeholders.name}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">👤</div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-primary transition-colors">
                    {t.form.fields.email}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl 
                                 focus:ring-4 focus:ring-primary/20 focus:border-primary 
                                 transition-all duration-300 outline-none"
                      placeholder={t.form.placeholders.email}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">✉️</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-primary transition-colors">
                    {t.form.fields.phone}
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl 
                                 focus:ring-4 focus:ring-primary/20 focus:border-primary 
                                 transition-all duration-300 outline-none"
                      placeholder={t.form.placeholders.phone}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">📱</div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-primary transition-colors">
                    {t.form.fields.department}
                  </label>
                  <div className="relative">
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl 
                                 focus:ring-4 focus:ring-primary/20 focus:border-primary 
                                 transition-all duration-300 outline-none appearance-none"
                    >
                      <option value="">{t.form.placeholders.selectDepartment}</option>
                      {t.form.departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🏢</div>
                  </div>
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-primary transition-colors">
                  {t.form.fields.message}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl 
                             focus:ring-4 focus:ring-primary/20 focus:border-primary 
                             transition-all duration-300 outline-none resize-none"
                  placeholder={t.form.placeholders.message}
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-primary transition-colors">
                  {t.form.fields.attachment}
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={(e) => setFormData({...formData, attachment: e.target.files?.[0] || null})}
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl 
                               focus:ring-4 focus:ring-primary/20 focus:border-primary 
                               transition-all duration-300 outline-none file:mr-4 
                               file:py-2 file:px-4 file:rounded-full file:border-0 
                               file:text-sm file:bg-primary/10 file:text-primary 
                               hover:file:bg-primary/20"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white 
                             rounded-xl hover:bg-primary-dark transform hover:scale-105 
                             transition-all duration-300 shadow-lg hover:shadow-xl 
                             hover:shadow-primary/20"
                >
                  <span>{t.form.submit}</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              {formStatus === 'success' && (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl text-center animate-fade-in">
                  {t.form.success}
                </div>
              )}
              {formStatus === 'error' && (
                <div className="bg-red-50 text-red-700 p-4 rounded-xl text-center animate-fade-in">
                  {t.form.error}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Support Channels Section */}
      {t.support && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-center mb-12"
            >
              {t.support.title}
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.support.channels.map((channel, index) => (
                <motion.div
                  key={channel.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <div className="text-4xl mb-4">{channel.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{channel.name}</h3>
                  <p className="text-gray-600">{channel.description}</p>
                  {channel.available && (
                    <span className="inline-block mt-4 px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {currentLang === 'tr' ? 'Aktif' : 'Active'}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {t.faq && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-center mb-12"
            >
              {t.faq.title}
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              {t.faq.questions?.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-6"
                >
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social Media Section */}
      {t.social && (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-center mb-4"
            >
              {t.social.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-gray-600 text-center mb-12"
            >
              {t.social.description}
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {t.social.platforms.map((platform, index) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl 
                             transition-all duration-300 text-center border border-gray-100"
                >
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center 
                                  justify-center ${getSocialBgColor(platform.icon)} 
                                  transition-colors duration-300`}>
                    {SocialIcons[platform.icon as keyof typeof SocialIcons]}
                  </div>
                  <h3 className="text-lg font-semibold mt-4">{platform.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">{platform.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
