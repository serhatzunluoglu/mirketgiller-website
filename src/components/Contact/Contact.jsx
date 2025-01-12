// Stylesheet imports
import style from './style.module.scss';

// Third-party library imports
import { useEffect } from 'react';
import Inputmask from 'inputmask';

function Contact() {
  useEffect(() => {
    // Telefon numarası giriş alanına maske uygula
    const phoneInput = document.getElementById('phone');
    Inputmask('0 (999) 999 99 99').mask(phoneInput);
  }, []);

  return (
    <div
      className={`${style.contactContainer} mx-auto flex max-w-7xl items-center flex-col pt-[50px] pb-[90px] px-8 gap-[60px]`}
    >
      <div className="hero-content flex flex-col items-center sm:w-[90%] md:w-[80%] gap-3 lg:w-[65%] xl:w-[65%]">
        <h3 className="heading-5 md:text-heading-3 primary-color">
          Bize Ulaşın
        </h3>
        <p className="text-center body-medium-regular primary-text-color">
          Hayallerinizi gerçeğe dönüştürmek için buradayız! Sorularınızı
          yanıtlamak, projelerinizi desteklemek ve birlikte çalışmanın yollarını
          keşfetmek için bizimle iletişime geçin.
        </p>
        <p className="primary-text-color flex items-center gap-1">
          İletişim:
          <a href="#" className="text-center body-medium-bold primary-color">
            lorem@ipsum.com
          </a>
        </p>
      </div>

      <form className="form-layout flex flex-col items-center gap-6 w-full">
        <div className="form-row flex flex-col sm:flex-row items-center gap-6 w-full">
          <div className="input-container flex flex-col gap-2 w-full">
            <label
              htmlFor="fullname"
              className="body-small-medium primary-color"
            >
              Ad Soyad *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="px-4 py-3 border-[#D37C26] border body-medium-regular rounded-lg w-full focus:outline-[#D37C26]"
            />
          </div>

          <div className="input-container flex flex-col gap-2 w-full">
            <label htmlFor="email" className="body-small-medium primary-color">
              E-posta Adresi *
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              className="px-4 py-3 border-[#D37C26] border body-medium-regular rounded-lg w-full focus:outline-[#D37C26]"
            />
          </div>
        </div>

        <div className="form-row flex flex-col sm:flex-row items-center gap-6 w-full">
          <div className="input-container flex flex-col gap-2 w-full">
            <label htmlFor="phone" className="body-small-medium primary-color">
              Telefon Numaranız
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="0 (___) ___ __ __"
              className="px-4 py-3 border-[#D37C26] border body-medium-regular rounded-lg w-full focus:outline-[#D37C26]"
            />
          </div>

          <div className="input-container flex flex-col gap-2 w-full">
            <label
              htmlFor="subject"
              className="body-small-medium primary-color"
            >
              Konu *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="İş Birliği Hk."
              className="px-4 py-3 border-[#D37C26] border body-medium-regular rounded-lg w-full focus:outline-[#D37C26]"
            />
          </div>
        </div>

        <div className="form-row flex items-center gap-6 w-full">
          <div className="input-container flex flex-col gap-2 w-full">
            <label
              htmlFor="message"
              className="body-small-medium primary-color"
            >
              Mesajınız *
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Mesajınızı yazın..."
              className="px-4 py-3 border-[#D37C26] border body-medium-regular rounded-lg w-full focus:outline-[#D37C26] h-[172px]"
            />
          </div>
        </div>

        <div className="button-container flex justify-start w-full">
          <input
            type="button"
            value="Gönder"
            className="body-medium-regular w-[240px] primary-color-bg py-4 rounded-full text-white hover:bg-[#eb9035]"
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
