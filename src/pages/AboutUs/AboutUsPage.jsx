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
          <title>Hakkımızda | Mirketgiller</title>
        </Helmet>
        <AboutUs />
        <TimeFlow />
        <Team />
      </motion.div>
    </HelmetProvider>
  );
}

export default AboutUsPage;
