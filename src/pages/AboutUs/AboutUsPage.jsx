import './styles.module.scss';
import Team from '../../components/team/team';
import TimeFlow from '../../components/timeflow/TimeFlow';
import AboutUs from '../../components/about-us/aboutus';

function AboutUsPage() {
  return (
    <div>
      <AboutUs />
      <TimeFlow />
      <Team />
    </div>
  );
}

export default AboutUsPage;
