import mirketLogo from '../../assets/images/svg/mirketgiller-white-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import style from './style.module.scss';

let year = new Date().getFullYear();

function Footer() {
  const { pathname } = useLocation();

  if (pathname == '*') {
    return null;
  }

  return (
    <footer className={`${style.footerContainer} primary-color-bg`}>
      <div className="mx-auto md:flex md:max-w-7xl md:justify-between py-16 sm:py-20 px-8 xl:flex-row sm:flex sm:gap-12 sm:flex-col flex-col flex gap-12">
        <div className="gap-4 flex flex-col items-start">
          <Link to={'/'}>
            <img src={mirketLogo} alt="Mirketgiller" className="h-8 w-auto" />
          </Link>
          <p className="text-body-sm-regular sm:text-body-md-regular text-white">
            Mirketgiller © {year} | Tüm hakları saklıdır
          </p>
        </div>

        <div className="md:flex md:gap-8 sm:flex sm:flex-row sm:justify-between flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="body-large-semibold text-white">Hızlı Bağlantılar</p>
            <Link
              to={'/etkinliklerimiz'}
              className="text-body-sm-regular sm:text-body-md-regular text-white"
            >
              Etkinliklerimiz
            </Link>
            <Link
              to={'/iletisim'}
              className="text-body-sm-regular sm:text-body-md-regular text-white"
            >
              İletişim
            </Link>
            <Link
              to={'/ekibimiz'}
              className="text-body-sm-regular sm:text-body-md-regular text-white"
            >
              Ekibimiz
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <p className="body-large-semibold text-white">İlginizi Çekebilir</p>
            <Link
              to={'/blog'}
              className="text-body-sm-regular sm:text-body-md-regular text-white"
            >
              Blog Yazılarımız
            </Link>
            <Link
              to={'/destekledigimiz-projeler'}
              className="text-body-sm-regular sm:text-body-md-regular text-white"
            >
              Desteklediğimiz Projeler
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <p className="body-large-semibold text-white">Sosyal Medya</p>
            <div className="flex gap-3 items-center">
              <a
                href="https://www.instagram.com/mirketgiller_/"
                target="_blank"
                style={{ fontSize: '20px' }}
              >
                <i className="bi bi-instagram text-white"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/mirketgiller"
                target="_blank"
              >
                <i
                  className="bi bi-linkedin text-white"
                  style={{ fontSize: '20px' }}
                ></i>
              </a>
              <a href="https://www.youtube.com/@mirketgiller" target="_blank">
                <i
                  className="bi bi-youtube text-white"
                  style={{ fontSize: '20px' }}
                ></i>
              </a>
              <a href="https://medium.com/@mirketgillerresmi" target="_blank">
                <i
                  className="bi bi-medium text-white"
                  style={{ fontSize: '20px' }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
