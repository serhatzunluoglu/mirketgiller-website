import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Kulakcik.scss';

const tabData = [
  {
    path: '',
    title: 'BİLMÖK 2025 VLOG ',
    description: 'Özel indirimler ve fırsatlar için bizi takip edin.',
    image: '',
    buttonText: 'BİLMÖK VLOG',
    link: '/etkinliklerimiz/akdeniz-universitesi-bilmok-2025',
    bgColor: '#d37c26',
    size: '80px',
    position: 'bottom-left',
  },
];

export default function FloatingTab() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const tab = tabData.find((t) => t.path === location.pathname);
  const tabRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  if (!tab) return null;

  return (
    <div
      ref={tabRef}
      className={`floating-tab-container ${tab.position}`}
      style={{
        '--tab-size': tab.size,
        '--tab-bg-color': tab.bgColor,
      }}
    >
      {/* Floating Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="floating-button"
        style={{
          '--tab-size': tab.size,
          '--tab-bg-color': tab.bgColor,
        }}
      >
        {tab.buttonText}
      </div>

      {/* Çarpı Butonu */}
      <button
        onClick={() => setIsOpen(false)}
        className="close-button"
        style={{
          '--tab-bg-color': tab.bgColor,
        }}
      >
        ×
      </button>

      {/* Popup Box */}
      {isOpen && (
        <a
          href={tab.link}
          className="popup-box"
          style={{
            '--tab-size': tab.size,
            '--tab-bg-color': tab.bgColor,
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="popup-close-button"
          >
            ×
          </button>
          <h4>{tab.title}</h4>
          {tab.image !== '' ? (
            <img src={tab.image} alt="Popup Görseli" className="popup-image" />
          ) : (
            <></>
          )}
          <p>{tab.description}</p>
        </a>
      )}
    </div>
  );
}
