import style from './styles.module.scss';
import { useState } from 'react';

const Team = () => {
  const [activeButton, setActiveButton] = useState(1);

  const teamData = [
    {
      id: 1,
      name: 'Coriss Ambady',
      role: 'Web Developer',
      image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/maturewoman-2-512.png',
      category: 'management',
    },
    {
      id: 2,
      name: 'Glorius Cristian',
      role: 'App Developer',
      image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/boy-2-512.png',
      category: 'management',
    },
    {
      id: 3,
      name: 'Glorius Cristian',
      role: 'UI/UX Designer',
      image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman2-2-512.png',
      category: 'department_heads',
    },
    {
      id: 4,
      name: 'Nikolas Brooten',
      role: 'Sales Manager',
      image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/supportfemale-2-512.png',
      category: 'general_members',
    },
    {
      id: 5,
      name: 'Glorius Cristian',
      role: 'App Developer',
      image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/supportmale-2-256.png',
      category: 'department_heads',
    },
    {
      id: 6,
      name: 'Glorius Cristian',
      role: 'App Developer',
      image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/boy-2-512.png',
      category: 'general_members',
    },
    {
      id: 7,
      name: 'Glorius Cristian',
      role: 'App Developer',
      image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-512.png',
      category: 'department_heads',
    },
    {
      id: 8,
      name: 'Glorius Cristian',
      role: 'IOS Developer',
      image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/boy-2-512.png',
      category: 'management',
    },
  ];

  const renderTeamMembers = (category) => {
    return teamData
      .filter((member) => member.category === category)
      .map((member) => (
        <div
          key={member.id}
          className="flex items-center justify-center relative gap-[30px]"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-[270px] h-[330px] object-cover rounded-[8px]"
          />
          <div
            className={`${style.nameBoxDark} p-4 absolute bottom-4 flex flex-col items-center justify-center rounded-[8px] bg-white w-auto px-[56px]`}
          >
            <h3 className="primary-color body-medium-bold">{member.name}</h3>
            <p className="primary-text-color body-extra-small-text-regular">
              {member.role}
            </p>
          </div>
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
              onClick={() => setActiveButton(1)}
              className={`${activeButton === 1 ? style.active : ''} ${
                style.buttonDark
              } ${
                style.buttonHover
              } px-[28px] py-[12px] rounded-[50px] primary-color hover:text-white hover:bg-[#d37c26] border-solid border-[1px] cursor-pointer transition-all text-body-sm-regular sm:text-body-md-regular`}
            >
              Yönetim Kurulu
            </a>
            <a
              onClick={() => setActiveButton(2)}
              className={`${activeButton === 2 ? style.active : ''} ${
                style.buttonDark
              } ${
                style.buttonHover
              } px-[28px] py-[12px] rounded-[50px] primary-color hover:text-white hover:bg-[#d37c26] border-solid border cursor-pointer transition-all text-body-sm-regular sm:text-body-md-regular`}
            >
              Departman Başkanları
            </a>
            <a
              onClick={() => setActiveButton(3)}
              className={`${activeButton === 3 ? style.active : ''} ${
                style.buttonDark
              } ${
                style.buttonHover
              } px-[28px] py-[12px] rounded-[50px] primary-color hover:text-white hover:bg-[#d37c26] border-solid border-[1px] cursor-pointer transition-all text-body-sm-regular sm:text-body-md-regular`}
            >
              Genel Ekip Üyeleri
            </a>
          </div>
        </div>

        <div className="w-full flex justify-center 3xl:justify-between items-center gap-[30px] flex-wrap">
          {activeButton === 1 && renderTeamMembers('management')}
          {activeButton === 2 && renderTeamMembers('department_heads')}
          {activeButton === 3 && renderTeamMembers('general_members')}
        </div>
      </div>
    </div>
  );
};

export default Team;
