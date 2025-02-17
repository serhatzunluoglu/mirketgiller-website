// Stylesheet imports
import style from './style.module.scss';

// Third-party library imports
import { useEffect, useState } from 'react';
import Inputmask from 'inputmask';
import { Link } from 'react-router-dom';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import postContact from '../../services/contactService';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    privacy_policy_consent: 0,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value,
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
    if (!formData.privacy_policy_consent)
      formErrors.privacy_policy_consent =
        "KVKK Aydınlatma Metni'ni onaylamadan devam edemezsiniz.";
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      Object.values(formErrors).forEach((err) => {
        toast.error(err, {
          style: {
            color: '#d37c26',
          },
        });
      });
    }

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setError(null);
      setSuccess(null);

      try {
        const payload = {
          ...formData,
          full_name: formData.name, // name yerine full_name kullanılıyor
          privacy_policy_consent: formData.privacy_policy_consent ? 1 : 0, // Kesin olarak 1 veya 0 olacak
        };
        delete payload.name; // name alanını kaldır
        const response = await postContact(payload);
        setSuccess('Mesajınız başarıyla gönderildi!');
        toast.success('Mesajınız başarıyla gönderildi!', {
          style: {
            color: '#d37c26',
          },
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          privacy_policy_consent: 0,
        });
      } catch (err) {
        setError('Bir hata oluştu, lütfen tekrar deneyin.');
        toast.error('Bir hata oluştu, lütfen tekrar deneyin.', {
          style: {
            color: '#d37c26',
          },
        });
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
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
              href="mailto:mirketgillerresmi@gmail.com"
              className="text-center text-body-sm-bold sm:text-body-md-bold primary-color"
            >
              mirketgillerresmi@gmail.com
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
                value={formData.phone}
                onChange={handleChange}
                type="text"
                id="phone"
                name="phone"
                placeholder="0 (___) ___ __ __"
                className="px-4 py-3 border-[#D37C26] border text-body-sm-regular sm:text-body-md-regular rounded-lg w-full focus:outline-[#D37C26]"
                inputMode="numeric"
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
                className="px-4 py-3 border-[#D37C26] border text-body-sm-regular sm:text-body-md-regular rounded-lg w-full focus:outline-[#D37C26] h-[120px] min-h-[120px]"
              />
            </div>
          </div>

          <div className="button-container flex flex-col items-start gap-4 mt-6 w-full">
            <label className={style.checkBoxContainer}>
              <input
                type="checkbox"
                name="privacy_policy_consent"
                checked={formData.privacy_policy_consent}
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
              disabled={loading}
            >
              {loading ? 'Gönderiliyor...' : 'Gönder'}
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
