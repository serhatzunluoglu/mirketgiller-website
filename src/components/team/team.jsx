import style from './styles.module.scss';
import coriss from '../../assets/images/img/img.png';
import glorius from '../../assets/images/img/glorius.png';
import glorius2 from '../../assets/images/img/glorius2.png';
import nikolas from '../../assets/images/img/nikolas.png';
import { useState } from 'react';

const team = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeButton, setActiveButton] = useState(1);
  
  return (
    <div
      id="teamSection"
      className={`${style.sectionDark} py-[90px] bg-[#F9FAFB] h-auto `}
    >
      {/* starting here */}
      <div className="mx-auto max-w-7xl items-center justify-between  px-8 flex flex-col">
        {/* team start */}
        <div className="text-center mb-[60px]">
          <h2 className="text-3xl font-bold primary-color mb-3 heading-3">
            Ekibimiz
          </h2>
          <p
            className={`${style.textDark} primary-text-color max-w-3xl mx-auto body-medium-regular`}
          >
            Birlikte başarıya koşan ve ilham veren profesyonellerden oluşan
            dinamik bir ekip. Her bir üyemiz, topluluğumuzu daha ileriye taşımak
            için tutkuyla çalışıyor.
          </p>
        </div>

        {/* button area start */}
        <div
          className={`flex flex-wrap w-full lg:flex-nowrap  items-center justify-center mb-[40px]`}
        >
          <div className="flex gap-4 flex-wrap items-center justify-center">
            <a
              onClick={() => setActiveButton(1)}
              href="#teamSection"
              className={`${activeButton === 1 ? style.active : style.inactive} ${style.buttonDark} px-[28px] py-[12px] rounded-[50px] primary-color border-solid border-[1px] hover:text-white hover:bg-[#d37c26] transition-all`}
            >
              Yönetim Kurulu
            </a>
            <a
              onClick={() => setActiveButton(2)}
              href="#teamSection"
              className={`${activeButton === 2 ? style.active : style.inactive} ${style.buttonDark} px-[28px] py-[12px] rounded-[50px] primary-color border-solid border-[1px] hover:text-white hover:bg-[#d37c26] transition-all`}
            >
              Departman Başkanları
            </a>
            <a
              onClick={() => setActiveButton(3)}
              href="#teamSection"
              className={`${activeButton === 3 ? style.active : style.inactive} ${style.buttonDark} px-[28px] py-[12px] rounded-[50px] primary-color border-solid border-[1px] hover:text-white hover:bg-[#d37c26] transition-all`}
            >
              Genel Ekip Üyeleri
            </a>
          </div>
        </div>

        {/* image area */}
        <div className="w-full flex justify-center 3xl:justify-between items-center gap-[30px] flex-wrap">
          {activeButton === 1 && (
            <>
              <div className="flex items-center justify-center relative ">
                <img
                  src={coriss}
                  className="w-[270px] h-[330px] object-cover rounded-[8px]"
                />
                <div
                  className={`${style.nameBoxDark} p-4 absolute bottom-4 flex flex-col items-center justify-center rounded-[8px] bg-white w-auto px-[56px]`}
                >
                  <h3 className="primary-color body-medium-bold">
                    Coriss Ambady
                  </h3>
                  <p className="primary-text-color body-extra-small-text-regular">
                    Web Developer
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[30px] relative ">
                <img
                  src={glorius}
                  className="w-[270px] h-[330px] object-cover rounded-[8px]"
                />
                <div
                  className={`${style.nameBoxDark} p-4 absolute bottom-4 flex flex-col items-center justify-center rounded-[8px] bg-white w-auto px-[56px]`}
                >
                  <h3 className="primary-color body-medium-bold">
                    glorius Cristian
                  </h3>
                  <p className="primary-text-color body-extra-small-text-regular">
                    App Developer
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[30px] relative ">
                <img
                  src={glorius2}
                  className="w-[270px] h-[330px] object-cover rounded-[8px]"
                />
                <div
                  className={`${style.nameBoxDark} p-4 absolute bottom-4 flex flex-col items-center justify-center rounded-[8px] bg-white w-auto px-[56px]`}
                >
                  <h3 className="primary-color body-medium-bold">
                    Glorius Cristian
                  </h3>
                  <p className="primary-text-color body-extra-small-text-regular">
                    Ui / Ux Designer
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[30px] relative ">
                <img
                  src={nikolas}
                  className="w-[270px] h-[330px] object-cover rounded-[8px]"
                />
                <div
                  className={`${style.nameBoxDark} p-4 absolute bottom-4 flex flex-col items-center justify-center rounded-[8px] bg-white w-auto px-[56px]`}
                >
                  <h3 className="primary-color body-medium-bold">
                    Nikolas Brooten
                  </h3>
                  <p className="primary-text-color body-extra-small-text-regular">
                    Sales Manager
                  </p>
                </div>
              </div>
            </>
          )}

          {activeButton === 2 && (
            <>
              <div className="flex items-center justify-center gap-[30px] relative ">
                <img
                  src={glorius2}
                  className="w-[270px] h-[330px] object-cover rounded-[8px]"
                />
                <div
                  className={`${style.nameBoxDark} p-4 absolute bottom-4 flex flex-col items-center justify-center rounded-[8px] bg-white w-auto px-[56px]`}
                >
                  <h3 className="primary-color body-medium-bold">
                    Glorius Cristian
                  </h3>
                  <p className="primary-text-color body-extra-small-text-regular">
                    Ui / Ux Designer
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[30px] relative ">
                <img
                  src={nikolas}
                  className="w-[270px] h-[330px] object-cover rounded-[8px]"
                />
                <div
                  className={`${style.nameBoxDark} p-4 absolute bottom-4 flex flex-col items-center justify-center rounded-[8px] bg-white w-auto px-[56px]`}
                >
                  <h3 className="primary-color body-medium-bold">
                    Nikolas Brooten
                  </h3>
                  <p className="primary-text-color body-extra-small-text-regular">
                    Sales Manager
                  </p>
                </div>
              </div>
            </>
          )}

          {activeButton === 3 && (
            <>
              <div className="flex items-center justify-center relative ">
                <img
                  src={coriss}
                  className="w-[270px] h-[330px] object-cover rounded-[8px]"
                />
                <div
                  className={`${style.nameBoxDark} p-4 absolute bottom-4 flex flex-col items-center justify-center rounded-[8px] bg-white w-auto px-[56px]`}
                >
                  <h3 className="primary-color body-medium-bold">
                    Coriss Ambady
                  </h3>
                  <p className="primary-text-color body-extra-small-text-regular">
                    Web Developer
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[30px] relative ">
                <img
                  src={glorius}
                  className="w-[270px] h-[330px] object-cover rounded-[8px]"
                />
                <div
                  className={`${style.nameBoxDark} p-4 absolute bottom-4 flex flex-col items-center justify-center rounded-[8px] bg-white w-auto px-[56px]`}
                >
                  <h3 className="primary-color body-medium-bold">
                    glorius Cristian
                  </h3>
                  <p className="primary-text-color body-extra-small-text-regular">
                    App Developer
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[30px] relative ">
                <img
                  src={glorius2}
                  className="w-[270px] h-[330px] object-cover rounded-[8px]"
                />
                <div
                  className={`${style.nameBoxDark} p-4 absolute bottom-4 flex flex-col items-center justify-center rounded-[8px] bg-white w-auto px-[56px]`}
                >
                  <h3 className="primary-color body-medium-bold">
                    Glorius Cristian
                  </h3>
                  <p className="primary-text-color body-extra-small-text-regular">
                    Ui / Ux Designer
                  </p>
                </div>
              </div>
              
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default team;
