import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ClockFill, GeoFill } from 'react-bootstrap-icons';

import style from './style.module.scss';

function EventDetailPage() {
  const { slug } = useParams(); // URL'den slug alınıyor
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/events/${slug}`);
        console.log(response);
        setEvent(response.data.post);
      } catch (error) {
        console.error('Etkinlik detayları yüklenirken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [slug]);

  if (loading) return <div>Yükleniyor...</div>;
  if (!event) return <div>Etkinlik bulunamadı!</div>;

  return (
    <div className="event-detail-container mx-auto max-w-7xl py-6 px-8">
      <h1 className="text-heading-5 md:text-heading-3 primary-color mb-12 md:mb-[60px]">
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
              <p className={`event-time primary-color`}>{event.published_at}</p>
              <p className={`event-hour primary-color`}>{event.published_at}</p>
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
    </div>
  );
}

export default EventDetailPage;
