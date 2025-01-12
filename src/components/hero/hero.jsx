import style from './styles.module.scss';
import mirketImg from '../../assets/images/mirket.png';
import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2.5,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
}

const hero = () => {
  return (
    <div
      className={`${style.heroBackground} ${style.heroContainer} w-full flex items-center justify-between pt-[40px] px-4 sm:px-8 md:flex-col h-[92vh] md:h-[90vh] mt-[-112px] lg:mt-[-116px] text-white`}
    >
      <div
        className={`${style.hero} hero w-full h-full xl:w-[1280px] flex flex-col md:flex-row items-center justify-between sm:justify-center lg:justify-between gap-4 sm:gap-3 pt-[112px] xl:pt-[116px] xl:px-8`}
      >
        <div className="hero-left h-min w-full sm:w-3/4 lg:w-auto lg:mb-[116px] text-center md:text-left">
          <h1 className={`text-4xl font-bold mb-4 sm:mb-6 xl:text-6xl`}>
            Birlikte büyüyen <br /> yetenekler
          </h1>
          <p
            className={`text-sm mb-4 sm:mb-6 body-medium-regular w-[auto] md:text-sm md:w-[auto] lg:w-[477px]`}
          >
            Biz, Mirketgiller ailesi olarak, üniversite öğrencilerinin
            gelişimine odaklanan ve
            <strong> "birimiz hepimiz, hepimiz birimiz için" </strong>
            anlayışını benimseyen bir topluluğuz.
          </p>
          <div className={`${style.heroButtons} flex gap-4 flex-wrap`}>
            <button
              className={`${style.buttonFirst} font-medium body-small-medium px-6 py-3 rounded-lg w-full md:w-max h-12 sm:text-sm hover:scale-105`}
            >
              Topluluğumuza Katıl
            </button>
            <button
              className={`${style.buttonSecond} font-medium body-small-medium px-6 py-3 rounded-lg w-full md:w-max h-12 sm:text-sm hover:scale-105`}
            >
              Ekibimize Katıl
            </button>
          </div>
          <div className="hidden md:flex gap-5 flex-wrap w-max mt-12">
            <div className="reached-people">
              <div className="heading-4">
                <Counter from={0} to={3500} /> +
              </div>
              <div className="body-small-regular">Ulaşılan Kişi Sayısı</div>
            </div>
            <div
              className={`${style.verticalLine} bg-white h-auto w-[2px]`}
            ></div>
            <div className="active-member min-w-[90px]">
              <div className="heading-4">
                <Counter from={0} to={400} /> +
              </div>
              <div className="body-small-regular">Aktif Üye </div>
            </div>
            <div
              className={`${style.verticalLine} bg-white h-auto w-[2px]`}
            ></div>
            <div className="team-member">
              <div className="heading-4">
                <Counter from={0} to={25} /> +
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

export default hero;
