import { useTranslation } from 'next-i18next';

const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <div className="relative bg-gray-900">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            {t('hero.description')}
          </p>
          <div className="mt-10">
            <a
              href="#products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              {t('hero.cta')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
