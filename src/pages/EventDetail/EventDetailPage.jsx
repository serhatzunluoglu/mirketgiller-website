// Third-party library imports
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { ClockFill, GeoFill } from 'react-bootstrap-icons';
import ContentLoader from 'react-content-loader';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Stylesheet imports
import style from './style.module.scss';

// Other imports
import { useAppContext } from '../../context/AppContext';
import formatEventDate from '../../utils/formatEventDate';
import ShareEvent from '../../components/share-events/ShareEvents';

function EventDetailPage() {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { theme } = useAppContext();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/events/${slug}`);
        console.log(response);
        setEvent(response.data.post);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          navigate('/404');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [slug]);

  return (
    <HelmetProvider>
      <motion.div
        initial={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="event-detail-container mx-auto max-w-7xl py-[50px] px-8"
      >
        {loading ? (
          isMobile ? (
            <ContentLoader
              speed={2}
              width="100%"
              height={1034}
              viewBox="0 0 750 1034"
              backgroundColor={`${theme === 'light' ? '#f3f3f3' : '#1A1A1A'}`}
              foregroundColor={`${theme === 'light' ? '#ecebeb' : '#202020'}`}
              title="Yükleniyor..."
              style={{
                maxWidth: '100%',
                height: 'auto',
                alignSelf: 'flex-start',
              }}
            >
              {/* Başlık */}
              <rect x="0" y="0" rx="4" ry="4" width="750" height="40" />
              <rect x="0" y="50" rx="4" ry="4" width="750" height="40" />

              {/* Resim Alanı */}
              <rect x="0" y="138" rx="8" ry="8" width="750" height="400" />

              {/* Açıklama */}
              <rect x="0" y="586" rx="5" ry="5" width="750" height="24" />
              <rect x="0" y="620" rx="5" ry="5" width="750" height="24" />
              <rect x="0" y="654" rx="5" ry="5" width="550" height="24" />

              {/* Bilgi Kartı */}
              <rect x="0" y="700" rx="8" ry="8" width="750" height="260" />

              {/* Buton */}
              <rect x="0" y="984" rx="8" ry="8" width="750" height="50" />
            </ContentLoader>
          ) : (
            <ContentLoader
              speed={2}
              width="100%"
              height={812}
              viewBox="0 0 1280 812"
              backgroundColor={`${theme === 'light' ? '#f3f3f3' : '#1A1A1A'}`}
              foregroundColor={`${theme === 'light' ? '#ecebeb' : '#202020'}`}
              title="Yükleniyor..."
            >
              {/* Title */}
              <rect x="0" y="0" rx="5" ry="5" width="600" height="40" />
              <rect x="0" y="50" rx="5" ry="5" width="600" height="40" />

              {/* Image Area */}
              <rect x="0" y="150" rx="10" ry="10" width="792" height="458" />

              {/* Information Card */}
              <rect x="822" y="150" rx="10" ry="10" width="396" height="210" />

              {/* Share Button */}
              <rect x="822" y="400" rx="10" ry="10" width="396" height="50" />

              {/* Description */}
              <rect x="0" y="668" rx="5" ry="5" width="792" height="24" />
              <rect x="0" y="702" rx="5" ry="5" width="792" height="24" />
              <rect x="0" y="736" rx="5" ry="5" width="792" height="24" />
              <rect x="0" y="770" rx="5" ry="5" width="600" height="24" />
            </ContentLoader>
          )
        ) : (
          <Fragment>
            <Helmet>
              <title>Mirketgiller | {event.title}</title>
              <meta name="description" content={event.content} />
              {/* Open Graph Meta Tags for Event */}
              <meta property="og:title" content={event.title} />
              <meta property="og:description" content={event.excerpt} />
              <meta
                property="og:image"
                content={`${apiUrl}/storage/${event.event_paths[0]}`}
              />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:type" content="event" />
              <meta property="og:site_name" content="Mirketgiller" />
              <meta property="og:event:location" content={event.address} />
              {/* Twitter Card Meta Tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={event.title} />
              <meta name="twitter:description" content={event.content} />
              <meta
                name="twitter:image"
                content={`${apiUrl}/storage/${event.event_paths[0]}`}
              />
              <meta name="twitter:url" content={window.location.href} />
              <meta name="twitter:creator" content="@mirketgiller" />
              {/* Pinterest, WhatsApp, and other platforms */}
              <meta
                property="og:image"
                content={`${apiUrl}/storage/${event.event_paths[0]}`}
              />
            </Helmet>

            <h1 className="text-heading-5 md:text-heading-3 primary-color mb-12 md:mb-[60px] max-w-[792px]">
              {event.title}
            </h1>
            <div className="event-detail flex flex-col md:flex-row gap-12 md:gap-7 mb-16 md:mb-[76px]">
              <div className="event-left w-full md:w-8/12">
                <div className="event-image mb-12 md:mb-[60px]">
                  <Swiper
                    className={style.swiperSlide}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    rewind={true}
                    navigation
                    pagination={{ clickable: true }}
                  >
                    {event.event_paths.map((eventImg, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <img
                            src={`${apiUrl}/storage/${eventImg}`}
                            alt={event.title}
                            className="w-full rounded-lg max-h-[458px]"
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                <div
                  className={`${style.darkThemeWhiteText} event-text text-body-md-regular mt-6`}
                >
                  {event.content}
                </div>
              </div>
              <div className="event-right w-full md:w-4/12">
                <div
                  className={`event-info ${style.eventInfoBorder} rounded-lg p-6 flex flex-col gap-12`}
                >
                  <div className="event-date">
                    <div className="primary-color text-body-md-semibold">
                      <ClockFill aria-hidden="true" className="h-5 w-5 mb-2" />
                      <span>{formatEventDate(event.published_at)}</span>
                    </div>
                    {event.start_time && event.end_time && (
                      <span className="event-time text-body-md-regular primary-text-color">
                        {event.start_time
                          .split(':')
                          .slice(0, 2)
                          .join(':')
                          .replace(':', '.')}{' '}
                        -{' '}
                        {event.end_time
                          .split(':')
                          .slice(0, 2)
                          .join(':')
                          .replace(':', '.')}
                      </span>
                    )}
                  </div>
                  {event.address && (
                    <div className="event-location">
                      <GeoFill
                        aria-hidden="true"
                        className="h-5 w-5 primary-color mb-2"
                      />
                      <p
                        className={`event-location primary-color text-body-md-semibold`}
                      >
                        {event.address && event.address}
                      </p>
                    </div>
                  )}
                </div>
                <ShareEvent
                  eventSlug={event.slug}
                  eventImage={event.event_paths[0]}
                  eventTitle={event.title}
                />
                {/* {event.event_paths.length > 1 && (
                  <div className="event-photos flex flex-col gap-6 mt-12 md:mt-[60px]">
                    <h5 className="text-heading-5 primary-color">
                      Etkinlikten Kareler
                    </h5>
                    {event.event_paths?.slice(1).map((path, index) => (
                      <img
                        key={index}
                        src={`${apiUrl}/storage/${path}`}
                        alt={`Etkinlik Fotoğrafı ${index + 1}`}
                      />
                    ))}
                    <div className="photos-browse-button text-body-md-medium bg-[#d37c26] hover:bg-[#eb9035] py-[13px] text-center text-white rounded-full cursor-pointer">
                      Fotoğraflara Göz At 👀
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </Fragment>
        )}
      </motion.div>
    </HelmetProvider>
  );
}

export default EventDetailPage;
