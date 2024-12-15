// Third-party library imports
import { useEffect, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

// Asset imports (images and SVGs)
import mirketLogo from '../../assets/images/svg/mirketgiller-orange-logo.svg';
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
  const { theme, handleThemeChange } = useAppContext();
  const { pathname } = useLocation();
  const hoverClass =
    theme === 'light' ? 'hover:bg-gray-50' : 'hover:bg-neutral-900';
  useEffect(() => {
    if (theme === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  return (
    <header>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between py-10 px-8"
      >
        <div className="flex lg:flex-1">
          <Link to={'/'} className="-m-1.5 p-1.5">
            <span className="sr-only">Mirketgiller</span>
            <img alt="mirket-logo" src={mirketLogo} className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6 primary-color" />
          </button>
        </div>
        <div className="nav-right hidden lg:flex lg:gap-x-6 lg:justify-end primary-color">
          <Link
            to={'/'}
            className={`text-base/9 font-semibold ${
              pathname === '/' && 'active-link'
            }`}
          >
            Ana Sayfa
          </Link>
          <Link
            to={'/etkinliklerimiz'}
            className={`text-base/9 font-semibold ${
              pathname === '/etkinliklerimiz' && 'active-link'
            }`}
          >
            Etkinliklerimiz
          </Link>
          <Link
            to={'/hakkimizda'}
            className={`text-base/9 font-semibold ${
              pathname === '/hakkimizda' && 'active-link'
            }`}
          >
            Hakkımızda
          </Link>
          <Link
            to={'/iletisim'}
            className={`text-base/9 font-semibold ${
              pathname === '/iletisim' && 'active-link'
            }`}
          >
            İletişim
          </Link>
          <Link
            to={'/blog'}
            className={`text-base/9 font-semibold ${
              pathname === '/blog' && 'active-link'
            }`}
          >
            Blog
          </Link>
          <div className="theme-switcher flex justify-center gap-2">
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
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel
          className={`flex flex-col h-full fixed primary-color inset-y-0 right-0 z-10 w-full overflow-y-auto py-10 px-8 lg:px-0 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 custom-left-border ${
            theme === 'light' ? 'bg-white' : 'secondary-color-bg'
          }`}
        >
          <div className="flex items-center justify-between">
            <Link to={'/'} className="-m-1.5 p-1.5">
              <span className="sr-only">Mirketgiller</span>
              <img
                alt="mirketgiller-logo"
                src={mirketLogo}
                className="h-8 w-auto"
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
              <div className="space-y-2 py-6">
                <Link
                  to={'/'}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-lg/7 font-semibold ${
                    pathname === '/' ? hoverClass : ''
                  }`}
                >
                  Ana Sayfa
                </Link>
                <Link
                  to={'/etkinliklerimiz'}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-lg/7 font-semibold ${
                    theme === 'light'
                      ? 'hover:bg-gray-50'
                      : 'hover:bg-neutral-900'
                  } ${pathname === '/etkinliklerimiz' && 'font-bold'}`}
                >
                  Etkinliklerimiz
                </Link>
                <Link
                  to={'/hakkimizda'}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-lg/7 font-semibold ${
                    theme === 'light'
                      ? 'hover:bg-gray-50'
                      : 'hover:bg-neutral-900'
                  } ${pathname === '/hakkimizda' && 'font-bold'}`}
                >
                  Hakkımızda
                </Link>
                <Link
                  to={'/iletisim'}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-lg/7 font-semibold ${
                    theme === 'light'
                      ? 'hover:bg-gray-50'
                      : 'hover:bg-neutral-900'
                  } ${pathname === '/iletisim' && 'font-bold'}`}
                >
                  İletişim
                </Link>
                <Link
                  to={'/blog'}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${
                    theme === 'light'
                      ? 'hover:bg-gray-50'
                      : 'hover:bg-neutral-900'
                  } ${pathname === '/blog' && 'font-bold'}`}
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
        </DialogPanel>
      </Dialog>
    </header>
  );
}
