import style from './styles.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getBlogLittle } from '../../services/blogLittleService';

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

const Blog = () => {
  const [blogLittle, setBlogLittle] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchBlogLittle = async () => {
      try {
        const data = await getBlogLittle();
        setBlogLittle(data);
      } catch (error) {
        console.error('Timeflow yüklenemedi.');
      }
    };

    fetchBlogLittle();
  }, []);

  console.log(blogLittle);

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
            Ekip arkadaşlarımızdan ilham verici ve bilgilendirici blog yazıları.
            Kendi alanlarında uzmanlaşmış üyelerimizin paylaştığı yazılarla,
            bilgi birikiminizi artırın ve yeni perspektifler kazanın.
          </p>
        </div>

        <div className={`flex flex-wrap w-full lg:flex-nowrap gap-[30px] `}>
          <div className="flex flex-wrap w-full items-center justify-center  xl:justify-between  gap-8">
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
                  <div
                    className={`dark:text-white  min-h-[56px] text-center text-xl font-sans font-semibold sm:heading-6 mg-dark cursor-pointer transition-all line-clamp-2`}
                  >
                    {truncateText(blog.title, 50)}
                  </div>
                  <p
                    className={`dark:text-white w-full min-h-[72px] text-center mt-[14px] mb-[28px] primary-text-color text-body-sm-regular sm:text-body-md-regular line-clamp-3`}
                  >
                    {blog.content}
                  </p>
                  <a
                    href={blog.link}
                    target="_blank"
                    className={`${style.buttonDark}  px-[28px] py-[12px] rounded-[50px] text-body-sm-regular sm:text-body-md-regular primary-text-color border-solid border-[1px] hover:text-white hover:bg-[#d37c26] transition-all`}
                  >
                    Yazıyı Oku
                  </a>
                </div>
              </div>
            ))}
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
