import CollaborationBar from '../../components/collaboration-bar/CollaborationBar';
import style from './styles.module.scss';

function LandingPage() {
  return <div className={style.landing}>
    <CollaborationBar />
  </div>;
}

export default LandingPage;
