import { useRef, useEffect, useState } from 'react';
import { getCollaborations } from '../../services/collaborationBarService';
import style from './style.module.scss';
import { useAppContext } from '../../context/AppContext';
import ContentLoader from 'react-content-loader';

const CollaborationBar = () => {
  const [loading, setLoading] = useState(false);
  const [repeatedBrands, setRepeatedBrands] = useState([]);
  const [collaborations, setCollaborations] = useState([]);
  const scrollRef = useRef(null);
  const { theme } = useAppContext();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchTeamMember = async () => {
      setLoading(true);
      try {
        const data = await getCollaborations();
        setCollaborations(data);
        setRepeatedBrands([...Array(40)].flatMap(() => data));
      } catch (error) {
        console.error('Team Member yüklenemedi.');
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMember();
  }, []);
  console.log('repeatedBrands', repeatedBrands);
  console.log('collaborations', collaborations);

  const handleMouseEnter = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div
      className="w-full overflow-hidden flex items-center h-[10vh] bg-[#d37c26] p-6 gap-3 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={scrollRef}
        className={`${style['animate-scroll']} flex w-max gap-8 sm:gap-16`}
      >
        {loading ? (
          Array.from({ length: 80 }).map((_, index) => (
            <ContentLoader
              key={`loader-${index}`}
              speed={2}
              width={254}
              height={50}
              viewBox="0 0 254 50"
              backgroundColor={`${theme === 'light' ? '#d38e4a' : '#d38e4a'}`}
              foregroundColor={`${theme === 'light' ? '#d19d69' : '#d19d69'}`}
              title="Yükleniyor..."
            >
              {/* Image */}
              <rect x="0" y="0" rx="5" ry="5" width="140" height="50" />
              <rect x="0" y="0" rx="5" ry="5" width="140" height="50" />
            </ContentLoader>
          ))
        ) : (
          <>
            {repeatedBrands.map((brand) =>
              brand.partners.map((partner, index) => (
                <div
                  name={index}
                  key={index}
                  className="flex gap-16 sm:gap-5 justify-center items-center"
                >
                  <a href={partner.logo_url} target="_blank" rel="noopener">
                    <img
                      src={`${apiUrl}/storage/${partner.image}`}
                      alt={partner.company_name}
                      className="h-9 object-contain w-auto"
                    />
                  </a>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CollaborationBar;
