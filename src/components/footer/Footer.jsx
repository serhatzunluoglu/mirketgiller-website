import mirketLogo from '../../assets/images/svg/mirketgiller-white-logo.svg';
import { Link } from 'react-router-dom';
import style from './style.module.scss';
import kommunityLogoWhite from '../../assets/images/svg/kommunity-logo-white.svg';

let year = new Date().getFullYear();

function Footer() {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${style.footerContainer} primary-color-bg`}>
      <div className="mx-auto md:flex md:max-w-7xl md:justify-between py-16 sm:py-20 px-8 xl:flex-row sm:flex sm:gap-12 sm:flex-col flex-col flex gap-12">
        <div className="gap-4 flex flex-col items-start">
          <Link onClick={handleClick}>
            <img src={mirketLogo} alt="Mirketgiller" className="h-8 w-auto" />
          </Link>
          <p className="text-body-sm-regular sm:text-body-md-regular text-white">
            Mirketgiller © {year} | Tüm hakları saklıdır
          </p>
        </div>

        <div className="md:flex md:gap-8 sm:flex sm:flex-row sm:justify-between flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h6 className="body-large-semibold text-white">
              Hızlı Bağlantılar
            </h6>
            <Link
              to={'/etkinliklerimiz'}
              className="text-body-sm-regular sm:text-body-md-regular text-white"
            >
              Etkinliklerimiz
            </Link>
            <Link
              to={'/hakkimizda'}
              className="text-body-sm-regular sm:text-body-md-regular text-white"
            >
              Hakkımızda
            </Link>
            <Link
              to={'/hakkimizda#ekibimiz'}
              className="text-body-sm-regular sm:text-body-md-regular text-white"
            >
              Ekibimiz
            </Link>
            <Link
              to={'/iletisim'}
              className="text-body-sm-regular sm:text-body-md-regular text-white"
            >
              İletişim
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h6 className="body-large-semibold text-white">
              İlginizi Çekebilir
            </h6>
            <Link
              to={'/blog'}
              className="text-body-sm-regular sm:text-body-md-regular text-white"
            >
              Blog Yazılarımız
            </Link>
            <Link
              to={'/#destekledigimiz-projeler'}
              className="text-body-sm-regular sm:text-body-md-regular text-white"
            >
              Desteklediğimiz Projeler
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="body-large-semibold text-white">Sosyal Medya</h5>
            <div className="flex gap-3 items-center">
              <a
                href="https://www.instagram.com/mirketgiller_/"
                target="_blank"
                rel="noopener"
                style={{ fontSize: '20px' }}
              >
                <i className="bi bi-instagram text-white"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/mirketgiller"
                target="_blank"
                rel="noopener"
              >
                <i
                  className="bi bi-linkedin text-white"
                  style={{ fontSize: '20px' }}
                ></i>
              </a>
              <a
                href="https://www.youtube.com/@mirketgiller?sub_confirmation=1&sub_confirmation=1"
                target="_blank"
                rel="noopener"
              >
                <i
                  className="bi bi-youtube text-white"
                  style={{ fontSize: '20px' }}
                ></i>
              </a>
              <a
                href="https://medium.com/@mirketgillerresmi"
                target="_blank"
                rel="noopener"
              >
                <i
                  className="bi bi-medium text-white"
                  style={{ fontSize: '20px' }}
                ></i>
              </a>
              <a
                href="https://x.com/@mirketgiller"
                target="_blank"
                rel="noopener"
              >
                <i
                  className="bi bi-twitter-x text-white"
                  style={{ fontSize: '20px' }}
                ></i>
              </a>
              <a
                href="https://github.com/mirketgiller"
                target="_blank"
                rel="noopener"
              >
                <i
                  className="bi bi-github text-white"
                  style={{ fontSize: '20px' }}
                ></i>
              </a>
              <a
                href="https://kommunity.com/mirketgiller/about"
                target="_blank"
                rel="noopener"
              >
                <img
                  src={kommunityLogoWhite}
                  className="w-5 h-5"
                  style={{ fontSize: '20px' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
