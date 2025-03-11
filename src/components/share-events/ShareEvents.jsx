import React, { useState, useEffect } from 'react';
import {
  Linkedin,
  TwitterX,
  Whatsapp,
  ShareFill,
  Link45deg,
} from 'react-bootstrap-icons';

import style from './style.module.scss';
import { XMarkIcon } from '@heroicons/react/24/outline';

// eslint-disable-next-line react/prop-types
const ShareEvent = ({ eventSlug, eventTitle }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const siteUrl = import.meta.env.VITE_PROXY;
  const eventUrl = `${siteUrl}/etkinliklerimiz/${eventSlug}`;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/shareArticle?url=${eventUrl}&title=${eventTitle}&summary=${eventTitle}&source=Mirketgiller`,
    twitter: `https://twitter.com/intent/tweet?url=${eventUrl}&text=Mirketgiller'i duydun mu? 👀 Eğer duymadıysan, şimdi tam zamanı. 🎉 Link'e tıklayıp ücretsiz kayıl ol ve bu harika etkinlikte yerini al! 🚀 Hemen detaylara göz at: `,
    whatsapp: `https://api.whatsapp.com/send?text=Mirketgiller'i duydun mu? 👀 Eğer duymadıysan, şimdi tam zamanı. 🎉 Link'e tıklayıp ücretsiz kayıl ol ve bu harika etkinlikte yerini al! 🚀 Hemen detaylara göz at: ${eventUrl}`,
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(`${siteUrl}/etkinliklerimiz/${eventSlug}`)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      });
  };

  return (
    <div>
      {/* Share Button */}
      <button
        onClick={toggleModal}
        className="w-full flex gap-3 justify-center items-center mt-6 px-4 py-4 primary-color border border-[#D37C26] hover:bg-[#eb9035] hover:text-white  rounded-lg"
      >
        Paylaş <ShareFill className="h-5 w-5"></ShareFill>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={toggleModal}
          className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${style.darkModal} bg-white rounded-lg p-8 w-96 relative`}
          >
            <h2 className="text-body-lg-semibold screen-380:text-heading-6 font-semibold mb-4 text-primary-color text-center">
              Paylaşım Seçenekleri
            </h2>
            <div className="flex flex-col space-y-3">
              <button
                onClick={toggleModal}
                className="absolute top-2 right-2 bg-primary-color hover:bg-gray-100 dark:bg-secondary-color dark:hover:bg-primary-color rounded-full"
              >
                <XMarkIcon className="h-5 w-5 p-2 box-content text-white hover:text-primary-color dark:text-primary-color dark:hover:text-secondary-color"></XMarkIcon>
              </button>
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener"
                className="flex gap-2 justify-center items-center px-3 py-3 screen-380:px-4 screen-380:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center"
              >
                <Linkedin className="h-5 w-5"></Linkedin> LinkedIn'de Paylaş
              </a>
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener"
                className="flex gap-2 justify-center items-center px-3 py-3 screen-380:px-4 screen-380:py-4 bg-black hover:bg-gray-900 text-white rounded-lg text-center"
              >
                <TwitterX className="h-5 w-5"></TwitterX> X (Twitter)'da Paylaş
              </a>
              <a
                href={shareLinks.whatsapp}
                target="_blank"
                rel="noopener"
                className="flex gap-2 justify-center items-center px-3 py-3 screen-380:px-4 screen-380:py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg text-center"
              >
                <Whatsapp className="h-5 w-5"></Whatsapp> WhatsApp'ta Paylaş
              </a>
              <button
                onClick={copyToClipboard}
                className="flex gap-2 justify-center items-center px-3 py-3 screen-380:px-4 screen-380:py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-center"
              >
                {!isCopied && <Link45deg className="h-5 w-5"></Link45deg>}
                {isCopied ? 'Kopyalandı' : 'Etkinlik Linkini Kopyala'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareEvent;
