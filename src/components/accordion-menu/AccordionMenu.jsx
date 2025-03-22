import { useState, useRef } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';

const AccordionMenu = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {items.map((item, index) => (
        <div key={index} className="rounded-2xl overflow-hidden">
          <button
            className="w-full flex justify-between gap-6 text-primary-color items-center p-4 bg-gray-100 hover:bg-gray-200 transition-colors dark:bg-secondary-color dark:hover:bg-[#202020]"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-body-md-semibold md:text-body-lg-semibold primary-color text-left">
              {item.question}
            </span>
            <span
              style={{
                display: 'inline-block',
                transform:
                  activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            >
              <ChevronDown />
            </span>
          </button>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            style={{
              height:
                activeIndex === index
                  ? contentRefs.current[index]?.scrollHeight
                  : 0,
              overflow: 'hidden',
              transition: 'height 0.3s ease',
            }}
            className="bg-gray-50 dark:bg-[#141414]"
          >
            <div className="px-4 py-6">
              <p className="primary-text-color dark:text-white text-body-sm-regular sm:text-body-md-regular">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionMenu;
