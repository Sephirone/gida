import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"
      />
    </motion.div>
  );
}