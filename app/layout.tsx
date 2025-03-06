import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from 'next/headers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CHEMEX | Gıda, İlaç ve Kimyasal Hammadde Tedariki",
  description: "Profesyonel gıda, ilaç ve kimyasal hammadde tedarik çözümleri",
};

function getLanguageFromPath(path: string) {
  return path.split('/')[1] || 'tr';
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "/";
  const currentLang = getLanguageFromPath(pathname);
  
  return (
    <html lang={currentLang} dir={currentLang === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={`${inter.className} ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
        {children}
      </body>
    </html>
  );
}
