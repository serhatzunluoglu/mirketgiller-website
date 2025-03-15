import React from 'react';
import AccordionMenu from '../../components/accordion-menu/AccordionMenu';

const faqItems = [
  {
    question: 'Mirketgiller nedir?',
    answer:
      'Mirketgiller, üniversite öğrencilerinin gelişimini desteklemeyi amaçlayan bir topluluktur. Öğrencilerin sektörle ilgili bilgi ve becerilerini geliştirmelerine yardımcı olmak için profesyonel isimlerle iş birliği yapıyoruz ve bu iş birlikleri ile zirve, panel, webinar vb. etkinlikler düzenliyoruz. Ayrıca ekibimizde büyüyen girişimlere de destek olarak, bu alanda da aktifliğimizi sürdürüyoruz.',
  },
  {
    question: 'Mirketgiller’de nasıl topluluk üyesi olurum?',
    answer:
      'Mirketgiller’de topluluk üyesi olmak için web sayfamızda bulunan "Topluluğumuza Katıl" butonuna tıklayarak topluluğumuza üye olabilirsiniz. Bu şekilde etkinliklerimizden haberdar olabilirsiniz.',
  },
  {
    question: 'Mirketgiller ekibine nasıl katılırım?',
    answer:
      'Mirketgiller’de ekip üyesi olmak için web sayfamızda bulunan "Ekibimize Katıl" butonuna tıklayarak ekibimize katılabilirsiniz. Bu şekilde siz de Mirketgiller ekibine katılabilir ve bizimle birlikte büyüyen yeteneklerin bir parçası olabilirsiniz.',
  },
  {
    question: 'Mirketgiller’in düzenlediği etkinliklere kimler katılabilir?',
    answer:
      'Düzenlediğimiz etkinliklere katılmanız için üniversite öğrencisi veya yeni mezun olmanız yeterli.',
  },
  {
    question:
      'Mirketgiller ile ortak bir etkinlik veya iş birliği yapabilir miyiz?',
    answer:
      'Bu konudaki isteklerinizi web sitemizde bulunan iletişim kısmında bize iletebilirsiniz. Böylece size ulaşabilir ve görüşebiliriz.',
  },
];

function FAQ() {
  return (
    <div className="mx-auto max-w-7xl pt-6 md:pt-[50px] pb-[90px] px-8">
      <div className="w-full justify-center flex flex-col items-center">
        <h1 className="heading-5 md:text-heading-3 primary-color mb-3 text-center">
          Sıkça Sorulan Sorular
        </h1>
        <p className="text-center text-body-sm-regular sm:text-body-md-regular primary-text-color mb-[48px] md:mb-[60px] sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[65%] dark:text-white">
          Mirketgiller topluluğu hakkında daha fazla bilgi almak mı
          istiyorsunuz? Aşağıdaki sorular, üyelerimizin en sık sorduğu sorulara
          yanıtlar sunmaktadır. Eğer hala cevapsız kalan bir sorunuz varsa,
          bizimle iletişime geçmekten çekinmeyin!
        </p>
      </div>
      <AccordionMenu items={faqItems} />
    </div>
  );
}

export default FAQ;
