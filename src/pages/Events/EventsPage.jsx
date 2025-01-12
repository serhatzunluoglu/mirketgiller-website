// Third-party library imports
import { useState, useEffect } from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import ContentLoader from 'react-content-loader';
import { motion } from 'framer-motion';

// Asset imports (images and SVGs)
import blogImage from '../../assets/images/blogImage.png';

// Stylesheet imports
import style from './styles.module.scss';

// Other imports
import { useAppContext } from '../../context/AppContext';

function formatDate(inputDate) {
  const date = new Date(inputDate);

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

function EventsPage() {
  const [eventsData, setEventsData] = useState([]);
  const [paginationData, setPaginationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch('https://admin.mirketgiller.com.tr/api/events')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEventsData(data.events);
        setPaginationData(data.pagination);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -30 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="events-page mx-auto max-w-7xl py-10 px-8"
    >
      <div className="events-page-header flex flex-col items-center gap-3 mb-[60px]">
        <h1 className="heading-3 primary-color text-center">
          Düzenlediğimiz Etkinlikler
        </h1>
        <p className="body-small-regular text-center max-w-3xl primary-text-color">
          Sektörün önde gelen profesyonelleriyle gerçekleştirdiğimiz eğitimler,
          seminerler ve atölye çalışmalarıyla gelişiminizi destekliyoruz.
          Birlikte büyüyen yetenekler olarak, hedeflerinize ulaşmanız için
          buradayız!
        </p>
      </div>
      <div className="events-container flex flex-wrap w-full justify-center xl:justify-between gap-8">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ContentLoader
                key={`loader-${index}`}
                speed={2}
                width={370}
                height={390}
                viewBox="0 0 370 390"
                backgroundColor={`${theme === 'light' ? '#f3f3f3' : '#242424'}`}
                foregroundColor={`${theme === 'light' ? '#ecebeb' : '#202020'}`}
              >
                {/* Image */}
                <rect x="0" y="0" rx="5" ry="5" width="370" height="220" />
                {/* Date Area */}
                <rect x="0" y="240" rx="5" ry="5" width="80" height="25" />
                {/* Title */}
                <rect x="0" y="275" rx="5" ry="5" width="300" height="25" />
                <rect x="0" y="310" rx="5" ry="5" width="300" height="25" />
                {/* Text */}
                <rect x="0" y="350" rx="5" ry="5" width="350" height="15" />
                <rect x="0" y="375" rx="5" ry="5" width="350" height="15" />
              </ContentLoader>
            ))
          : eventsData.map((event, index) => (
              <a href="#" key={`event-${index}`}>
                <div
                  className={`${style.cardHover} w-full sm:w-[370px] rounded-lg overflow-hidden flex flex-col gap-8`}
                >
                  <div>
                    <img
                      src={blogImage}
                      alt="Meet AutoManage, the best AI management tools"
                      className={`${style.imageHover} w-full h-[220px] object-cover rounded-[5px] opacity-100`}
                    />
                  </div>
                  <div>
                    <span className="bg-[#d37c26] text-white px-[15px] py-[6px] rounded-[5px] body-extra-small-text-medium">
                      {formatDate(event.published_at)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div
                      className={`${style.textDark} ${style.textHover} text-lg heading-6 mg-dark cursor-pointer transition-all min-h-[60px]`}
                    >
                      {truncateText(event.title, 50)}
                    </div>
                    <p
                      className={`${style.stroke} primary-text-color body-medium-regular text-sm`}
                    >
                      {truncateText(event.content, 65)}
                    </p>
                  </div>
                </div>
              </a>
            ))}
      </div>

      <div className="events-pagination flex justify-center gap-[3px] sm:gap-[7px] py-2 mt-[60px]">
        <div
          className={`${style.buttonBorder} rounded-full events-prev w-[35px] h-[35px] flex justify-center items-center leading-[15px] text-[16px]`}
        >
          <ArrowLeftIcon
            aria-hidden="true"
            className="h-[11px] w-[12px] leading-[15px] text-[16px]"
          />
        </div>
        <div
          className={`${style.buttonBorder} rounded-full w-[35px] h-[35px] flex justify-center items-center leading-[15px] text-[16px]`}
        >
          1
        </div>
        <div
          className={`${style.buttonBorder} rounded-full w-[35px] h-[35px] flex justify-center items-center leading-[15px] text-[16px]`}
        >
          2
        </div>
        <div
          className={`${style.buttonBorder} rounded-full w-[35px] h-[35px] flex justify-center items-center leading-[15px] text-[16px]`}
        >
          3
        </div>
        <div
          className={`${style.buttonBorder} rounded-full w-[35px] h-[35px] flex justify-center items-center leading-[15px] text-[16px]`}
        >
          4
        </div>
        <div
          className={`${style.buttonBorder} rounded-full w-[35px] h-[35px] flex justify-center items-center leading-[15px] text-[16px]`}
        >
          5
        </div>
        <div
          className={`${style.buttonBorder} rounded-full events-next w-[35px] h-[35px] flex justify-center items-center leading-[15px] text-[16px]`}
        >
          <ArrowRightIcon aria-hidden="true" className="h-[11px] w-[12px]" />
        </div>
      </div>
    </motion.div>
  );
}

export default EventsPage;
