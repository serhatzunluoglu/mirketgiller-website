import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import mirketLogo from '../../assets/images/svg/mirketgiller-orange-logo.svg';
import sunSvg from '../../assets/images/svg/sun.svg';
import moonSvg from '../../assets/images/svg/moon.svg';

import './styles.scss';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-6xl items-center justify-between py-10 px-8 sm:px-2"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Mirketgiller</span>
            <img alt="mirket-logo" src={mirketLogo} className="h-8 w-auto" />
          </a>
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
        <div className="hidden lg:flex lg:gap-x-6 lg:justify-end primary-color">
          <a href="#" className="text-base/9 font-semibold">
            Düzenlediğimiz Etkinlikler
          </a>
          <a href="#" className="text-base/9 font-semibold">
            Hakkımızda
          </a>
          <a href="#" className="text-base/9 font-semibold">
            İletişim
          </a>
          <a href="#" className="text-base/9 font-semibold">
            Blog
          </a>
          <div className="theme-switcher flex justify-center gap-2">
            <div className="theme-light w-9 flex justify-center primary-color-bg rounded-full p-2.5 cursor-pointer">
              <img src={sunSvg} alt="sun-icon" />
            </div>
            <div className="theme-dark w-9 flex justify-center cursor-pointer p-2.5">
              <img className="w-4 h-4" src={moonSvg} alt="moon-icon" />
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
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white py-10 px-8 sm:px-0 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Mirketgiller</span>
              <img
                alt="mirketgiller-logo"
                src={mirketLogo}
                className="h-8 w-auto"
              />
            </a>
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
            <div className="-my-6 divide-y divide-gray-500/10 primary-color">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                >
                  Düzenlediğimiz Etkinlikler
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                >
                  Hakkımızda
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                >
                  İletişim
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                >
                  Blog
                </a>
                <div className="theme-switcher flex gap-2">
                  <div className="theme-light w-9 flex justify-center primary-color-bg rounded-full p-2.5 cursor-pointer">
                    <img src={sunSvg} alt="sun-icon" />
                  </div>
                  <div className="theme-dark w-9 flex justify-center cursor-pointer p-2.5">
                    <img className="w-4 h-4" src={moonSvg} alt="moon-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
