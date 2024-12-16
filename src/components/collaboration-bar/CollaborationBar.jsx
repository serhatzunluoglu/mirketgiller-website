import { useEffect, useState, useMemo, useRef } from 'react';
import style from './style.module.scss';

// Test logoları
import mirketLogo from '../../assets/images/svg/mirketgiller-white-logo.svg';
import sun from '../../assets/images/svg/sun-white.svg';
import moon from '../../assets/images/svg/moon-white.svg';
import mirketIcon from '../../assets/images/svg/mirket-white.png';

function CollaborationBar() {
  const logos = useMemo(
    () => [
      { src: sun, href: 'https://example.com/sun' },
      { src: mirketIcon, href: 'https://example.com/mirket' },
      { src: mirketLogo, href: 'https://example.com/logo' },
      { src: moon, href: 'https://example.com/moon' },
    ],
    []
  );

  const [extendedLogos, setExtendedLogos] = useState([]);
  const [barWidth, setBarWidth] = useState(window.innerWidth);
  const [imageDimensions, setImageDimensions] = useState([]);
  const sliderRef = useRef(null); // Slider elementine referans
  const [isPaused, setIsPaused] = useState(false); // Animasyon durumu
  const [currentOffset, setCurrentOffset] = useState(0); // O anki pozisyon

  useEffect(() => {
    const loadImages = async () => {
      const dimensions = await Promise.all(
        logos.map((logo) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = logo.src;

            img.onload = () => {
              const aspectRatio = img.width / img.height;
              const targetHeight = 36;
              const calculatedWidth = targetHeight * aspectRatio;

              resolve({
                ...logo,
                width: calculatedWidth,
                height: targetHeight,
              });
            };
          });
        })
      );
      setImageDimensions(dimensions);
    };

    loadImages();
  }, [logos]);

  useEffect(() => {
    const handleResize = () => setBarWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (imageDimensions.length > 0) {
      let logoLayoutSize = 0;
      for (let i = 0; i < imageDimensions.length; i++) {
        logoLayoutSize += imageDimensions[i].width;
      }

      logoLayoutSize += imageDimensions.length * 64;

      const logosToFill = Math.ceil((barWidth * 1.5) / logoLayoutSize) + 1;

      const repeatedLogos = [];
      for (let i = 0; i < logosToFill; i++) {
        repeatedLogos.push(...imageDimensions);
      }

      setExtendedLogos(repeatedLogos);
    }
  }, [barWidth, imageDimensions]);

  const handleMouseEnter = () => {
    if (sliderRef.current) {
      const offset = sliderRef.current.getBoundingClientRect().left;
      setCurrentOffset(offset); // Mevcut pozisyonu kaydet
      setIsPaused(true); // Animasyonu duraklat
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Animasyonu yeniden başlat
  };

  return (
    <div
      className={`${style.slider} w-full h-[88px] primary-color-bg overflow-hidden relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className={`${style.collabsText} heading-6 text-white`}>
        Destekçilerimiz
      </p>
      <div className="flex items-center justify-start w-full h-full slider-track">
        <div
          ref={sliderRef}
          className={`${style.scrollAnimation} ${
            isPaused ? style.paused : ''
          } flex items-center gap-16`}
          style={{
            transform: isPaused
              ? `translateX(${currentOffset}px)`
              : 'translateX(0)',
          }}
        >
          {extendedLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logo.src}
                alt={`Logo ${index}`}
                style={{ width: logo.width, height: logo.height }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollaborationBar;
