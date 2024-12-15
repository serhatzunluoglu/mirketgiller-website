import { useEffect, useState, useMemo } from 'react';
import style from './style.module.scss';

// Test logoları
import mirketLogo from '../../assets/images/svg/mirketgiller-white-logo.svg';
import sun from '../../assets/images/svg/sun-white.svg';
import moon from '../../assets/images/svg/moon-white.svg';
import mirketIcon from '../../assets/images/svg/mirket-white.png';

function CollaborationBar() {
  const logos = useMemo(() => [sun, mirketIcon, mirketLogo, moon], []); // logo kaynakları
  const [extendedLogos, setExtendedLogos] = useState([]);
  const [barWidth, setBarWidth] = useState(window.innerWidth);
  const [imageDimensions, setImageDimensions] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const dimensions = await Promise.all(
        logos.map((logo) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = logo;

            img.onload = () => {
              const aspectRatio = img.width / img.height;
              const targetHeight = 36; // İstenen yükseklik
              const calculatedWidth = targetHeight * aspectRatio;

              resolve({
                src: logo,
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
  }, [logos]); // logos artık sabit referansa sahip, bu nedenle sadece ilk renderda tetiklenecek ve width değerleri imageDimensions dizisine yazılacak.

  console.log('imagedimension ' + imageDimensions.length);

  useEffect(() => {
    // Ekran boyutu değişirse bar genişliğini güncelle
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

      logoLayoutSize += imageDimensions.length * 64; // Her bir logo arasındaki boşluklar
      console.log('logo layout ' + logoLayoutSize);

      var logosToFill = Math.ceil((barWidth * 1.5) / logoLayoutSize); // Gerekli logo tekrar sayısı
      logosToFill = logosToFill + (logosToFill % 10) + 1;
      console.log('logos to fill: ' + logosToFill);

      // Logoları yeterince tekrar et ve döngü oluştur
      const repeatedLogos = [];
      for (let i = 0; i < logosToFill; i++) {
        repeatedLogos.push(...logos);
      }

      setExtendedLogos([...repeatedLogos]);
    }
  }, [barWidth, logos, imageDimensions]); // imageDimensions yüklendiğinde işlemleri tetikle

  return (
    <div
      className={`${style.slider} w-full h-[88px] primary-color-bg overflow-hidden relative`}
    >
      <p className={`${style.collabsText} heading-6 text-white`}>
        Destekçilerimiz
      </p>
      <div className="flex items-center justify-start w-full h-full slider-track">
        <div className={`${style.scrollAnimation} flex items-center gap-16`}>
          {extendedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="h-9 w-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollaborationBar;

