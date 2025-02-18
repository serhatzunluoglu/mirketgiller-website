import style from './styles.module.scss';
import mirketImg from '../../assets/images/mirket.png';
import Counter from '../counter/Counter.jsx';

const Hero = () => {
  return (
    <div
      className={`${style.heroBackground} ${style.heroContainer} w-full flex items-center justify-between pt-[40px] px-4 sm:px-8 md:flex-col h-[92vh] md:h-[90vh] mt-[-112px] lg:mt-[-116px] text-white`}
    >
      <div
        className={`${style.hero} hero w-full h-full xl:w-[1280px] flex flex-col md:flex-row items-center justify-between sm:justify-center lg:justify-between gap-4 sm:gap-3 pt-[112px] xl:pt-[116px] xl:px-8`}
      >
        <div className="hero-left h-min w-full sm:w-3/4 lg:w-auto lg:mb-[116px] text-center md:text-left">
          <h1
            className={`text-heading-6 font-bold mb-4 sm:mb-6 sm:text-heading-4 md:text-heading-2 xl:text-heading-1`}
          >
            Birlikte büyüyen yetenekler
          </h1>
          <p
            className={`text-body-sm-regular mb-4 sm:mb-6 sm:text-body-md-regular w-[auto] md:w-[auto] lg:w-[477px]`}
          >
            Biz, Mirketgiller ailesi olarak, üniversite öğrencilerinin
            gelişimine odaklanan ve
            <strong> "birimiz hepimiz, hepimiz birimiz için" </strong>
            anlayışını benimseyen bir topluluğuz.
          </p>
          <div className={`${style.heroButtons} flex gap-4 flex-wrap`}>
            <button
              className={`${style.buttonFirst} font-medium body-small-medium px-6 py-3 rounded-lg w-full md:w-max h-12 sm:text-sm hover:scale-105 transition-transform`}
            >
              Topluluğumuza Katıl
            </button>
            <a
              href="https://forms.gle/4TpWrXeMZTQrRRwT7"
              target="_blank"
              className={`${style.buttonSecond} font-medium body-small-medium px-6 py-3 rounded-lg w-full md:w-max h-12 sm:text-sm hover:scale-105 transition-transform`}
            >
              Ekibimize Katıl
            </a>
          </div>
          <div className="hidden md:flex gap-5 flex-wrap w-max mt-12">
            <div className="reached-people">
              <div className="heading-4">
                <Counter from={0} to={3500} duration={1} /> +
              </div>
              <div className="body-small-regular">Ulaşılan Kişi Sayısı</div>
            </div>
            <div
              className={`${style.verticalLine} bg-white h-auto w-[2px]`}
            ></div>
            <div className="active-member min-w-[90px]">
              <div className="heading-4">
                <Counter from={0} to={400} duration={2.5} /> +
              </div>
              <div className="body-small-regular">Aktif Üye </div>
            </div>
            <div
              className={`${style.verticalLine} bg-white h-auto w-[2px]`}
            ></div>
            <div className="team-member">
              <div className="heading-4">
                <Counter from={0} to={25} duration={2} /> +
              </div>
              <div className="body-small-regular">Ekip Üyesi</div>
            </div>
          </div>
        </div>
        <div
          className={`${style.heroRight} md:inline-flex w-full sm:w-3/4 md:w-2/4 lg:w-auto mt-auto h-[45%] md:h-full`}
        >
          <img
            className="h-full md:h-auto md:w-full md:m-0 md:mt-auto xl:h-full m-auto object-cover"
            src={mirketImg}
            alt="mirket"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
