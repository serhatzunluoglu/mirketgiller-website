import style from './styles.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { useAppContext } from '../../context/AppContext';
import { getBlogLittle } from '../../services/blogLittleService';

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

const Blog = () => {
  const [blogLittle, setBlogLittle] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const { theme } = useAppContext();

  useEffect(() => {
    const fetchBlogLittle = async () => {
      setLoading(true);
      try {
        const data = await getBlogLittle();
        console.log(data);
        setBlogLittle(data);
      } catch (error) {
        console.error('Timeflow yüklenemedi.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogLittle();
  }, []);

  return (
    <div
      className={`${style.sectionDark} py-[64px] md:py-[90px] bg-[#F9FAFB] h-auto `}
    >
      <div className="mx-auto max-w-7xl items-center justify-between  px-8 flex flex-col gap-12 md:gap-[60px]">
        <div className="text-center">
          <h2 className="font-bold primary-color mb-2 text-heading-5 md:text-heading-3">
            Blog Yazılarımız
          </h2>
          <p
            className={`${style.textDark} primary-text-color max-w-3xl mx-auto text-body-sm-regular sm:text-body-md-regular`}
          >
            Ekip arkadaşlarımızın kaleme aldığı ilham verici ve bilgilendirici
            blog yazılarıyla bilgi dolu bir yolculuğa çıkın. Kendi alanlarında
            uzmanlaşmış üyelerimizin deneyimlerinden ve derinlemesine
            analizlerinden faydalanarak, hem bilgi birikiminizi artırabilir hem
            de farklı bakış açıları kazanabilirsiniz.
          </p>
        </div>

        <div className={`flex flex-wrap w-full lg:flex-nowrap gap-[30px] `}>
          <div className="flex flex-wrap w-full items-center justify-center  xl:justify-between  gap-8">
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <ContentLoader
                  key={`loader-${index}`}
                  speed={2}
                  width={370}
                  height={500}
                  viewBox="0 0 370 500"
                  backgroundColor={`${
                    theme === 'light' ? '#f3f3f3' : '#202020'
                  }`}
                  foregroundColor={`${
                    theme === 'light' ? '#ecebeb' : '#1a1a1a'
                  }`}
                  title="Yükleniyor..."
                >
                  <rect x="0" y="0" rx="5" ry="5" width="370" height="220" />

                  <rect x="35" y="250" rx="5" ry="5" width="300" height="24" />
                  <rect x="55" y="282" rx="5" ry="5" width="260" height="24" />

                  <rect x="35" y="325" rx="5" ry="5" width="300" height="16" />
                  <rect x="45" y="350" rx="5" ry="5" width="280" height="16" />
                  <rect x="55" y="375" rx="5" ry="5" width="260" height="16" />

                  <rect
                    x="109"
                    y="420"
                    rx="28"
                    ry="28"
                    width="150"
                    height="50"
                  />
                </ContentLoader>
              ))
            ) : (
              <>
                {blogLittle.map((blog, index) => (
                  <div
                    key={index}
                    className={`${style.bgDark} bg-white w-full sm:w-[370px] rounded-lg overflow-hidden flex flex-col`}
                  >
                    <div>
                      <img
                        src={`${apiUrl}/storage/${blog.image}`}
                        alt={blog.title}
                        className={`w-full h-[220px] object-cover opacity-100 rounded-b-none rounded-t-[8px]`}
                      />
                    </div>
                    <div className="flex flex-col px-[34px] py-[30px] items-center justify-center">
                      <h3
                        className={`dark:text-white flex items-center min-h-[56px] text-center text-xl font-sans font-semibold sm:heading-6 mg-dark cursor-pointer transition-all line-clamp-2`}
                      >
                        {truncateText(blog.title, 50)}
                      </h3>
                      <p
                        className={`dark:text-white w-full sm:min-h-[72px] text-center mt-[14px] mb-[28px] primary-text-color text-body-sm-regular sm:text-body-md-regular line-clamp-3`}
                      >
                        {blog.content}
                      </p>
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener"
                        className={`${style.buttonDark}  px-[28px] py-[12px] rounded-[50px] text-body-sm-regular sm:text-body-md-regular primary-text-color border-solid border-[1px] hover:text-white hover:bg-[#d37c26] transition-all`}
                      >
                        Yazıyı Oku
                      </a>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        <div className="h-auto w-full flex items-center justify-center ">
          <Link
            to={'/blog'}
            className="text-body-sm-regular sm:text-body-md-regular  primary-color px-[20px] py-[12px] sm:py-[14px] sm:px-[28px] border-solid border-[1px] hover:bg-[#d37c26] transition hover:border-[#d37c26] hover:text-white rounded-[50px] text-center"
          >
            Blog Yazılarımıza Göz Atın ✍️
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
