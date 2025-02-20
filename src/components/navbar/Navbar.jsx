// Third-party library imports
import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Asset imports (images and SVGs)
import mirketLogo from '../../assets/images/svg/mirketgiller-orange-logo.svg';
import mirketWhiteLogo from '../../assets/images/svg/mirketgiller-white-logo.svg';
import sunSvg from '../../assets/images/svg/sun-white.svg';
import sunDarkSvg from '../../assets/images/svg/sun-orange.svg';
import moonSvg from '../../assets/images/svg/moon-orange.svg';
import moonDarkSvg from '../../assets/images/svg/moon-white.svg';

// Stylesheet imports
import './styles.scss';

// Other imports
import { useAppContext } from '../../context/AppContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const { theme, handleThemeChange } = useAppContext();
  const { pathname } = useLocation();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  useEffect(() => {
    window.addEventListener('load', () => {
      handleScroll();
    });
  }, []);

  function handleScroll() {
    let navbar = document.querySelector('header');
    let scrollY = window.scrollY;

    if (scrollY > 20) {
      navbar.classList.add('scrolled');
      setNavbarScrolled(true);
    } else {
      navbar.classList.remove('scrolled');
      setNavbarScrolled(false);
    }
  }

  window.addEventListener('scroll', () => {
    handleScroll();
  });

  return (
    <header className="sticky top-0 z-30">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between py-8 px-8 sm:py-10"
      >
        <div className="flex lg:flex-1 z-10">
          <Link to={'/'} className="-m-1.5 p-1.5">
            <span className="sr-only">Mirketgiller</span>
            <img
              alt="mirketgiller-logo"
              src={`${
                pathname === '/'
                  ? `${
                      theme === 'dark'
                        ? mirketLogo
                        : `${navbarScrolled ? mirketLogo : mirketWhiteLogo}`
                    }`
                  : `${mirketLogo}`
              }`}
              className="h-6 sm:h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden z-10">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6 primary-color" />
          </button>
        </div>
        <div
          className={`nav-right hidden lg:flex lg:gap-x-6 lg:justify-end ${
            pathname === '/'
              ? `${
                  theme === 'dark'
                    ? `${navbarScrolled ? 'color-808080' : 'color-808080'}`
                    : `${navbarScrolled ? 'color-808080' : 'text-white'}`
                }`
              : `${'color-808080'}`
          }`}
        >
          <Link
            to={'/'}
            className={`text-base/9 font-semibold ${
              pathname === '/' && 'active-link primary-color'
            }`}
          >
            Ana Sayfa
          </Link>
          <Link
            to={'/etkinliklerimiz'}
            className={`text-base/9 font-semibold ${
              pathname === '/etkinliklerimiz' && 'active-link primary-color'
            }`}
          >
            Etkinliklerimiz
          </Link>
          <Link
            to={'/hakkimizda'}
            className={`text-base/9 font-semibold ${
              pathname === '/hakkimizda' && 'active-link primary-color'
            }`}
          >
            Hakkımızda
          </Link>
          <Link
            to={'/iletisim'}
            className={`text-base/9 font-semibold ${
              pathname === '/iletisim' && 'active-link primary-color'
            }`}
          >
            İletişim
          </Link>
          <Link
            to={'/blog'}
            className={`text-base/9 font-semibold ${
              pathname === '/blog' && 'active-link primary-color'
            }`}
          >
            Blog
          </Link>
          <div className="theme-switcher flex justify-center gap-2 z-10">
            <div
              className={`theme-light w-9 h-9 flex justify-center p-2.5 cursor-pointer rounded-full ${
                theme === 'light' ? 'primary-color-bg' : 'border-1-primary'
              }`}
              onClick={() => handleThemeChange('light')}
            >
              <img
                src={theme === 'dark' ? sunDarkSvg : sunSvg}
                alt="sun-icon"
              />
            </div>
            <div
              className={`theme-dark w-9 h-9 flex justify-center cursor-pointer p-2.5 rounded-full ${
                theme === 'dark' ? 'primary-color-bg' : 'border-1-primary'
              }`}
              onClick={() => handleThemeChange('dark')}
            >
              <img
                className="w-4 h-4"
                src={theme === 'dark' ? moonDarkSvg : moonSvg}
                alt="moon-icon"
              />
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-10" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`flex flex-col h-full fixed primary-color inset-y-0 right-0 w-full overflow-y-auto py-8 px-8 sm:py-10 lg:px-0 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 custom-left-border z-40 ${
                theme === 'light' ? 'bg-white' : 'secondary-color-bg'
              }`}
            >
              <div className="flex items-center justify-between">
                <Link to={'/'} className="-m-1.5 p-1.5">
                  <span className="sr-only">Mirketgiller</span>
                  <img
                    alt="mirketgiller-logo"
                    src={mirketLogo}
                    className="h-6 sm:h-8 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 primary-color"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 color-808080">
                    <Link
                      to={'/'}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-lg/7 font-semibold ${
                        pathname === '/' && 'primary-color'
                      } ${
                        pathname === '/'
                          ? theme === 'light'
                            ? 'bg-gray-50'
                            : 'bg-neutral-900'
                          : ''
                      }`}
                    >
                      Ana Sayfa
                    </Link>
                    <Link
                      to={'/etkinliklerimiz'}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-lg/7 font-semibold ${
                        pathname === '/etkinliklerimiz' && 'primary-color'
                      } ${
                        pathname === '/etkinliklerimiz'
                          ? theme === 'light'
                            ? 'bg-gray-50'
                            : 'bg-neutral-900'
                          : ''
                      }`}
                    >
                      Etkinliklerimiz
                    </Link>
                    <Link
                      to={'/hakkimizda'}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-lg/7 font-semibold ${
                        pathname === '/hakkimizda' && 'primary-color'
                      } ${
                        pathname === '/hakkimizda'
                          ? theme === 'light'
                            ? 'bg-gray-50'
                            : 'bg-neutral-900'
                          : ''
                      }`}
                    >
                      Hakkımızda
                    </Link>
                    <Link
                      to={'/iletisim'}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-lg/7 font-semibold ${
                        pathname === '/iletisim' && 'primary-color'
                      } ${
                        pathname === '/iletisim'
                          ? theme === 'light'
                            ? 'bg-gray-50'
                            : 'bg-neutral-900'
                          : ''
                      }`}
                    >
                      İletişim
                    </Link>
                    <Link
                      to={'/blog'}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${
                        pathname === '/blog' && 'primary-color'
                      } ${
                        pathname === '/blog'
                          ? theme === 'light'
                            ? 'bg-gray-50'
                            : 'bg-neutral-900'
                          : ''
                      }`}
                    >
                      Blog
                    </Link>
                    <div className="theme-switcher flex gap-2 mt-4">
                      <div
                        className={`theme-light w-9 h-9 flex justify-center p-2.5 cursor-pointer rounded-full ${
                          theme === 'light'
                            ? 'primary-color-bg'
                            : 'border-1-primary'
                        }`}
                        onClick={() => handleThemeChange('light')}
                      >
                        <img
                          src={theme === 'dark' ? sunDarkSvg : sunSvg}
                          alt="sun-icon"
                        />
                      </div>
                      <div
                        className={`theme-dark w-9 h-9 flex justify-center cursor-pointer p-2.5 rounded-full ${
                          theme === 'dark'
                            ? 'primary-color-bg'
                            : 'border-1-primary'
                        }`}
                        onClick={() => handleThemeChange('dark')}
                      >
                        <img
                          className="w-4 h-4"
                          src={theme === 'dark' ? moonDarkSvg : moonSvg}
                          alt="moon-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-media mt-auto">
                <div className="social-media-title text-lg leading-[26px] font-semibold">
                  Sosyal Medya
                </div>
                <div className="social-media-icons">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/mirketgiller_/"
                    alt="mirketgiller-instagram"
                  >
                    <i className="bi bi-instagram"> </i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/mirketgiller/"
                    alt="mirketgiller-linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>

                  <a
                    target="_blank"
                    href="https://www.youtube.com/@mirketgiller?sub_confirmation=1&sub_confirmation=1"
                    alt="mirketgiller-youtube"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://medium.com/@mirketgillerresmi"
                    alt="mirketgiller-medium"
                  >
                    <i className="bi bi-medium"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
