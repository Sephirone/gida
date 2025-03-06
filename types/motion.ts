import { HTMLMotionProps } from 'framer-motion';

export interface MotionDivProps extends HTMLMotionProps<"div"> {
    className?: string;
}

export interface MotionMainProps extends HTMLMotionProps<"main"> {
    className?: string;
}

export interface MotionSectionProps extends HTMLMotionProps<"section"> {
    className?: string;
}
