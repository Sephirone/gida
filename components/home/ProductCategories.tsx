import { useTranslation } from 'next-i18next';

const ProductCategories = () => {
  const { t } = useTranslation('common');
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Product Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder content */}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;