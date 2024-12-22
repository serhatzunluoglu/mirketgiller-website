import AyroUI from '../../assets/images/supported/AyroUI.jpg';
import GrayGrids from '../../assets/images/supported/GrayGrids.jpg';
import LineIcons from '../../assets/images/supported/LineIcons.jpg';
import UIdeck from '../../assets/images/supported/UIdeck.jpg';
import style from './styles.module.scss';

const supported = () => {
  return (
    <div className={`${style.bgDark}`}>
      <div className="mx-auto flex flex-col max-w-7xl gap-[60px] items-center justify-between py-10 px-8">
        <h2 className="primary-color heading-4  w-full text-center sm:text-[40px] ">
          Desteklediğimiz Projeler
        </h2>
        <div className="flex items-center justify-center gap-[32px] w-full flex-wrap sm:justify-between ">
          <div className="w-auto">
            <img
              src={AyroUI}
              alt="AyroUI"
              className="w-full h-[28px] sm:h-[40px]"
            />
          </div>
          <div className="w-auto">
            <img
              src={GrayGrids}
              alt="GrayGrids"
              className="w-full h-[28px] sm:h-[40px]"
            />
          </div>
          <div className="w-auto">
            <img
              src={LineIcons}
              alt="LineIcons"
              className="w-full h-[28px] sm:h-[40px]"
            />
          </div>
          <div className="w-auto">
            <img
              src={UIdeck}
              alt="UIdeck"
              className="w-full h-[28px] sm:h-[40px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default supported;
