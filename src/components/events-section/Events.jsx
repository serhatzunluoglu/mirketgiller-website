import style from './styles.module.scss';
import ContentLoader from 'react-content-loader';
import { Link } from 'react-router-dom';
import { getEvents } from '../../services/eventsService';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import formatDate from '../../utils/formatDate';
import eventTypeBgColor from '../../utils/eventTypeBgColor';

const Events = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const { theme } = useAppContext();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchTeamMember = async () => {
      setLoading(true);
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error('Team Member yüklenemedi.');
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMember();
  }, []);

  function truncateText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  }

  return (
    <div className={`${style.bgDark} py-[64px] md:py-[90px] bg-white h-auto `}>
      <div className="mx-auto max-w-7xl items-center justify-between px-8 flex flex-col gap-12 md:gap-[60px]">
        <div className="text-center">
          <h2 className="font-bold primary-color mb-2 text-heading-5 md:text-heading-3">
            Etkinliklerimiz
          </h2>
          <p
            className={`${style.textDark} primary-text-color max-w-3xl mx-auto text-body-sm-regular sm:text-body-md-regular`}
          >
            Sektörün önde gelen profesyonelleriyle gerçekleştirdiğimiz
            eğitimler, seminerler ve atölye çalışmalarıyla gelişiminizi
            destekliyoruz. Birlikte büyüyen yetenekler olarak, hedeflerinize
            ulaşmanız için buradayız!
          </p>
        </div>

        <div
          className={`${style.bgDark} flex flex-wrap w-full lg:flex-nowrap gap-[30px]`}
        >
          <div className="flex flex-wrap w-full items-center justify-center xl:justify-between gap-8">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <ContentLoader
                    key={`loader-${index}`}
                    speed={2}
                    width={370}
                    height={352}
                    viewBox="0 0 370 352"
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
                    <rect x="0" y="292" rx="5" ry="5" width="370" height="25" />
                  </ContentLoader>
                ))
              : events.map((event, index) => (
                  <Link
                    className="event-link-container"
                    to={`etkinliklerimiz/${event.slug}`}
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
                          className={`${eventTypeBgColor(
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
        </div>

        <div className="h-auto w-full flex items-center justify-center ">
          <Link
            to={'/etkinliklerimiz'}
            className="text-body-sm-regular sm:text-body-md-regular primary-color px-[20px] py-[12px] sm:py-[14px] sm:px-[28px] border-solid border-[1px] hover:bg-[#d37c26] transition hover:border-[#d37c26] hover:text-white rounded-[50px] text-center"
          >
            Düzenlediğimiz Etkinliklere Göz Atın
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
