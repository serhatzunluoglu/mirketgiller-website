import style from './styles.module.scss';
import mirketImg from '../../assets/images/mirket.png';

const hero = () => {
  return (
    <div
      className={`${style.heroBackground} ${style.heroContainer} w-full flex items-center justify-between pt-[40px] px-8 md:flex-col h-[92vh] sm:h-[90vh] mt-[-116px] text-white`}
    >
      <div className="hero w-full xl:w-[1280px] flex-col sm:flex-row flex gap-8 items-center justify-between pt-[116px] xl:px-8 h-full">
        <div className="hero-left mb-[116px]">
          <h1 className={`text-4xl font-bold mb-6 lg:text-6xl`}>
            Birlikte büyüyen <br /> yetenekler
          </h1>
          <p
            className={`${style.leftLandingText} text-sm mb-6 body-medium-regular w-[auto] md:text-sm md:w-[auto] lg:w-[477px]`}
          >
            Biz, Mirketgiller ailesi olarak, üniversite öğrencilerinin
            gelişimine odaklanan ve
            <strong> "birimiz hepimiz, hepimiz birimiz için" </strong>
            anlayışını benimseyen bir topluluğuz.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              className={`${style.buttonFirst} font-medium body-small-medium px-6 py-3 rounded-lg h-12 sm:text-sm hover:scale-105`}
            >
              Topluluğumuza Katıl
            </button>
            <button
              className={`${style.buttonSecond} font-medium body-small-medium px-6 py-3 rounded-lg h-12 sm:text-sm hover:scale-105`}
            >
              Ekibimize Katıl
            </button>
          </div>
          <div className="hidden lg:flex gap-4 flex-wrap w-max mt-12">
            <div>
              <div className="heading-4">3500+</div>
              <div className="body-small-regular">Ulaşılan Kişi Sayısı</div>
            </div>
            <div
              className={`${style.verticalLine} bg-white h-auto w-[2px]`}
            ></div>
            <div>
              <div className="heading-4">400+</div>
              <div className="body-small-regular">Aktif Üye</div>
            </div>
            <div
              className={`${style.verticalLine} bg-white h-auto w-[2px]`}
            ></div>
            <div>
              <div className="heading-4">25+</div>
              <div className="body-small-regular">Ekip Üyesi</div>
            </div>
          </div>
        </div>
        <div className={`${style.heroRight} h-full`}>
          <img className="h-full" src={mirketImg} alt="mirket" />
        </div>
      </div>
    </div>
  );
};

export default hero;

