'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { MotionMainProps } from '@/types/common';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = "pt-20" }: PageWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const mainProps: MotionMainProps = {
    style: { opacity: scrollYProgress },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    ref: containerRef,
    className
  };

  return <motion.main {...mainProps}>{children}</motion.main>;
}