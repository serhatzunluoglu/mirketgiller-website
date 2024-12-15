import CollaborationBar from '../../components/collaboration-bar/CollaborationBar';
import style from './styles.module.scss';
import Hero from '../../components/hero/hero';

function LandingPage() {
  return <div className={style.landing}>
    <CollaborationBar />
    <Hero />
  </div>;
}

export default LandingPage;
