import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.scss";

// import required modules
import { Autoplay,Pagination, Navigation } from "swiper";

export default function App() {
  let [ImageData, setBanners] = useState([]);

  useEffect(() => { 
    fetch("http://localhost:5000/banners")
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        console.log(jsonRes);
        setBanners(
          ImageData = jsonRes
        );
        console.log(ImageData)
      }).catch((err) => { // error resp
        console.log(err);
      }).finally(() => { // be it success/error -- this will be called
        console.log("It is over!");
      });
  }, []);

  let offers = null;
  offers = ImageData.map((banner ,index)=> {
    return <SwiperSlide key={index}><img src={banner.bannerImageUrl} alt={banner.bannerImageAlt}/></SwiperSlide>
  }) 


  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        {ImageData.length? 
        offers:
        <div>Offers not found!!</div>}
      </Swiper>
    </>
  );
}
