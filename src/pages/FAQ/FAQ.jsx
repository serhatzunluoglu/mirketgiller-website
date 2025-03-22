import { Helmet, HelmetProvider } from 'react-helmet-async';
import AccordionMenu from '../../components/accordion-menu/AccordionMenu';
import { motion } from 'framer-motion';

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
      'Düzenlediğimiz etkinliklere katılmanız için üniversite öğrencisi veya yeni mezun olmanız yeterlidir.',
  },
  {
    question:
      'Mirketgiller ile ortak bir etkinlik veya iş birliği yapabilir miyiz?',
    answer:
      'Bu konudaki isteklerinizi web sitemizde bulunan iletişim kısmında bize iletebilirsiniz. Böylece size ulaşabilir ve yapacağımız işbirliği hakkında toplantı yapabiliriz.',
  },
];

function FAQ() {
  return (
    <HelmetProvider>
      <motion.div
        initial={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
      >
        <Helmet>
          <title>Mirketgiller | Sıkça Sorulan Sorular</title>
          <meta
            name="description"
            content="Mirketgiller hakkında merak ettiğiniz soruların cevaplarını burada bulabilirsiniz. Etkinliklerimiz, topluluğumuz ve fırsatlar hakkında detaylı bilgi edinin."
          />

          {/* Open Graph Meta Tags for FAQ Page */}
          <meta
            property="og:title"
            content="Mirketgiller | Sıkça Sorulan Sorular"
          />
          <meta
            property="og:description"
            content="Mirketgiller hakkında merak ettiğiniz soruların cevaplarını burada bulabilirsiniz. Etkinliklerimiz, topluluğumuz ve fırsatlar hakkında detaylı bilgi edinin."
          />
          <meta
            property="og:image"
            content="https://www.admin.mirketgiller.com.tr/storage/seo/SSS.jpg"
          />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Mirketgiller" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Mirketgiller | Sıkça Sorulan Sorular"
          />
          <meta
            name="twitter:description"
            content="Mirketgiller hakkında sıkça sorulan soruların cevaplarını burada bulabilirsiniz. Etkinliklerimiz ve topluluğumuz hakkında daha fazla bilgi edinin."
          />
          <meta
            name="twitter:image"
            content="https://www.admin.mirketgiller.com.tr/storage/seo/SSS.jpg"
          />
          <meta name="twitter:url" content={window.location.href} />
          <meta name="twitter:creator" content="@mirketgiller" />
        </Helmet>

        <div className="mx-auto max-w-7xl pt-6 md:pt-[50px] pb-[90px] px-8">
          <div className="w-full justify-center flex flex-col items-center">
            <h1 className="heading-5 md:text-heading-3 primary-color mb-3 text-center">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-center text-body-sm-regular sm:text-body-md-regular primary-text-color mb-[48px] md:mb-[60px] sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[65%] dark:text-white">
              Mirketgiller topluluğu hakkında daha fazla bilgi almak mı
              istiyorsunuz? Aşağıdaki sorular, ekibimize en sık sorulan
              soruların yanıtlarını içermektedir. Eğer hala cevapsız kalan bir
              sorunuz varsa, bizimle iletişime geçmekten çekinmeyin!
            </p>
          </div>
          <AccordionMenu items={faqItems} />
        </div>
      </motion.div>
    </HelmetProvider>
  );
}

export default FAQ;
