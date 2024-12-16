import CollaborationBar from '../../components/collaboration-bar/CollaborationBar';
import style from './styles.module.scss';
import Hero from '../../components/hero/hero';
import EventsSection from '../../components/events-section/events';

function LandingPage() {
  return (
    <div className={style.landing}>
      <Hero />
      <CollaborationBar />
      <EventsSection />
    </div>
  );
}

export default LandingPage;
