import './styles.module.scss';
import Team from '../../components/team/team';
import TimeFlow from '../../components/timeflow/TimeFlow';
import AboutUs from '../../components/about-us/aboutus';
import { motion } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function AboutUsPage() {
  return (
    <HelmetProvider>
      <motion.div
        initial={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
      >
        <Helmet>
          <title>Mirketgiller | Hakkımızda</title>
          <meta
            name="description"
            content="Mirketgiller ailesi olarak, üniversite öğrencilerinin gelişimini destekleyip potansiyellerini artırıyoruz. Hakkımızda sayfasında vizyonumuzu ve ekibimizi keşfedin."
          />
          {/* Open Graph Meta Tags for Event */}
          <meta
            property="og:description"
            content="Mirketgiller ailesi olarak, üniversite öğrencilerinin gelişimini destekleyip potansiyellerini artırıyoruz. Hakkımızda sayfasında vizyonumuzu ve ekibimizi keşfedin."
          />
          <meta
            property="og:image"
            content="https://www.admin.mirketgiller.com.tr/storage/seo/hakkimizda.jpg"
          />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:type" content="profile" />
          <meta property="og:site_name" content="Mirketgiller" />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Mirketgiller | Hakkımızda" />
          <meta
            name="twitter:description"
            content="Mirketgiller ailesi olarak, üniversite öğrencilerinin gelişimini destekleyip potansiyellerini artırıyoruz. Hakkımızda sayfasında vizyonumuzu ve ekibimizi keşfedin."
          />
          <meta
            name="twitter:image"
            content="https://www.admin.mirketgiller.com.tr/storage/seo/hakkimizda.jpg"
          />
          <meta name="twitter:url" content={window.location.href} />
          <meta name="twitter:creator" content="@mirketgiller" />
        </Helmet>
        <AboutUs />
        <TimeFlow />
        <Team />
      </motion.div>
    </HelmetProvider>
  );
}

export default AboutUsPage;
