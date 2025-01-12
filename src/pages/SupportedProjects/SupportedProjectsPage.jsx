import './styles.module.scss';
import { motion } from 'framer-motion';

function SupportedProjectsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      SupportedProjectsPage
    </motion.div>
  );
}

export default SupportedProjectsPage;
