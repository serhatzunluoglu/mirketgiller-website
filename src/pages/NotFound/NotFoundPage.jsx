import style from './styles.module.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${style.notFoundPageContainer} not-found-page-container`}
    >
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
              className={`text-white ${style.button} rounded-full w-max`}
            >
              Ana Sayfaya Geri Dön
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default NotFoundPage;
