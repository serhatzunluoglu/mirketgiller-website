import style from './styles.module.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function NotFoundPage() {
  return (
    <HelmetProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${style.notFoundPageContainer} not-found-page-container`}
      >
        <Helmet>
          <title>404 - Sayfa Bulunamadı | Mirketgiller</title>
          <meta
            name="description"
            content="Aradığınız sayfa bulunamadı. Lütfen URL'yi kontrol edin veya anasayfaya dönün."
          />
          {/* Open Graph Meta Tags */}
          <meta
            property="og:title"
            content="404 - Sayfa Bulunamadı | Mirketgiller"
          />
          <meta
            property="og:description"
            content="Aradığınız sayfa bulunamadı. Lütfen URL'yi kontrol edin veya anasayfaya dönün."
          />
          <meta
            property="og:image"
            content="https://www.admin.mirketgiller.com.tr/storage/seo/404.jpg"
          />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Mirketgiller" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="404 - Sayfa Bulunamadı | Mirketgiller"
          />
          <meta
            name="twitter:description"
            content="Aradığınız sayfa bulunamadı. Lütfen URL'yi kontrol edin veya anasayfaya dönün."
          />
          <meta
            name="twitter:image"
            content="https://www.admin.mirketgiller.com.tr/storage/seo/404.jpg"
          />
          <meta name="twitter:url" content={window.location.href} />
          <meta name="twitter:creator" content="@mirketgiller" />
        </Helmet>

        <div className="mx-auto gap-8 py-10 px-8 max-w-7xl h-full flex items-start justify-center lg:justify-start lg:items-center">
          <div className="flex flex-col gap-4 lg:gap-8 mt-20 screen-480:mt-0 w-[400px] text-center lg:text-left">
            <h1 className="text-7xl lg:text-9xl text-white font-black">404</h1>

            <div className="flex flex-col items-center lg:items-start gap-5">
              <p className="body-large-regular text-white">
                Hmm... Sanırım kayboldunuz. Yolu bulmak için Dedektif Mirket’i
                takip edin:
              </p>
              <Link
                to={'/'}
                className={`text-white ${style.button} rounded-full w-max transition-transform`}
              >
                Ana Sayfaya Geri Dön
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </HelmetProvider>
  );
}

export default NotFoundPage;
