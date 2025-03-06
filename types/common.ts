import { HTMLMotionProps } from 'framer-motion';

export type MotionMainProps = HTMLMotionProps<"main">;
export type MotionDivProps = HTMLMotionProps<"div">;
export type MotionSectionProps = HTMLMotionProps<"section">;

export type SupportedLanguages = 'tr' | 'en' | 'de' | 'ru' | 'ar';

export interface BasePageProps {
  params: {
    lang: SupportedLanguages;
  };
}

export interface TranslationBase {
  hero: {
    title: string;
    subtitle: string;
  };
}