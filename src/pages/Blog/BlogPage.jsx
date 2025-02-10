// Third-party library imports
import { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Stylesheet imports
import style from './styles.module.scss';

// Other imports
import { useAppContext } from '../../context/AppContext';
import Pagination from '../../components/pagination/Pagination';

function formatDate(inputDate) {
  const date = new Date(inputDate);

  return date.toLocaleDateString('tr-TR', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

function BlogPage() {
  const { theme } = useAppContext();
  const apiUrl = import.meta.env.VITE_API_URL;

  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 6,
    total: 0,
    from: 0,
    to: 0,
  });
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://admin.mirketgiller.com.tr/api/posts?per_page=${pagination.per_page}&page=${page}`
      );
      const data = response.data;
      console.log(data);
      setBlogs(data.posts);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Bloglar yüklenirken hata oluştu:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(pagination.current_page);
  }, [pagination.current_page]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= pagination.last_page) {
      setPagination((prev) => ({ ...prev, current_page: page }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -30 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="blogs-page mx-auto max-w-7xl pt-6 md:pt-[50px] pb-10 px-8"
    >
      <div className="blogs-page-header flex flex-col items-center gap-3 mb-12 md:mb-[60px]">
        <h1 className="text-heading-5 md:text-heading-3 primary-color text-center">
          Blog Yazılarımız
        </h1>
        <p
          className={`primary-text-color dark:text-white text-body-sm-regular sm:text-body-md-regular text-center max-w-3xl`}
        >
          Ekip arkadaşlarımızdan ilham verici ve bilgilendirici blog yazıları.
          Kendi alanlarında uzmanlaşmış üyelerimizin paylaştığı yazılarla, bilgi
          birikiminizi artırın ve yeni perspektifler kazanın.
        </p>
      </div>
      <section className="blogs-container flex flex-wrap w-full max-w-[370px] lg:max-w-[772px]  xl:max-w-[1174px] justify-start xl:justify-start gap-8 gap-y-11 ml-auto mr-auto">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ContentLoader
                key={`loader-${index}`}
                speed={2}
                width={370}
                height={500}
                viewBox="0 0 370 500"
                backgroundColor={`${theme === 'light' ? '#f3f3f3' : '#1A1A1A'}`}
                foregroundColor={`${theme === 'light' ? '#ecebeb' : '#202020'}`}
                title="Yükleniyor..."
              >
                <rect x="0" y="0" rx="5" ry="5" width="370" height="220" />

                <rect x="35" y="250" rx="5" ry="5" width="300" height="24" />
                <rect x="55" y="282" rx="5" ry="5" width="260" height="24" />

                <rect x="35" y="325" rx="5" ry="5" width="300" height="16" />
                <rect x="45" y="350" rx="5" ry="5" width="280" height="16" />
                <rect x="55" y="375" rx="5" ry="5" width="260" height="16" />

                <rect x="109" y="420" rx="28" ry="28" width="150" height="50" />
              </ContentLoader>
            ))
          : blogs.map((blog, index) => (
              <motion.article
                className="blog-link-container"
                whileHover={{ scale: 1.01 }}
                transition={{
                  type: 'tween',
                  duration: 0.15,
                  ease: 'easeInOut',
                }}
                to={`/`}
                key={`blog-${index}`}
              >
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Medium'da blogu oku"
                  key={index}
                  className={`dark:bg-tertiary-color bg-white w-full sm:w-[370px] rounded-lg overflow-hidden flex flex-col shadow-[0_2px_2px_rgba(0,0,0,0.15)]`}
                >
                  <div className="relative h-[220px]">
                    <img
                      src={`${apiUrl}/storage/${blog.image}`}
                      alt={blog.title}
                      className={`w-full h-[220px] object-cover opacity-100 rounded-b-none rounded-t-[8px] aspect-[37/22] bg-[#f3f3f3] dark:bg-[#202020]`}
                    />
                    <div className="blog-date mt-4">
                      <div className="bg-[#d37c26] text-white absolute top-3 right-3 px-[10px] py-[4px] sm:px-[15px] sm:py-[6px] rounded-[5px] body-extra-small-text-medium w-max">
                        {formatDate(blog.published_at)}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-[34px] py-[30px] items-center justify-center rounded-b-lg dark:bg-secondary-color">
                    <h2
                      className={`dark:text-white  min-h-[56px] text-center text-xl font-sans font-semibold sm:heading-6 mg-dark cursor-pointer transition-all line-clamp-2`}
                    >
                      {truncateText(blog.title, 50)}
                    </h2>
                    <p
                      className={`dark:text-white w-full min-h-[72px] text-center mt-[14px] mb-[28px] primary-text-color text-body-sm-regular sm:text-body-md-regular line-clamp-3`}
                    >
                      {blog.content}
                    </p>
                    <div
                      className={`${style.buttonDark}  px-[28px] py-[12px] rounded-[50px] text-body-sm-regular sm:text-body-md-regular primary-text-color border-solid border-[1px]  dark:border-white dark:hover:border-primary-color dark:text-white hover:text-white hover:bg-[#d37c26] transition-all`}
                    >
                      Yazıyı Oku
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
      </section>
      <Pagination
        currentPage={pagination.current_page}
        totalPages={pagination.last_page}
        onPageChange={handlePageChange}
        from={pagination.from}
        to={pagination.to}
        total={pagination.total}
      />
    </motion.div>
  );
}

export default BlogPage;
