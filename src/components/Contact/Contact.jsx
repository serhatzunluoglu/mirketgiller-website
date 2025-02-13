// Stylesheet imports
import style from './style.module.scss';

// Third-party library imports
import { useEffect, useState } from 'react';
import Inputmask from 'inputmask';
import { Link } from 'react-router-dom';
import { toast, ToastContainer, Bounce } from 'react-toastify';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'İsim alanı zorunludur.';
    if (!formData.email) {
      formErrors.email = 'Email alanı zorunludur.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Geçerli bir email girin.';
    }
    if (!formData.subject) formErrors.subject = 'Konu alanı zorunludur.';
    if (!formData.message) formErrors.message = 'Mesaj alanı zorunludur.';
    if (!formData.agree)
      formErrors.agree =
        "KVKK Aydınlatma Metni'ni onaylamadan devam edemezsiniz.";
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      // Hataları Toastify ile göster
      Object.values(formErrors).forEach((err) => {
        toast.error(err, {
          style: {
            color: '#d37c26', // Yazı rengi
          },
        });
      });
    }

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form başarıyla gönderildi!');
    }
  };

  useEffect(() => {
    // Telefon numarası giriş alanına maske uygula
    const phoneInput = document.getElementById('phone');
    Inputmask('0 (999) 999 99 99').mask(phoneInput);
  }, []);

  return (
    <>
      <div
        className={`${style.contactContainer} mx-auto flex max-w-7xl items-center flex-col pt-6 md:pt-[50px] pb-[90px] px-8 gap-12 md:gap-[60px]`}
      >
        <div className="hero-content flex flex-col items-center sm:w-[90%] md:w-[80%] gap-3 lg:w-[65%] xl:w-[65%]">
          <h1 className="heading-5 md:text-heading-3 primary-color">
            Bize Ulaşın
          </h1>
          <p className="text-center text-body-sm-regular sm:text-body-md-regular primary-text-color">
            Hayallerinizi gerçeğe dönüştürmek için buradayız! Sorularınızı
            yanıtlamak, projelerinizi desteklemek ve birlikte çalışmanın
            yollarını keşfetmek için bizimle iletişime geçin.
          </p>
          <p className="text-body-sm-regular sm:text-body-md-regular primary-text-color flex items-center gap-1">
            İletişim:
            <a
              href="#"
              className="text-center text-body-sm-bold sm:text-body-md-bold primary-color"
            >
              lorem@ipsum.com
            </a>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="form-layout flex flex-col items-center gap-6 w-full "
        >
          <div className="form-row flex flex-col sm:flex-row items-center gap-6 w-full">
            <div className="input-container flex flex-col gap-2 w-full">
              <label
                htmlFor="fullname"
                className="body-small-medium primary-color"
              >
                Ad Soyad *
              </label>
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="px-4 py-3 border-[#D37C26] border text-body-sm-regular sm:text-body-md-regular rounded-lg w-full focus:outline-[#D37C26]"
              />
            </div>

            <div className="input-container flex flex-col gap-2 w-full">
              <label
                htmlFor="email"
                className="body-small-medium primary-color"
              >
                E-posta Adresi *
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="text"
                id="email"
                name="email"
                placeholder="johndoe@example.com"
                className="px-4 py-3 border-[#D37C26] border text-body-sm-regular sm:text-body-md-regular rounded-lg w-full focus:outline-[#D37C26]"
              />
            </div>
          </div>

          <div className="form-row flex flex-col sm:flex-row items-center gap-6 w-full">
            <div className="input-container flex flex-col gap-2 w-full">
              <label
                htmlFor="phone"
                className="body-small-medium primary-color"
              >
                Telefon Numaranız
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="0 (___) ___ __ __"
                className="px-4 py-3 border-[#D37C26] border text-body-sm-regular sm:text-body-md-regular rounded-lg w-full focus:outline-[#D37C26]"
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
                value={formData.subject}
                onChange={handleChange}
                type="text"
                id="subject"
                name="subject"
                placeholder="İş Birliği Hk."
                className="px-4 py-3 border-[#D37C26] border text-body-sm-regular sm:text-body-md-regular rounded-lg w-full focus:outline-[#D37C26]"
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
                value={formData.message}
                onChange={handleChange}
                type="text"
                id="message"
                name="message"
                placeholder="Mesajınızı yazın..."
                className="px-4 py-3 border-[#D37C26] border text-body-sm-regular sm:text-body-md-regular rounded-lg w-full focus:outline-[#D37C26] h-[172px]"
              />
            </div>
          </div>

          <div className="button-container flex flex-col items-start gap-4 mt-6 w-full">
            <label className={style.checkBoxContainer}>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <div className={style.checkmark}></div>
              <span className="sm:inline-flex items-end text-body-sm-regular sm:text-body-md-regular">
                <Link
                  to="/kvkk"
                  className="primary-color hover:underline text-body-sm-regular sm:text-body-md-regular font-bold sm:font-bold"
                >
                  KVKK Aydınlatma Metni
                </Link>
                &apos;ni okudum ve onaylıyorum.
              </span>
            </label>
            <button
              type="submit"
              className="text-body-sm-regular sm:text-body-md-regular w-full sm:w-[240px] primary-color-bg py-4 rounded-full text-white hover:bg-[#eb9035]"
            >
              Gönder
            </button>
          </div>
        </form>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </>
  );
}

export default Contact;
