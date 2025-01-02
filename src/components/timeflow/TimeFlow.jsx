import React from 'react';
import style from './style.module.scss';

const timeflowData = [
  {
    heading: 'Lorem Ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec molestie arcu. Nam egestas a enim a aliquam.',
  },
  {
    heading: 'Lorem Ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec molestie arcu. Nam egestas a enim a aliquam.',
  },
  {
    heading: 'Lorem Ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec molestie arcu Nam egestas a enim a aliquam.',
  },
  {
    heading: 'Lorem Ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec molestie arcu. Nam egestas a enim a aliquam.',
  },
  {
    heading: 'Lorem Ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec molestie arcu. Nam egestas a enim a aliquam.',
  },
];

function TimeFlow() {
  return (
    <div
      className={`mx-auto flex  items-center flex-col bg-[#F9FAFB] justify-center px-8 py-[90px] ${style.timeflowBackground}`}
    >
      {timeflowData.map((item, index) => {
        // Sağ/sol pozisyonunu sıraya göre belirliyoruz
        const isRight = index % 2 === 0;

        return (
          <div
            key={index}
            className={`timeflow-container flex w-[976px] flex-col ${
              isRight ? 'items-end justify-end' : 'items-start justify-start'
            }`}
          >
            <div
              className={`timeflow-item-container w-[496px] flex justify-between ${
                !isRight ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="span-container flex flex-col items-center">
                <div
                  className={`span-circle ${style.circleSize} primary-color-bg rounded-full`}
                ></div>
                <div
                  className={`span-line w-1 h-full ${style.strokeColorBg}`}
                ></div>
              </div>
              <div className="content-container w-[360px]">
                <h1
                  className={`heading-6 primary-color ${
                    !isRight ? 'text-right' : ''
                  } w-full text-wrap`}
                >
                  {item.heading}
                </h1>
                <p
                  className={`body-small-regular primary-color ${
                    !isRight ? 'text-right' : ''
                  } w-full text-wrap`}
                >
                  {item.content}
                </p>
                <div className="w-full h-[60px]"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TimeFlow;
