import './styles.module.scss';
import { motion } from 'framer-motion';

function TeamPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      TeamPage
    </motion.div>
  );
}

export default TeamPage;
