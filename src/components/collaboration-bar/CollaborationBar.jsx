import React, { useRef } from 'react';
import style from './style.module.scss';

const brands = [
  {
    link: 'https://www.mirketgiller.com.tr/',
    name: 'Brand 1',
    logo: 'https://w7.pngwing.com/pngs/509/532/png-transparent-volkswagen-group-car-logo-volkswagen-car-logo-brand-emblem-trademark-volkswagen-thumbnail.png',
  },
  {
    link: 'https://www.mirketgiller.com.tr/',
    name: 'Brand 2',
    logo: 'https://e7.pngegg.com/pngimages/4/794/png-clipart-infiniti-g37-car-logo-nissan-car-angle-emblem.png',
  },
  {
    link: 'https://www.mirketgiller.com.tr/',
    name: 'Brand 3',
    logo: 'https://i.hizliresim.com/3nxl15x.png',
  },
];

const repeatedBrands = Array(40)
  .fill([...brands])
  .flat();

const CollaborationBar = () => {
  const scrollRef = useRef(null);

  const handleMouseEnter = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div
      className="w-full overflow-hidden flex items-center h-[10vh] bg-[#d37c26] p-6 gap-3 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={scrollRef}
        className={`${style['animate-scroll']} flex w-max animate-scroll gap-8 sm:gap-16`}
      >
        {repeatedBrands.concat(brands).map((brand, index) => (
          <div
            name={index}
            key={index}
            className="flex gap-16 sm:gap-5 justify-center items-center"
          >
            <a href={brand.link} target="_blank" rel="noopener noreferrer">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 object-contain w-auto"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationBar;
