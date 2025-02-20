import style from './styles.module.scss';
import { useRef, useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import ContentLoader from 'react-content-loader';
import { getSupportedProjects } from '../../services/supportedProjectsService';
import { useLocation } from 'react-router-dom';

const Supported = () => {
  const [loading, setLoading] = useState(false);
  const [supportedProjects, setSupportedProjects] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const { theme } = useAppContext();

  useEffect(() => {
    const fetchSupportedProjects = async () => {
      setLoading(true);
      try {
        const data = await getSupportedProjects();
        setSupportedProjects(data);
      } catch (error) {
        console.error('Team Member yüklenemedi.');
      } finally {
        setLoading(false);
      }
    };

    fetchSupportedProjects();
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        const yOffset = -100;
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className={`${style.bgDark}`} id="destekledigimiz-projeler">
      <div className="mx-auto flex flex-col max-w-7xl gap-12 md:gap-[60px] items-center justify-between py-[64px] md:py-[90px] px-8">
        <h2 className="primary-color text-heading-5 md:text-heading-3 w-full text-center">
          Desteklediğimiz Projeler
        </h2>
        <div className="flex items-center justify-center gap-[32px] w-full flex-wrap lg:justify-around">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <ContentLoader
                key={`loader-${index}`}
                speed={2}
                width={254}
                height={50}
                viewBox="0 0 254 50"
                backgroundColor={`${theme === 'light' ? '#ededed' : '#1a1a1a'}`}
                foregroundColor={`${theme === 'light' ? '#f9fafb' : '#2f2f2f'}`}
                title="Yükleniyor..."
              >
                {/* Image */}
                <rect x="0" y="0" rx="5" ry="5" width="140" height="50" />
                <rect x="0" y="0" rx="5" ry="5" width="140" height="50" />
              </ContentLoader>
            ))
          ) : (
            <>
              {supportedProjects.map((project, index) => (
                <div
                  key={index}
                  className="relative group w-auto flex flex-col items-center"
                >
                  {/* project Image */}
                  <img
                    src={`${apiUrl}/storage/${project.image}`}
                    alt={project.desc}
                    className="w-auto h-auto max-w-[160px] sm:max-w-[180px] md:max-w-[200px] object-contain aspect-[16/9]"
                  />

                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-4 py-3 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:flex flex-col items-center gap-1
                  before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-gray-800"
                  >
                    <span>{project.desc}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Daha fazla bilgi
                    </a>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Supported;
