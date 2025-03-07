import { useTranslation } from 'next-i18next';

const Certifications = () => {
  const { t } = useTranslation('common');

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Certifications
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Placeholder for certification logos */}
          <div className="flex justify-center items-center h-24 bg-gray-100 rounded-lg">
            ISO 9001
          </div>
          <div className="flex justify-center items-center h-24 bg-gray-100 rounded-lg">
            ISO 14001
          </div>
          <div className="flex justify-center items-center h-24 bg-gray-100 rounded-lg">
            HACCP
          </div>
          <div className="flex justify-center items-center h-24 bg-gray-100 rounded-lg">
            GMP
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;