// Third-party library imports
import { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import { Link45deg, Linkedin } from 'react-bootstrap-icons';
import ContentLoader from 'react-content-loader';

// Other imports
import { getTeamMember } from '../../services/teamMemberService';
import { useAppContext } from '../../context/AppContext';

// Stylesheet imports
import style from './styles.module.scss';

const Team = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [teamMemberData, setTeamMemberData] = useState([]);
  const [flippedCards, setFlippedCards] = useState({});
  const [activeDepartment, setActiveDepartment] = useState('yonetim-kurulu');
  const [loading, setLoading] = useState(true);
  const { theme } = useAppContext();
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleFlip = (id, isFlipped) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: isFlipped,
    }));
  };

  useEffect(() => {
    const fetchTeamMember = async () => {
      setLoading(true);
      try {
        const data = await getTeamMember(activeDepartment);
        setTeamMemberData(data);
      } catch (error) {
        console.error('Team Member yüklenemedi.');
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMember();
  }, [activeDepartment]);

  const renderSkeletons = () => {
    return Array.from({ length: 3 }).map((_, index) => (
      <ContentLoader
        key={`loader-${index}`}
        speed={2}
        width={270}
        height={330}
        viewBox="0 0 270 330"
        backgroundColor={`${theme === 'light' ? '#f3f3f3' : '#1a1a1a'}`}
        foregroundColor={`${theme === 'light' ? '#ecebeb' : '#202020'}`}
        title="Yükleniyor..."
      >
        <rect x="0" y="0" rx="8" ry="8" width="270" height="330" />
      </ContentLoader>
    ));
  };

  const renderTeamMembers = () => {
    return teamMemberData.map((member, index) => (
      <div
        key={index}
        onMouseEnter={() => handleFlip(index, true)}
        onMouseLeave={() => handleFlip(index, false)}
        className={`${style.flipCard} w-[270px] h-[330px]`}
      >
        <motion.div
          initial={{ opacity: 0, translateY: -30 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`${style.flipCardInner} w-[270px] h-[330px]`}
            initial={false}
            animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
            transition={{ duration: 0.1, animationDirection: 'normal' }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div
              className={`${style.flipCardFront} flex items-center justify-center relative gap-[30px]`}
            >
              <img
                src={`${apiUrl}/storage/${member.image}`}
                alt={`${member.name} ${member.surname}`}
                className="w-[270px] h-[330px] object-cover rounded-[8px]"
              />
              <div
                className={`${style.nameBoxDark} p-4 absolute bottom-4 flex flex-col items-center justify-center rounded-[8px] px-4 w-[230px]`}
              >
                <h3 className="primary-color body-medium-bold text-center">
                  {member.name} {member.surname}
                </h3>
                {member.mirketgiller_title && (
                  <p
                    className={`text-white body-extra-small-text-regular text-center`}
                  >
                    {member.mirketgiller_title}
                  </p>
                )}
              </div>
            </div>
            <div
              className={`${style.flipCardBack} w-[270px] h-[330px] px-5 flex flex-col items-center justify-end relative pb-5 gap-12 primary-color-bg rounded-[8px]`}
            >
              <div
                className={`${style.personSocialMedia} flex w-full flex-col gap-4`}
              >
                <a
                  href={`${member.linkedin}`}
                  target="_blank"
                  className="person-linkedin flex items-center justify-center gap-3 p-4 border border-white border-solid rounded-full text-white cursor-pointer hover:bg-white hover:text-primary-color"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-body-md-medium">Linkedin</span>
                </a>
                {member.other_link && (
                  <a
                    href={`${member.other_link}`}
                    target="_blank"
                    className="person-website flex items-center justify-center gap-3 p-4 border border-white border-solid rounded-full text-white cursor-pointer hover:bg-white hover:text-primary-color"
                  >
                    <Link45deg className="w-6 h-6" />
                    <span className="text-body-md-medium">Website</span>
                  </a>
                )}
              </div>
              <div
                className={`${style.nameBoxDark} p-4 bottom-4 flex flex-col items-center justify-center rounded-[8px] w-full text-center`}
              >
                <h3 className="primary-color body-medium-bold">
                  {member.name} {member.surname}
                </h3>
                {member.title && (
                  <p className="text-white body-extra-small-text-regular text-center">
                    {member.title}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    ));
  };

  return (
    <div className={`${style.sectionDark} py-16 md:py-[90px] h-auto`}>
      <div className="mx-auto max-w-7xl items-center justify-between px-8 flex flex-col">
        <div className="text-center mb-12 md:mb-[60px]">
          <h2 className="heading-5 md:text-heading-3 font-bold primary-color mb-3">
            Ekibimiz
          </h2>
          <p
            className={`${style.textDark} primary-text-color max-w-3xl mx-auto text-body-sm-regular sm:text-body-md-regular`}
          >
            Birlikte başarıya koşan ve ilham veren profesyonellerden oluşan
            dinamik bir ekip. Her bir üyemiz, topluluğumuzu daha ileriye taşımak
            için tutkuyla çalışıyor.
          </p>
        </div>

        <div
          className={`flex flex-wrap w-full lg:flex-nowrap items-center justify-center mb-[40px]`}
        >
          <div className="flex gap-4 flex-wrap items-center justify-center">
            <a
              onClick={() => setActiveDepartment('yonetim-kurulu')}
              className={`${
                activeDepartment === 'yonetim-kurulu' ? style.active : ''
              } ${style.buttonDark} ${
                style.buttonHover
              } px-[28px] py-[12px] rounded-[50px] primary-color hover:text-white hover:bg-[#d37c26] border-solid border-[1px] cursor-pointer transition-all text-body-sm-regular sm:text-body-md-regular`}
            >
              Yönetim Kurulu
            </a>
            <a
              onClick={() => setActiveDepartment('departman-baskani')}
              className={`${
                activeDepartment === 'departman-baskani' ? style.active : ''
              } ${style.buttonDark} ${
                style.buttonHover
              } px-[28px] py-[12px] rounded-[50px] primary-color hover:text-white hover:bg-[#d37c26] border-solid border cursor-pointer transition-all text-body-sm-regular sm:text-body-md-regular`}
            >
              Departman Başkanları
            </a>
            <a
              onClick={() => setActiveDepartment('genel-ekip-uyesi')}
              className={`${
                activeDepartment === 'genel-ekip-uyesi' ? style.active : ''
              } ${style.buttonDark} ${
                style.buttonHover
              } px-[28px] py-[12px] rounded-[50px] primary-color hover:text-white hover:bg-[#d37c26] border-solid border-[1px] cursor-pointer transition-all text-body-sm-regular sm:text-body-md-regular`}
            >
              Genel Ekip Üyeleri
            </a>
          </div>
        </div>

        <div className="w-full flex justify-center 3xl:justify-between items-center gap-[30px] flex-wrap">
          {loading ? (
            renderSkeletons()
          ) : (
            <Fragment>
              {activeDepartment === 'yonetim-kurulu' &&
                renderTeamMembers('yonetim-kurulu')}
              {activeDepartment === 'departman-baskani' &&
                renderTeamMembers('departman-baskani')}
              {activeDepartment === 'genel-ekip-uyesi' &&
                renderTeamMembers('genel-ekip-uyesi')}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
