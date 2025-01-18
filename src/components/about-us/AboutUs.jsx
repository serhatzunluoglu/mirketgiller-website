import style from './styles.module.scss';
import Counter from '../counter/Counter.jsx';

const AboutUs = () => {
  return (
    <div
      className={`${style.sectionDark} pt-6 md:pt-[50px] pb-16 md:pb-[90px] bg-white h-auto `}
    >
      <div className="mx-auto max-w-7xl items-center justify-between  px-8 flex flex-col gap-[30px]">
        <div className="text-center mb-0 md:mb-[30px]">
          <h2 className="font-bold primary-color mb-3 heading-5 md:text-heading-3">
            Birlikte büyüyen yetenekler
          </h2>
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
                <p className="heading-5 primary-color pb-4">Misyonumuz</p>
                <p
                  className={`${style.textDark} primary-text-color text-body-sm-regular sm:text-body-md-regular`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  nec molestie arcu. Nam egestas a enim a aliquam. Fusce quam
                  nulla, lobortis id lorem vel, hendrerit ultricies ligula. Nunc
                  lobortis purus ac finibus cursus. Duis id volutpat turpis, a
                  viverra quam. Quisque sed est tincidunt, sodales ex et,
                  volutpat dolor. Fusce velit lorem, consequat vitae condimentum
                  vitae, porttitor ac odio. Vestibulum condimentum felis at
                  ornare consectetur. Proin in risus viverra, consequat metus
                  et, facilisis tellus. Vivamus blandit bibendum nisl, at cursus
                  lectus aliquet ut.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-3/4 flex flex-col items-start border-solid border border-[#d37c26]  justify-between rounded-3xl p-6 gap-[96px]">
            <i className={`${style.icon} bi bi-rocket-takeoff-fill`}></i>
              <div className="flex flex-col">
                <p className="heading-5 primary-color pb-4">Vizyonumuz</p>
                <p
                  className={`${style.textDark} primary-text-color text-body-sm-regular sm:text-body-md-regular`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  nec molestie arcu. Nam egestas a enim a aliquam. Fusce quam
                  nulla, lobortis id lorem vel, hendrerit ultricies ligula. Nunc
                  lobortis purus ac finibus cursus. Duis id volutpat turpis, a
                  viverra quam. Quisque sed est tincidunt, sodales ex et,
                  volutpat dolor. Fusce velit lorem, consequat vitae condimentum
                  vitae, porttitor ac odio. Vestibulum condimentum felis at
                  ornare consectetur. Proin in risus viverra, consequat metus
                  et, facilisis tellus. Vivamus blandit bibendum nisl, at cursus
                  lectus aliquet ut.
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
