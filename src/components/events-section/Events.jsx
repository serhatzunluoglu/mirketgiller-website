import style from './styles.module.scss';
import blogImage from '../../assets/images/blogImage.png';

const eventData = [
  {
    date: 'Dec 22, 2023',
    title: 'Meet AutoManage, the best AI management tools',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: blogImage,
    link: '#',
  },
  {
    date: 'Jan 15, 2024',
    title: 'Discover Next-Gen Web Development',
    description:
      'Join us to explore the future of web development and design trends.',
    image: blogImage,
    link: '#',
  },
  {
    date: 'Feb 10, 2024',
    title: 'Mastering the Art of Project Management',
    description:
      'Learn effective project management strategies from industry leaders.',
    image: blogImage,
    link: '#',
  },
];

const Events = () => {
  return (
    <div className={`${style.bgDark} py-[64px] md:py-[90px] bg-white h-auto `}>
      <div className="mx-auto max-w-7xl items-center justify-between px-8 flex flex-col gap-12 md:gap-[60px]">
        <div className="text-center">
          <h2 className="font-bold primary-color mb-2 text-heading-5 md:text-heading-3">
            Etkinliklerimiz
          </h2>
          <p
            className={`${style.textDark} primary-text-color max-w-3xl mx-auto text-body-sm-regular sm:text-body-md-regular`}
          >
            Sektörün önde gelen profesyonelleriyle gerçekleştirdiğimiz
            eğitimler, seminerler ve atölye çalışmalarıyla gelişiminizi
            destekliyoruz. Birlikte büyüyen yetenekler olarak, hedeflerinize
            ulaşmanız için buradayız!
          </p>
        </div>

        <div
          className={`${style.bgDark} flex flex-wrap w-full lg:flex-nowrap gap-[30px]`}
        >
          <div className="flex flex-wrap w-full items-center justify-center xl:justify-between gap-8">
            {eventData.map((event, index) => (
              <a href={event.link} key={index}>
                <div
                  className={`${style.cardHover} w-full min-h-[424px] sm:w-[370px] rounded-lg overflow-hidden flex flex-col gap-8`} // kutu title'dan dolayı ortadaki kutu aşağıda kalıyor o yüzden min-h-[424px] ekledim.
                >
                  <div>
                    <img
                      src={event.image}
                      alt={event.title}
                      className={`${style.imageHover} w-full h-[220px] object-cover rounded-[5px] opacity-100`}
                    />
                  </div>
                  <div>
                    <span className="bg-[#d37c26] text-white px-[15px] py-[6px] rounded-[5px] body-extra-small-text-medium">
                      {event.date}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div
                      className={`${style.textDark} ${style.textHover} text-xl font-sans font-semibold sm:heading-6 mg-dark cursor-pointer transition-all`}
                    >
                      {event.title}
                    </div>
                    <p
                      className={`${style.stroke} primary-text-color text-body-sm-regular sm:text-body-md-regular`}
                    >
                      {event.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="h-auto w-full flex items-center justify-center ">
          <a
            href="#"
            className="text-body-sm-regular sm:text-body-md-regular primary-color px-[20px] py-[12px] sm:py-[14px] sm:px-[28px] border-solid border-[1px] hover:bg-[#d37c26] transition hover:border-[#d37c26] hover:text-white rounded-[50px] text-center"
          >
            Düzenlediğimiz Etkinliklere Göz Atın
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;
