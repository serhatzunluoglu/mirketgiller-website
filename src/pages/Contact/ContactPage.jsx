import Contact from '../../components/Contact/Contact';
import './styles.module.scss';
import { motion } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function ContactPage() {
  return (
    <HelmetProvider>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
      >
        <Contact />
        <Helmet>
          <title>Mirketgiller | İletişim</title>
          <meta
            name="description"
            content="Mirketgiller ile iletişime geçin. Sorularınızı yanıtlamak ve iş birliği fırsatlarını değerlendirmek için buradayız. Hemen formu doldurun!"
          />
          {/* Open Graph Meta Tags for Event */}
          <meta
            property="og:description"
            content="Mirketgiller ile iletişime geçin. Sorularınızı yanıtlamak ve iş birliği fırsatlarını değerlendirmek için buradayız. Hemen formu doldurun!"
          />
          <meta
            property="og:image"
            content="https://www.admin.mirketgiller.com.tr/storage/seo/iletisim.jpg"
          />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Mirketgiller" />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Mirketgiller | İletişim" />
          <meta
            name="twitter:description"
            content="Mirketgiller ile iletişime geçin. Sorularınızı yanıtlamak ve iş birliği fırsatlarını değerlendirmek için buradayız. Hemen formu doldurun!"
          />
          <meta
            name="twitter:image"
            content="https://www.admin.mirketgiller.com.tr/storage/seo/iletisim.jpg"
          />
          <meta name="twitter:url" content={window.location.href} />
          <meta name="twitter:creator" content="@mirketgiller" />
        </Helmet>
      </motion.div>
    </HelmetProvider>
  );
}

export default ContactPage;
