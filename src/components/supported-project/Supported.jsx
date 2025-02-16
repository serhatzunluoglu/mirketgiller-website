import AyroUI from '../../assets/images/supported/AyroUI.jpg';
import GrayGrids from '../../assets/images/supported/GrayGrids.jpg';
import LineIcons from '../../assets/images/supported/LineIcons.jpg';
import UIdeck from '../../assets/images/supported/UIdeck.jpg';
import style from './styles.module.scss';

const Supported = () => {
  const logos = [
    {
      id: 1,
      src: AyroUI,
      alt: 'AyroUI',
      description: 'AyroUI modern UI kit çözümleri sunar.',
      link: 'https://ayroui.com',
    },
    {
      id: 2,
      src: GrayGrids,
      alt: 'GrayGrids',
      description: 'GrayGrids, profesyonel şablonlar sağlar.',
      link: 'https://graygrids.com',
    },
    {
      id: 3,
      src: LineIcons,
      alt: 'LineIcons',
      description: 'LineIcons, ikon kütüphaneleri sunar.',
      link: 'https://lineicons.com',
    },
    {
      id: 4,
      src: UIdeck,
      alt: 'UIdeck',
      description: 'UIdeck, premium UI araçları içerir.',
      link: 'https://uideck.com',
    },
  ];

  return (
    <div className={`${style.bgDark}`}>
      <div className="mx-auto flex flex-col max-w-7xl gap-12 md:gap-[60px] items-center justify-between py-[64px] md:py-[90px] px-8">
        <h2 className="primary-color text-heading-5 md:text-heading-3 w-full text-center">
          Desteklediğimiz Projeler
        </h2>
        <div className="flex items-center justify-center gap-[32px] w-full flex-wrap lg:justify-between">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="relative group w-auto flex flex-col items-center"
            >
              {/* Logo Image */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-[28px] sm:h-[40px]"
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-4 py-3 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:flex flex-col items-center gap-1
                  before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-gray-800"
              >
                <span>{logo.description}</span>
                <a
                  href={logo.link}
                  target="_blank"
                  rel="noopener"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Daha fazla bilgi
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supported;
