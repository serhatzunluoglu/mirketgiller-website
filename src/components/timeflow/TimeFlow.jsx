// Stylesheet imports
import style from './style.module.scss';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const timeflowData = [
  {
    heading: 'Lorem Ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec molestie arcu. Nam egestas a enim a aliquam.',
  },
  {
    heading: 'Lorem Ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec molestie arcu. Nam egestas a enim a aliquam.',
  },
  {
    heading: 'Lorem Ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec molestie arcu Nam egestas a enim a aliquam.',
  },
  {
    heading: 'Lorem Ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec molestie arcu. Nam egestas a enim a aliquam.',
  },
  {
    heading: 'Lorem Ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec molestie arcu. Nam egestas a enim a aliquam.',
  },
];

function TimeFlow() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1020);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1020);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const largeScreenVariants = {
    hidden: (direction) => ({
      x: direction === 'right' ? '50vw' : '-50vw',
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        stiffness: 110,
        damping: 110,
        duration: 2,
      },
    },
  };

  const smallScreenVariants = {
    hidden: (direction) => ({
      x: direction === 'right' ? '50vw' : '-50vw',
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        stiffness: 110,
        damping: 110,
        duration: 2,
      },
    },
  };

  return (
    <div
      className={`mx-auto flex items-center flex-col bg-[#F9FAFB] justify-center px-8 py-16 md:py-[90px] ${style.timeflowBackground}`}
    >
      {timeflowData.map((item, index) => {
        // Sağ/sol pozisyonunu sıraya göre belirliyoruz
        const isRight = index % 2 === 0;

        return (
          <div
            key={index}
            className={`timeflow-container flex w-full lg:max-w-[75%] xl:w-[65%] flex-col ${
              isRight
                ? 'items-center justify-center lg:items-end lg:justify-end'
                : 'items-center justify-center lg:items-start lg:justify-start'
            }`}
          >
            <motion.div
              custom={isSmallScreen ? 'right' : isRight ? 'right' : 'left'}
              initial="hidden"
              animate="visible"
              variants={
                isSmallScreen ? smallScreenVariants : largeScreenVariants
              }
              className={`timeflow-item-container w-full gap-8 sm:gap-16 sm:w-[75%] lg:w-[calc(50%+8px)] flex justify-between ${
                !isRight ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="span-container flex flex-col items-center">
                <div
                  className={`span-circle ${style.circleSize} primary-color-bg rounded-full`}
                ></div>
                <div
                  className={`span-line w-1 h-full ${style.strokeColorBg}`}
                ></div>
              </div>
              <div className="content-container w-[360px]">
                <h1
                  className={`heading-6 primary-color ${
                    !isRight ? 'text-left lg:text-right' : ''
                  } w-full text-wrap`}
                >
                  {item.heading}
                </h1>
                <p
                  className={`body-small-regular primary-color ${
                    !isRight ? 'text-left lg:text-right' : ''
                  } w-full text-wrap`}
                >
                  {item.content}
                </p>
                <div className="w-full h-[60px]"></div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default TimeFlow;
