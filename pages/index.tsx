import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/layout/Layout';
import ProductCategories from '../components/home/ProductCategories';
import Hero from '../components/home/Hero';
import Certifications from '../components/home/Certifications';
import News from '../components/home/News';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Hero />
      <ProductCategories />
      <Certifications />
      <News />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};