import style from './styles.module.scss';
import Counter from '../counter/Counter.jsx';

const AboutUs = () => {
  return (
    <div
      className={`${style.sectionDark} pt-6 md:pt-[50px] pb-16 md:pb-[90px] bg-white h-auto `}
    >
      <div className="mx-auto max-w-7xl items-center justify-between  px-8 flex flex-col gap-[30px]">
        <div className="text-center mb-0 md:mb-[30px]">
          <h1 className="font-bold primary-color mb-3 heading-5 md:text-heading-3">
            Birlikte büyüyen yetenekler
          </h1>
          <p
            className={`${style.textDark} primary-text-color max-w-3xl mx-auto text-body-sm-regular sm:text-body-md-regular`}
          >
            Biz, Mirketgiller ailesi olarak, üniversite öğrencilerinin
            gelişimine odaklanan ve{' '}
            <strong>"birimiz hepimiz, hepimiz birimiz için"</strong> anlayışını
            benimseyen bir topluluğuz.
          </p>
        </div>

        <div
          className={`${style.bgDark} flex flex-wrap w-full lg:flex-nowrap gap-[30px]`}
        >
          <div className="flex w-full flex-wrap lg:flex-nowrap items-center justify-center gap-[30px]">
            <div className="w-full lg:w-3/4 flex flex-col items-start border-solid border border-[#d37c26]  justify-between rounded-3xl p-6 gap-[96px]">
              <i className={`${style.icon} bi bi-bar-chart-fill`}></i>
              <div className="flex flex-col">
                <h4 className="heading-5 primary-color pb-4">Misyonumuz</h4>
                <p
                  className={`${style.textDark} primary-text-color text-body-sm-regular sm:text-body-md-regular`}
                >
                  Mirketgiller olarak, genç profesyonelleri ve öğrencileri bir
                  araya getirerek onları iş dünyasına hazırlayan inovatif
                  projeler geliştiriyoruz. İnsan kaynakları, kariyer yönetimi ve
                  sürdürülebilir iş modelleri üzerine odaklanan çalışmalarımızla
                  bireylerin yeteneklerini keşfetmelerini ve geliştirmelerini
                  sağlıyoruz. HR alanındaki projelerimizle iş dünyasının
                  ihtiyaçlarına yenilikçi çözümler sunarken, topluluk bilincini
                  ve dayanışmayı ön planda tutuyoruz.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-3/4 flex flex-col items-start border-solid border border-[#d37c26]  justify-between rounded-3xl p-6 gap-[96px]">
              <i className={`${style.icon} bi bi-rocket-takeoff-fill`}></i>
              <div className="flex flex-col">
                <h4 className="heading-5 primary-color pb-4">Vizyonumuz</h4>
                <p
                  className={`${style.textDark} primary-text-color text-body-sm-regular sm:text-body-md-regular`}
                >
                  Mirketgiller, genç yetenekleri iş dünyasına hazırlayan, onlara
                  sürdürülebilir ve yenilikçi kariyer fırsatları sunan öncü bir
                  platform olmayı hedefler. İnsan kaynakları alanında teknoloji
                  destekli çözümler geliştirerek, işe alım süreçlerini daha
                  şeffaf, kapsayıcı ve etkili hale getirmeyi amaçlıyoruz. Uzun
                  vadede, küresel çapta etki yaratabilecek projeler
                  geliştirerek, gençlerin iş dünyasındaki yerlerini güçlendiren
                  bir ekosistem oluşturmayı hedefliyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-[30px]">
          <div className="w-full lg:w-3/4 h-auto flex flex-col items-center justify-center border border-[#d37c26] border-solid px-[10px] py-[15px] rounded-3xl">
            <p className="primary-color heading-4 pb-1">
              <Counter from={0} to={3500} duration={3} />+
            </p>
            <p className="primary-color body-medium-regular">
              ulaşılan kişi sayısı
            </p>
          </div>
          <div className="w-full lg:w-3/4 h-auto flex flex-col items-center justify-center border border-[#d37c26] border-solid px-[10px] py-[15px] rounded-3xl">
            <p className="primary-color heading-4 pb-1">
              <Counter from={0} to={400} duration={2.5} />+
            </p>
            <p className="primary-color body-medium-regular">aktif üye</p>
          </div>
          <div className="w-full lg:w-3/4 h-auto flex flex-col items-center justify-center border border-[#d37c26] border-solid px-[10px] py-[15px] rounded-3xl">
            <p className="primary-color heading-4 pb-1">
              <Counter from={0} to={20} duration={2} />+
            </p>
            <p className="primary-color body-medium-regular">ekip üyesi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
