import './styles.module.scss';
import Team from '../../components/team/team';
import TimeFlow from '../../components/timeflow/TimeFlow';
import AboutUs from '../../components/about-us/aboutus';
import { motion } from 'framer-motion';

function AboutUsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <AboutUs />
      <TimeFlow />
      <Team />
    </motion.div>
  );
}

export default AboutUsPage;
