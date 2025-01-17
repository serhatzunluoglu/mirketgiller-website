import AyroUI from '../../assets/images/supported/AyroUI.jpg';
import GrayGrids from '../../assets/images/supported/GrayGrids.jpg';
import LineIcons from '../../assets/images/supported/LineIcons.jpg';
import UIdeck from '../../assets/images/supported/UIdeck.jpg';
import style from './styles.module.scss';

const Supported = () => {
  const logos = [
    { id: 1, src: AyroUI, alt: 'AyroUI' },
    { id: 2, src: GrayGrids, alt: 'GrayGrids' },
    { id: 3, src: LineIcons, alt: 'LineIcons' },
    { id: 4, src: UIdeck, alt: 'UIdeck' },
  ];

  return (
    <div className={`${style.bgDark}`}>
      <div className="mx-auto flex flex-col max-w-7xl gap-12 md:gap-[60px] items-center justify-between py-[64px] md:py-[90px] px-8">
        <h2 className="primary-color text-heading-5 md:text-heading-3 w-full text-center">
          Desteklediğimiz Projeler
        </h2>
        <div className="flex items-center justify-center gap-[32px] w-full flex-wrap sm:justify-between">
          {logos.map((logo) => (
            <div key={logo.id} className="w-auto">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-[28px] sm:h-[40px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supported;
