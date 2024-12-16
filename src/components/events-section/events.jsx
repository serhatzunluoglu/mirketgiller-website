import style from './styles.module.scss';
import blogImage from '../../assets/images/blogImage.png';

const events = () => {
  return (
    <div className={`${style.bgDark} py-[90px] bg-white h-auto `}>
      <div className="mx-auto flex max-w-7xl items-center justify-between  px-8 flex flex-col gap-[60px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold primary-color mb-2 heading-3">
            Etkinliklerimiz
          </h2>
          <p
            className={`${style.textDark} primary-text-color max-w-3xl mx-auto body-medium-regular`}
          >
            Sektörün önde gelen profesyonelleriyle gerçekleştirdiğimiz
            eğitimler, seminerler ve atölye çalışmalarıyla gelişiminizi
            destekliyoruz. Birlikte büyüyen yetenekler olarak, hedeflerinize
            ulaşmanız için buradayız!
          </p>
        </div>

        {/* Cards */}
        <div
          className={`${style.bgDark} flex flex-wrap lg:flex-nowrap gap-[30px]`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* İlk Blog Kartı */}
            <div className="w-full rounded-lg overflow-hidden flex flex-col gap-8">
              <img
                src={blogImage}
                alt="Meet AutoManage, the best AI management tools"
                className="w-full h-[220px] object-cover rounded-[5px]"
              />
              <div>
                <span className="bg-[#d37c26] text-white px-[15px] py-[6px] rounded-[5px] body-extra-small-text-medium">
                  Dec 22, 2023
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className={`${style.textDark} text-lg heading-6 mg-dark`}>
                  Meet AutoManage, the best AI management tools
                </h3>
                <p
                  className={`${style.stroke} primary-text-color body-medium-regular text-sm`}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            {/* İkinci Blog Kartı */}
            <div className="w-full rounded-lg overflow-hidden flex flex-col gap-8">
              <img
                src={blogImage}
                alt="Meet AutoManage, the best AI management tools"
                className="w-full h-[220px] object-cover rounded-[5px]"
              />
              <div>
                <span className="bg-[#d37c26] text-white px-[15px] py-[6px] rounded-[5px] body-extra-small-text-medium">
                  Dec 22, 2023
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className={`${style.textDark} text-lg heading-6 mg-dark`}>
                  Meet AutoManage, the best AI management tools
                </h3>
                <p
                  className={`${style.stroke} primary-text-color body-medium-regular text-sm`}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            {/* Üçüncü Blog Kartı */}
            <div className="w-full rounded-lg overflow-hidden flex flex-col gap-8 md:justify-self-center">
              <img
                src={blogImage}
                alt="Meet AutoManage, the best AI management tools"
                className="w-full h-[220px] object-cover rounded-[5px]"
              />
              <div>
                <span className="bg-[#d37c26] text-white px-[15px] py-[6px] rounded-[5px] body-extra-small-text-medium">
                  Dec 22, 2023
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className={`${style.textDark} text-lg heading-6 mg-dark`}>
                  Meet AutoManage, the best AI management tools
                </h3>
                <p
                  className={`${style.stroke} primary-text-color body-medium-regular text-sm`}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="h-auto w-full flex items-center justify-center ">
          <a
            href="#"
            className="primary-color px-[28px] py-[13px] rounded-full border-solid border-[1px] hover:bg-[#d37c26] transition hover:border-[#d37c26] hover:text-white rounded-[50px] text-center"
          >
            Düzenlediğimiz Etkinliklere Göz Atın
          </a>
        </div>
      </div>
    </div>
  );
};

export default events;
