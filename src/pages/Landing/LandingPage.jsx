import CollaborationBar from '../../components/collaboration-bar/CollaborationBar';
import style from './styles.module.scss';
import Hero from '../../components/hero/hero';
import EventsSection from '../../components/events-section/events';
import Supported from '../../components/supported-project/supported';
import Blog from '../../components/blog/blog';
import WhatIsMirketgiller from '../../components/what-is-mirketgiller/WhatIsMirketgiller';
import { motion } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function LandingPage() {
  return (
    <HelmetProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={style.landing}
      >
        <Helmet>
          <title>Mirketgiller | Anasayfa</title>
          <meta
            name="description"
            content="Mirketgiller, gençleri iş dünyasına hazırlayan, yenilikçi kariyer fırsatları sunan ve sürdürülebilir gelişimi destekleyen bir platformdur."
          />
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Mirketgiller | Anasayfa" />
          <meta
            property="og:description"
            content="Mirketgiller, gençleri iş dünyasına hazırlayan, yenilikçi kariyer fırsatları sunan ve sürdürülebilir gelişimi destekleyen bir platformdur."
          />
          <meta
            property="og:image"
            content="https://www.admin.mirketgiller.com.tr/storage/seo/anasayfa.jpg"
          />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Mirketgiller" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Mirketgiller | Anasayfa" />
          <meta
            name="twitter:description"
            content="Mirketgiller, gençleri iş dünyasına hazırlayan, yenilikçi kariyer fırsatları sunan ve sürdürülebilir gelişimi destekleyen bir platformdur."
          />
          <meta
            name="twitter:image"
            content="https://www.admin.mirketgiller.com.tr/storage/seo/anasayfa.jpg"
          />
          <meta name="twitter:url" content={window.location.href} />
          <meta name="twitter:creator" content="@mirketgiller" />
        </Helmet>
        <Hero />
        <CollaborationBar />
        <EventsSection />
        <WhatIsMirketgiller />
        <Supported />
        <Blog />
      </motion.div>
    </HelmetProvider>
  );
}

export default LandingPage;
