import { HTMLMotionProps } from 'framer-motion';

export type SupportedLanguages = 'tr' | 'en' | 'de' | 'ru' | 'ar';

export interface AboutPageTranslations {
  hero: {
    title: string;
    subtitle: string;
  };
  stats: Array<{
    number: string;
    label: string;
  }>;
  mission: {
    title: string;
    description: string;
    values: string[];
  };
  vision: {
    title: string;
    description: string;
  };
  history: {
    title: string;
    timeline: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };
}
