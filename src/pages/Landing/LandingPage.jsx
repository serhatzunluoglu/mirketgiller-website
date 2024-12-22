import CollaborationBar from '../../components/collaboration-bar/CollaborationBar';
import style from './styles.module.scss';
import Hero from '../../components/hero/hero';
import EventsSection from '../../components/events-section/events';
import Supported from '../../components/supported-project/supported';
import Blog from '../../components/blog/blog';

function LandingPage() {
  return (
    <div className={style.landing}>
      <Hero />
      <CollaborationBar />
      <EventsSection />
      <Supported />
      <Blog />
    </div>
  );
}

export default LandingPage;
