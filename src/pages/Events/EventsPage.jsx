// Third-party library imports
import { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Stylesheet imports
import style from './styles.module.scss';

// Other imports
import { useAppContext } from '../../context/AppContext';
import Pagination from '../../components/pagination/Pagination';
import formatDate from '../../utils/formatDate';
import eventTypeDetails from '../../utils/eventTypeDetails';

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
        `${apiUrl}/api/events?per_page=${pagination.per_page}&page=${page}`
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
    if (!loading && page > 0 && page <= pagination.last_page) {
      setPagination((prev) => ({ ...prev, current_page: page }));
    }
  };

  return (
    <HelmetProvider>
      <motion.div
        initial={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="events-page mx-auto max-w-7xl pt-6 md:pt-[50px] pb-10 px-8"
      >
        <Helmet>
          <title>Mirketgiller | Etkinliklerimiz</title>
          <meta
            name="description"
            content="Mirketgiller olarak üniversite öğrencilerine yönelik sektörel etkinlikler düzenleyerek, onların profesyonel dünyaya daha donanımlı adım atmalarını sağlıyoruz."
          />
          {/* Open Graph Meta Tags for Event */}
          <meta
            property="og:description"
            content="Mirketgiller olarak üniversite öğrencilerine yönelik sektörel etkinlikler düzenleyerek, onların profesyonel dünyaya daha donanımlı adım atmalarını sağlıyoruz."
          />
          <meta
            property="og:image"
            content="https://www.admin.mirketgiller.com.tr/storage/seo/etkinliklerimiz.jpg"
          />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Mirketgiller" />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Mirketgiller | Etkinliklerimiz" />
          <meta
            name="twitter:description"
            content="Mirketgiller olarak üniversite öğrencilerine yönelik sektörel etkinlikler düzenleyerek, onların profesyonel dünyaya daha donanımlı adım atmalarını sağlıyoruz."
          />
          <meta
            name="twitter:image"
            content="https://www.admin.mirketgiller.com.tr/storage/seo/etkinliklerimiz.jpg"
          />
          <meta name="twitter:url" content={window.location.href} />
          <meta name="twitter:creator" content="@mirketgiller" />
        </Helmet>
        <div className="events-page-header flex flex-col items-center gap-3 mb-12 md:mb-[60px]">
          <h1 className="text-heading-5 md:text-heading-3 primary-color text-center">
            Düzenlediğimiz Etkinlikler
          </h1>
          <p
            className={`primary-text-color ${style.textDark} text-body-sm-regular sm:text-body-md-regular text-center max-w-3xl`}
          >
            Sektörün önde gelen profesyonelleriyle gerçekleştirdiğimiz
            eğitimler, seminerler ve atölye çalışmalarıyla gelişiminizi
            destekliyoruz. Birlikte büyüyen yetenekler olarak, hedeflerinize
            ulaşmanız için buradayız!
          </p>
        </div>
        <div className="events-container flex flex-wrap w-full max-w-[370px] lg:max-w-[772px]  xl:max-w-[1174px] justify-start xl:justify-start gap-8 gap-y-11 ml-auto mr-auto">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ContentLoader
                  key={`loader-${index}`}
                  speed={2}
                  width={370}
                  height={344}
                  viewBox="0 0 370 344"
                  backgroundColor={`${
                    theme === 'light' ? '#f3f3f3' : '#1a1a1a'
                  }`}
                  foregroundColor={`${
                    theme === 'light' ? '#ecebeb' : '#202020'
                  }`}
                  title="Yükleniyor..."
                >
                  {/* Image */}
                  <rect x="0" y="0" rx="5" ry="5" width="370" height="220" />
                  {/* Date Area */}
                  <rect x="0" y="236" rx="5" ry="5" width="105" height="32" />
                  {/* Title */}
                  <rect x="0" y="284" rx="5" ry="5" width="370" height="25" />
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
                    <div className="event-image relative bg-[#f3f3f3] dark:bg-[#1a1a1a]">
                      <img
                        src={`${apiUrl}/storage/${event.event_paths[0]}`}
                        alt={event.title}
                        className={`${style.imageHover} w-full aspect-[370/220] min-h-40 h-auto sm:h-[220px] object-cover rounded-[5px] opacity-100`}
                      />
                      <span
                        className={`${
                          eventTypeDetails(event.event_type).bgColor
                        } text-white px-[8px] py-[2px] sm:px-[10px] sm:py-[4px] rounded-[6px] body-extra-small-text-medium absolute top-3 right-3`}
                      >
                        {eventTypeDetails(event.event_type).text}
                      </span>
                    </div>
                    <div className="event-date mt-4">
                      <div className="bg-[#d37c26] text-white px-[10px] py-[4px] sm:px-[15px] sm:py-[6px] rounded-[6px] body-extra-small-text-medium w-max">
                        {formatDate(event.published_at)}
                      </div>
                    </div>
                    <div className="event-texts flex flex-col gap-4 mt-4">
                      <h2
                        className={`${style.textDark} ${style.textHover} text-base screen-380:text-xl font-sans font-semibold sm:heading-6 mg-dark cursor-pointer transition-all min-h-[60px]`}
                      >
                        {truncateText(event.title, 50)}
                      </h2>
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
          isLoading={loading}
        />
      </motion.div>
    </HelmetProvider>
  );
}

export default EventsPage;
