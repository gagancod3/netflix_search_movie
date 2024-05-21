import React from "react";
import MovieCard from "./MovieCard";
// import { Carousel } from "@material-tailwind/react";

// Swipper
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles_swipper/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const MovieList = ({ title, content }) => {
  console.log(title, content);
  return (
    <div className="px-6 py-8 bg-black text-white">
      <h1 className="text-xl py-4">{title}</h1>
      {/* <div className='flex overflow-x-scroll no-scrollbar'>
            <div className='flex'> */}
      <Swiper
        // onSwiper={setSwiperRef}
        slidesPerView={5}
        // centeredSlides={true}
        // spaceBetween={3}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {content?.map((movie) => {
          if (movie?.id && movie?.poster_path && movie?.original_title){
          return (
            <SwiperSlide key={movie?.id}>
              <MovieCard
                key={movie?.id}
                movie_poster={movie?.poster_path}
                movie_name={movie?.original_title}
              />
            </SwiperSlide>
          );
          }
          else return null;
        })}
      </Swiper>
      {/* </div>
            </div> */}

      {/* <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}
    </div>
  );
};
export default MovieList;
