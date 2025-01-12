import Contact from '../../components/Contact/Contact';
import './styles.module.scss';
import { motion } from 'framer-motion';

function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
    >
      <Contact />
    </motion.div>
  );
}

export default ContactPage;
