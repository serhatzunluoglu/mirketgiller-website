import style from './styles.module.scss';

const hero = () => {
  return (
    <div
      className={`mx-auto flex max-w-7xl items-center justify-between pt-[40px] pb-[80px] px-8 md:flex-col`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className={`text-4xl font-bold primary-color mb-6 lg:text-6xl`}>
            Birlikte büyüyen yetenekler
          </h1>
          <p
            className={`${style.leftLandingText} mg-dark text-sm mb-6 body-medium-regular w-[auto] md:text-sm md:w-[auto] lg:w-[477px]`}
          >
            Biz, Mirketgiller ailesi olarak, üniversite öğrencilerinin
            gelişimine odaklanan ve
            <strong> "birimiz hepimiz, hepimiz birimiz için" </strong>
            anlayışını benimseyen bir topluluğuz.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              className={`${style.buttonFirst} primary-color-bg text-white font-medium body-small-medium px-6 py-3 rounded-lg transition h-12 sm:text-sm hover:bg-[#f18d29]`}
            >
              Topluluğumuza Katıl
            </button>
            <button
              className={`${style.buttonSecond} border primary-color font-medium body-small-medium px-6 py-3 hover:primary-color-bg transition h-12 sm:text-sm hover:bg-[#d37c26] hover:border-[#d37c26] hover:text-white`}
            >
              Ekibimize Katıl
            </button>
          </div>
        </div>

        <div className="grid grid-rows-3 gap-4">
          <div
            className={`${style.rightCardRadius} ${style.bgColorTransparent} border-1-primary bg-white flex items-center flex-col py-[15px] px-[10px] gap-1 h-[96px]`}
          >
            <p className="text-2xl font-bold primary-color heading-4">3500+</p>
            <p className="text-gray-600 primary-color body-medium-regular">
              ulaşılan kişi sayısı
            </p>
          </div>
          <div
            className={`${style.rightCardRadius} ${style.bgColorTransparent} border-1-primary bg-white flex items-center flex-col py-[15px] px-[10px] gap-1 h-[96px]`}
          >
            <p className="text-2xl font-bold primary-color heading-4">400+</p>
            <p className="text-gray-600 primary-color body-medium-regular">
              aktif üye
            </p>
          </div>
          <div
            className={`${style.rightCardRadius} ${style.bgColorTransparent} border-1-primary bg-white flex items-center flex-col py-[15px] px-[10px] gap-1 h-[96px]`}
          >
            <p className="text-2xl font-bold primary-color heading-4">20+</p>
            <p className="text-gray-600 primary-color body-medium-regular">
              ekip üyesi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
