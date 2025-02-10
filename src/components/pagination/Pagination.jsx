// Third-party library imports
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

// Stylesheet imports
import style from './style.module.scss';

// Other imports
import { useAppContext } from '../../context/AppContext';

// eslint-disable-next-line react/prop-types
function Pagination({ currentPage, totalPages, onPageChange }) {
  const { theme } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const isPrevDisabled = currentPage === 1 || isLoading;
  const isNextDisabled = currentPage === totalPages || isLoading;

  // Maksimum 5 sayfa göstermek için sayfa aralığını hesaplama
  const getPageNumbers = () => {
    const maxVisiblePages = window.innerWidth >= 540 ? 5 : 4;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="events-pagination flex flex-col items-center gap-3 py-2 mt-[60px]">
      <div className="flex justify-center items-center gap-2 sm:gap-3">
        <button
          className={`${
            style.buttonBorderOrange
          } rounded-full events-prev w-[35px] h-[35px] flex justify-center items-center text-orange-400 ${
            isPrevDisabled
              ? 'opacity-50 cursor-auto'
              : 'hover:bg-[#d37c26] hover:text-white hover:border-none'
          } `}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isPrevDisabled}
        >
          <ArrowLeftIcon aria-hidden="true" className="h-[13px] w-[14px]" />
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`w-[35px] h-[35px] flex justify-center items-center rounded-full text-sm dark:hover: ${
              currentPage === page
                ? 'bg-[#d37c26] text-white'
                : `${
                    theme === 'light'
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : `dark:bg-secondary-color dark:hover:bg-[#202020] text-[#dcdcdc]`
                  }`
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        <button
          className={`${
            style.buttonBorderOrange
          } rounded-full events-next w-[35px] h-[35px] flex justify-center items-center text-orange-400 ${
            isNextDisabled
              ? 'opacity-50 cursor-auto'
              : 'hover:bg-[#d37c26] hover:text-white hover:border-none'
          } `}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isNextDisabled}
        >
          <ArrowRightIcon aria-hidden="true" className="h-[13x] w-[14px]" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
