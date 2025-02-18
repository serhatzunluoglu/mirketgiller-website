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
          <title>Anasayfa | Mirketgiller</title>
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
