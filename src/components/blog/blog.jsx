import style from './styles.module.scss';
import blogs from '../../assets/images/blogs/blogs.jpg';

const events = () => {
  return (
    <div className={`${style.sectionDark} py-[90px] bg-[#F9FAFB] h-auto `}>
      <div className="mx-auto max-w-7xl items-center justify-between  px-8 flex flex-col gap-[60px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold primary-color mb-2 heading-3">
            Blog Yazılarımız
          </h2>
          <p
            className={`${style.textDark} primary-text-color max-w-3xl mx-auto body-medium-regular`}
          >
            Ekip arkadaşlarımızdan ilham verici ve bilgilendirici blog yazıları.
            Kendi alanlarında uzmanlaşmış üyelerimizin paylaştığı yazılarla,
            bilgi birikiminizi artırın ve yeni perspektifler kazanın.
          </p>
        </div>

        <div className={`flex flex-wrap w-full lg:flex-nowrap gap-[30px] `}>
          <div className="flex flex-wrap w-full items-center justify-center  xl:justify-between  gap-8">
            <div
              className={`${style.bgDark} bg-white w-full sm:w-[370px] rounded-lg overflow-hidden flex flex-col`}
            >
              <div>
                <img
                  src={blogs}
                  alt="Meet AutoManage, the best AI management tools"
                  className={`w-full h-[220px] object-cover opacity-100 rounded-b-none rounded-t-[8px]`}
                />
              </div>
              <div className="flex flex-col px-[34px] py-[30px] items-center justify-center">
                <div
                  className={`${style.stroke} text-center text-lg heading-6 mg-dark cursor-pointer transition-all`}
                >
                  50+ Best creative website themes & templates
                </div>
                <p
                  className={`${style.stroke} w-full text-center pt-[14px] pb-[28px] primary-text-color body-medium-regular text-sm`}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <a
                  href="#"
                  className={`${style.buttonDark} px-[28px] py-[12px] rounded-[50px] primary-text-color border-solid border-[1px] hover:border-[#d37c26] hover:text-[#d37c26] transition-all`}
                >
                  View Details
                </a>
              </div>
            </div>

            <div
              className={`${style.bgDark} bg-white w-full sm:w-[370px] rounded-lg overflow-hidden flex flex-col `}
            >
              <div>
                <img
                  src={blogs}
                  alt="Meet AutoManage, the best AI management tools"
                  className={`w-full h-[220px] object-cover opacity-100 rounded-b-none rounded-t-[8px]`}
                />
              </div>
              <div className="flex flex-col px-[35px] py-[30px] items-center justify-center">
                <div
                  className={`${style.textDark} text-center text-lg heading-6 mg-dark cursor-pointer transition-all`}
                >
                  The ultimate UX and UI guide to card design
                </div>
                <p
                  className={`${style.stroke} w-full text-center pt-[14px] pb-[28px] primary-text-color body-medium-regular text-sm`}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <a
                  href="#"
                  className={`px-[28px] py-[12px] rounded-[50px] text-white bg-[#d37c26] border-solid border-[1px] hover:bg-white border-[#d37c26] hover:text-[#d37c26] transition-all`}
                >
                  View Details
                </a>
              </div>
            </div>

            <div
              className={`${style.bgDark} bg-white w-full sm:w-[370px] rounded-lg overflow-hidden flex flex-col`}
            >
              <div>
                <img
                  src={blogs}
                  alt="Meet AutoManage, the best AI management tools"
                  className={`w-full h-[220px] object-cover opacity-100 rounded-b-none rounded-t-[8px]`}
                />
              </div>
              <div className="flex flex-col px-[34px] py-[30px] items-center justify-center">
                <div
                  className={`${style.stroke} text-center text-lg heading-6 mg-dark cursor-pointer transition-all`}
                >
                  Creative Card Component designsgraphic elements
                </div>
                <p
                  className={`${style.stroke} w-full text-center pt-[14px] pb-[28px] primary-text-color body-medium-regular text-sm`}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <a
                  href="#"
                  className={`${style.buttonDark} px-[28px] py-[12px] rounded-[50px] primary-text-color border-solid border-[1px] hover:border-[#d37c26] hover:text-[#d37c26] transition-all`}
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto w-full flex items-center justify-center ">
          <a
            href="#"
            className="body-medium-regular  primary-color px-[20px] py-[12px] sm:py-[14px] sm:px-[28px] border-solid border-[1px] hover:bg-[#d37c26] transition hover:border-[#d37c26] hover:text-white rounded-[50px] text-center"
          >
            Bloglarımıza Göz Atın
          </a>
        </div>
      </div>
    </div>
  );
};

export default events;
