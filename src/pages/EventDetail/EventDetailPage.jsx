// Third-party library imports
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { ClockFill, GeoFill } from 'react-bootstrap-icons';
import ContentLoader from 'react-content-loader';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

// Stylesheet imports
import style from './style.module.scss';

function EventDetailPage() {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
    <motion.div
      initial={{ opacity: 0, translateY: -30 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="event-detail-container mx-auto max-w-7xl py-[50px] px-8"
    >
      {loading ? (
        isMobile ? (
          // Mobil için küçük bir loader
          <ContentLoader
            speed={2}
            width="100%"
            height={1034}
            viewBox="0 0 750 1034"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
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
          // Masaüstü için büyük bir loader
          <ContentLoader
            speed={2}
            width="100%"
            height={812}
            viewBox="0 0 1280 812"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
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
          <h1 className="text-heading-5 md:text-heading-3 primary-color mb-12 md:mb-[60px] max-w-[792px]">
            {event.title}
          </h1>
          <div className="event-detail flex flex-col md:flex-row gap-12 md:gap-7 mb-16 md:mb-[76px]">
            <div className="event-left w-full md:w-8/12">
              <div className="event-image mb-12 md:mb-[60px]">
                <img
                  src={`${apiUrl}/storage/${event.event_paths[0]}`}
                  alt={event.title}
                  className="w-full rounded-lg max-h-[458px]"
                />
              </div>
              <div
                className={`${style.darkThemeWhiteText} event-text text-body-md-regular mt-6`}
              >
                {event.content}
              </div>
            </div>
            <div className="event-left w-full md:w-4/12">
              <div
                className={`event-info ${style.eventInfoBorder} rounded-lg p-6 flex flex-col gap-12`}
              >
                <div className="event-date">
                  <ClockFill
                    aria-hidden="true"
                    className="h-5 w-5 primary-color mb-2"
                  />
                  <p className={`event-time primary-color`}>
                    {event.published_at}
                  </p>
                  <p className={`event-hour primary-color`}>
                    {event.published_at}
                  </p>
                </div>
                <div className="event-location">
                  <GeoFill
                    aria-hidden="true"
                    className="h-5 w-5 primary-color mb-2"
                  />
                  <p
                    className={`event-location primary-color text-body-md-semibold`}
                  >
                    {/* {event.location} */}
                    Avcılar İnovasyon Merkezi
                  </p>
                </div>
              </div>
              {event.event_paths.length > 1 && (
                <div className="event-photos flex flex-col gap-6 mt-12 md:mt-[60px]">
                  <h5 className="text-heading-5 primary-color">
                    Etkinlikten Kareler
                  </h5>
                  {event.event_paths.slice(1).map((path, index) => (
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
              )}
            </div>
          </div>
        </Fragment>
      )}
    </motion.div>
  );
}

export default EventDetailPage;
