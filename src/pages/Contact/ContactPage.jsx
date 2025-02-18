import Contact from '../../components/Contact/Contact';
import './styles.module.scss';
import { motion } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function ContactPage() {
  return (
    <HelmetProvider>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
      >
        <Contact />
        <Helmet>
          <title>İletişim | Mirketgiller</title>
        </Helmet>
      </motion.div>
    </HelmetProvider>
  );
}

export default ContactPage;
