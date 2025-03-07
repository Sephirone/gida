import { motion } from 'framer-motion';
import { HiOutlineChip, HiOutlineCube, HiOutlineGlobe } from 'react-icons/hi';

const FeaturesSection = () => {
  const features = [
    {
      icon: <HiOutlineChip className="w-8 h-8" />,
      title: "İleri Teknoloji",
      description: "En son teknolojilerle üretilmiş hammaddeler"
    },
    {
      icon: <HiOutlineCube className="w-8 h-8" />,
      title: "Geniş Ürün Yelpazesi",
      description: "Her endüstri için özel çözümler"
    },
    {
      icon: <HiOutlineGlobe className="w-8 h-8" />,
      title: "Global Tedarik",
      description: "Dünya çapında güvenilir tedarik zinciri"
    }
  ];

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Dekoratif arka plan */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50" />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-100/30 to-transparent rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="text-xl text-gray-600">
            Yenilikçi çözümlerimizle endüstrinize değer katıyoruz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;