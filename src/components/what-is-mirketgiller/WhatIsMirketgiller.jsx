import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';
import dots from '../../assets/images/dots.png';

function WhatIsMirketgiller() {
  return (
    <div
      className={`${style.whatIsMirketgillerContainer} mx-auto flex items-center justify-center py-16 md:py-[90px] bg-[#F9FAFB]`}
    >
      <div className="what-is-mirketgiller max-w-7xl px-8 flex items-center gap-16 lg:gap-[100px] flex-col lg:flex-row">
        <div className="images-container flex items-center gap-0 w-full md:w-[80%] lg:w-1/2 h-max-[670px]">
          <div className="left-column w-1/2 flex flex-col gap-5 sm:gap-6 md:gap-8 h-fit justify-center">
            <img
              src="https://placehold.co/270x320"
              alt=""
              className="aspect-[27/32] w-[90%] object-cover rounded-[16px]"
            />
            <img
              src="https://placehold.co/270x320"
              alt=""
              className="aspect-[27/32] w-[90%] object-cover rounded-[16px]"
            />
          </div>
          <div className="right-column w-1/2 h-fit flex items-center relative pb-12">
            <img
              src="https://placehold.co/270x400"
              alt=""
              className="aspect-[27/40] w-[90%] object-cover rounded-[16px] z-10"
            />
            <div className="absolute flex w-full h-full justify-end items-end z-0">
              <img
                src={dots}
                alt=""
                className="w-[96px] h-auto sm:w-auto sm:h-auto"
              />
            </div>
          </div>
        </div>

        <div className="content-container flex flex-col w-full md:w-[80%] lg:w-1/2 gap-8">
          <div className="text-container flex flex-col gap-4">
            <p className="text-body-lg-semibold primary-color">
              Nedir bu Mirketgiller 🤔
            </p>
            <h3 className={`${style.textColorWhite} text-heading-3 mg-dark`}>
              Birlikte büyüyen yetenekler
            </h3>
            <p
              className={`${style.textColorWhite} text-body-md-regular primary-text-color text-justify`}
            >
              Selam! Biz, Mirketgiller ailesi olarak üniversite öğrencilerinin
              gelişimini en üst düzeye çıkarmayı amaçlayan bir topluluğuz.
              Amacımız; hep birlikte, birbirimiz için, her bir üniversite
              öğrencisinin potansiyelini maksimum seviyeye çıkarmak.
              Mirketgiller ailesi, sizlere gelişim hedeflerinizde sektörel bazda
              destek sunarken, bu desteği sektörün önde gelen profesyonelleriyle
              birlikte almanıza olanak tanıyor. <br></br>
              <br></br>Bu yolculukta, her bir üniversite öğrencisinin mezuniyet
              öncesinde ulaşabileceği en yüksek noktayı hedeflemesini
              sağlıyoruz.
            </p>
          </div>
          <Link className="py-[12px] w-[230px] flex items-center justify-center primary-color-bg text-white rounded-full text-body-md-medium hover:bg-[#eb9035]">
            Kimler var bu ekipte 👀
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WhatIsMirketgiller;
