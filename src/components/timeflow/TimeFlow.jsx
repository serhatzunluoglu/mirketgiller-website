// Stylesheet imports
import style from './style.module.scss';

// Third-party library imports
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

// Other imports
import { getTimeflows } from '../../services/timeFlowService';
import formatEventDate from '../../utils/formatEventDate';

function TimeFlow() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1020);
  const [timeflows, setTimeflows] = useState([]);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const isFromHome = window.location.hash === '#ekibimiz';

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1020);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchTimeflows = async () => {
      setLoading(true);
      try {
        const data = await getTimeflows();
        setTimeflows(data);
      } catch (error) {
        console.error('Timeflow yüklenemedi.');
      } finally {
        setLoading(false);
      }
    };

    fetchTimeflows();
  }, []);

  const largeScreenVariants = {
    hidden: { y: '-50vh', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        stiffness: 110,
        damping: 110,
        duration: 1.4,
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
      transition: { type: 'tween', stiffness: 110, damping: 110, duration: 2 },
    },
  };

  return (
    <div
      ref={sectionRef}
      className={`mx-auto flex items-center flex-col bg-[#F9FAFB] justify-center px-8 py-16 md:py-[90px] overflow-hidden ${style.timeflowBackground} min-h-[420vh]`}
    >
      {loading ? (
        <></>
      ) : (
        <>
          {timeflows.map((item, index) => {
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
                  initial={isFromHome ? 'visible' : 'hidden'}
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={
                    isSmallScreen ? smallScreenVariants : largeScreenVariants
                  }
                  className={`timeflow-item-container w-full gap-8 sm:gap-16 sm:w-[75%] lg:w-[calc(50%+8px)] flex justify-between overflow-y-hidden ${
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
                  <div
                    className={`${style.contentContainer} w-[360px] flex flex-col gap-1`}
                  >
                    <div
                      className={`primary-color text-body-sm-medium ${
                        !isRight ? 'text-left lg:text-right' : ''
                      }`}
                    >
                      {formatEventDate(item.time)}
                    </div>
                    <h4
                      className={`heading-6 primary-color ${
                        !isRight ? 'text-left lg:text-right' : ''
                      } w-full text-wrap`}
                    >
                      {item.heading}
                    </h4>
                    <p
                      className={`body-small-regular primary-text-color ${
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
        </>
      )}
    </div>
  );
}

export default TimeFlow;
