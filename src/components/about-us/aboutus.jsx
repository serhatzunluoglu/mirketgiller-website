import style from './styles.module.scss';
import bar from '../../assets/images/aboutus/bar.png';
import rocket from '../../assets/images/aboutus/rocket.png';

const aboutus = () => {
  return (
    <div className={`${style.sectionDark} py-[90px] bg-white h-auto `}>
      <div className="mx-auto max-w-7xl items-center justify-between  px-8 flex flex-col gap-[30px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold primary-color mb-2 heading-3">
            Birlikte büyüyen yetenekler
          </h2>
          <p
            className={`${style.textDark} primary-text-color max-w-3xl mx-auto body-medium-regular`}
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
          <div className="flex w-full items-center justify-center gap-[30px]">
            <div className="w-1/2 flex flex-col items-start border-solid border border-[#d37c26]  justify-between rounded-3xl p-6 gap-[96px]">
              <img src={bar} alt="" />
              <div className="flex flex-col">
                <p className="heading-5 primary-color pb-4">Misyonumuz</p>
                <p className={`${style.textDark} primary-text-color`}>
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

            <div className="w-1/2 flex flex-col items-start border-solid border border-[#d37c26]  justify-between rounded-3xl p-6 gap-[96px]">
              <img src={rocket} alt="" />
              <div className="flex flex-col">
                <p className="heading-5 primary-color pb-4">Vizyonumuz</p>
                <p className={`${style.textDark} primary-text-color`}>
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

        <div className="w-full flex items-center justify-center xl:justify-between gap-[30px]">
          <div className="w-1/3 h-auto flex flex-col items-center justify-center border border-[#d37c26] border-solid px-[10px] py-[15px] rounded-3xl">
            <p className="primary-color heading-4 pb-1">3500+</p>
            <p className="primary-color body-medium-regular">
              ulaşılan kişi sayısı
            </p>
          </div>
          <div className="w-1/3 h-auto flex flex-col items-center justify-center border border-[#d37c26] border-solid px-[10px] py-[15px] rounded-3xl">
            <p className="primary-color heading-4 pb-1">400+</p>
            <p className="primary-color body-medium-regular">aktif üye</p>
          </div>
          <div className="w-1/3 h-auto flex flex-col items-center justify-center border border-[#d37c26] border-solid px-[10px] py-[15px] rounded-3xl">
            <p className="primary-color heading-4 pb-1">20+</p>
            <p className="primary-color body-medium-regular">ekip üyesi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
