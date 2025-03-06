'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
  }, []);

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [pathname]);

  return (
    <ThemeProvider attribute="class">
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </ThemeProvider>
  );
}