import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent: React.FC = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      swiper.destroy(); // 컴포넌트 언마운트 시 Swiper 제거
    };
  }, []);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>

      {/* 네비게이션 버튼 */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>

      {/* 페이지네이션 */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SwiperComponent;
