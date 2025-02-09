// Third-party library imports
import { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Stylesheet imports
import style from './styles.module.scss';

// Other imports
import { useAppContext } from '../../context/AppContext';
import Pagination from '../../components/pagination/Pagination';

function formatDate(inputDate) {
  const date = new Date(inputDate);

  return date.toLocaleDateString('tr-TR', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

function getBackgroundColor(eventType) {
  switch (eventType) {
    case 'ideathon':
      return 'bg-[#ff6347]';
    case 'meetup':
      return 'bg-[#007bff]';
    case 'hackathon':
      return 'bg-[#28a745]';
    case 'Webinar':
      return 'bg-[#6f42c1]';
    default:
      return 'bg-[#d37c26]';
  }
}

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

function EventsPage() {
  const { theme } = useAppContext();
  const apiUrl = import.meta.env.VITE_API_URL;

  const [events, setEvents] = useState([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 6,
    total: 0,
    from: 0,
    to: 0,
  });
  const [loading, setLoading] = useState(false);

  const fetchEvents = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://admin.mirketgiller.com.tr/api/events?per_page=${pagination.per_page}&page=${page}`
      );
      const data = response.data;

      setEvents(data.events);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Etkinlikler yüklenirken hata oluştu:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(pagination.current_page);
  }, [pagination.current_page]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= pagination.last_page) {
      setPagination((prev) => ({ ...prev, current_page: page }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -30 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="events-page mx-auto max-w-7xl pt-6 md:pt-[50px] pb-10 px-8"
    >
      <div className="events-page-header flex flex-col items-center gap-3 mb-12 md:mb-[60px]">
        <h1 className="text-heading-5 md:text-heading-3 primary-color text-center">
          Düzenlediğimiz Etkinlikler
        </h1>
        <p
          className={`primary-text-color ${style.textDark} text-body-sm-regular sm:text-body-md-regular text-center max-w-3xl`}
        >
          Sektörün önde gelen profesyonelleriyle gerçekleştirdiğimiz eğitimler,
          seminerler ve atölye çalışmalarıyla gelişiminizi destekliyoruz.
          Birlikte büyüyen yetenekler olarak, hedeflerinize ulaşmanız için
          buradayız!
        </p>
      </div>
      <div className="events-container flex flex-wrap w-full max-w-[370px] lg:max-w-[772px]  xl:max-w-[1174px] justify-start xl:justify-start gap-8 gap-y-11 ml-auto mr-auto">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ContentLoader
                key={`loader-${index}`}
                speed={2}
                width={370}
                height={352}
                viewBox="0 0 370 352"
                backgroundColor={`${theme === 'light' ? '#f3f3f3' : '#1A1A1A'}`}
                foregroundColor={`${theme === 'light' ? '#ecebeb' : '#202020'}`}
                title="Yükleniyor..."
              >
                {/* Image */}
                <rect x="0" y="0" rx="5" ry="5" width="370" height="220" />
                {/* Date Area */}
                <rect x="0" y="236" rx="5" ry="5" width="105" height="32" />
                {/* Title */}
                <rect x="0" y="292" rx="5" ry="5" width="370" height="25" />
                <rect x="0" y="327" rx="5" ry="5" width="300" height="25" />
              </ContentLoader>
            ))
          : events.map((event, index) => (
              <Link
                className="event-link-container"
                to={`${event.slug}`}
                key={`event-${index}`}
              >
                <article
                  className={`event ${style.cardHover} w-full sm:w-[370px] rounded-lg overflow-hidden flex flex-col`}
                >
                  <div className="event-image relative bg-pink-600 dark:bg-pink-600">
                    <img
                      src={`${apiUrl}/storage/${event.event_paths[0]}`}
                      alt="Meet AutoManage, the best AI management tools"
                      className={`${style.imageHover} w-full aspect-[370/220] min-h-40 h-auto sm:h-[220px] object-cover rounded-[5px] opacity-100`}
                    />
                    <span
                      className={`${getBackgroundColor(
                        event.event_type
                      )} text-white px-[8px] py-[2px] sm:px-[10px] sm:py-[4px] rounded-[5px] body-extra-small-text-medium absolute top-2 right-2`}
                    >
                      {event.event_type}
                    </span>
                  </div>
                  <div className="event-date mt-4">
                    <div className="bg-[#d37c26] text-white px-[10px] py-[4px] sm:px-[15px] sm:py-[6px] rounded-[5px] body-extra-small-text-medium w-max">
                      {formatDate(event.published_at)}
                    </div>
                  </div>
                  <div className="event-texts flex flex-col gap-4 mt-6">
                    <div
                      className={`${style.textDark} ${style.textHover} text-base screen-380:text-xl font-sans font-semibold sm:heading- mg-dark cursor-pointer transition-all min-h-[60px]`}
                    >
                      {truncateText(event.title, 50)}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
      </div>
      {/* Pagination */}
      <Pagination
        currentPage={pagination.current_page}
        totalPages={pagination.last_page}
        onPageChange={handlePageChange}
        from={pagination.from}
        to={pagination.to}
        total={pagination.total}
      />
    </motion.div>
  );
}

export default EventsPage;
