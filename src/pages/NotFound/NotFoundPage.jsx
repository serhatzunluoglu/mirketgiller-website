import style from './styles.module.scss';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className={`${style.notFoundPageContainer} not-found-page-container`}>
      <div className="mx-auto gap-8 py-10 px-8 max-w-7xl h-full flex items-center">
        <div className="flex flex-col gap-8 w-[400px]">
          <h1 className="text-9xl text-white font-black">404</h1>

          <div className="flex flex-col gap-5">
            <p className="body-large-regular text-white">
              Hmm... Sanırım kayboldunuz. Yolu bulmak için Dedektif Mirket’i
              takip edin:
            </p>
            <Link className={`text-white ${style.button} rounded-full w-max`}>
              Ana Sayfaya Geri Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
