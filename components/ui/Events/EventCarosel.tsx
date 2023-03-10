import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import EventCards from "./EventCards";

interface Props {
  events?: { name: string; img: string }[];
  day: string;
}
const EventCarosel = ({ events, day }: Props) => {
  const nextRef = useRef<any>();
  const prevRef = useRef<any>();
  useEffect(() => {});
  const [active, setActive] = useState();
  return (
    <div className="relative w-[96vw] mx-[2vw] overflow-hidden">
      <Image
        src={"blur.svg"}
        alt={"blur"}
        width={100}
        height={100}
        className=" absolute z-[2] w-96 h-60 -right-48 lg:-right-44  top-8 "
      />
      <Image
        src={"blur.svg"}
        alt={"blur"}
        width={100}
        height={100}
        className=" absolute z-[2] w-96 h-60 lg:-left-44  -left-48 top-8 "
      />

      <div className=" flex justify-center relative ">
        <Swiper
          slidesPerGroup={1}
          spaceBetween={100}
          slidesPerView={"auto"}
          centeredSlides={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          navigation={true}
          lazy={true}
          loop={true}
          loopFillGroupWithBlank={true}
          /*pagination={{
          clickable: true,
        }}*/
          breakpoints={{
            200: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1424: {
              slidesPerView: 5,
            },
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper "
        >
          {events?.map((e, i) => {
            return (
              <SwiperSlide key={i}>
                {({ isActive }) => (
                  <EventCards event={e} key={i} active={isActive} />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
    /*<div className="flex justify-center items-center  space-x-16 ">
        
      </div>
       <div className=" flex items-center justify-center">
        {/* 1. }
        <div className="w-[200%]  h-[60vh] overflow-hidden relative">
          {/* 2. }
          <div className="w-[200%] flex items-center h-[60vh] justify-around absolute left-0 animate-carosel gap-20 animate">
            {/* 3 }
            {events?.map((e, i) => {
              return <EventCards event={e} key={i} active={i + 1 == active} />;
            })}
            {events?.map((e, i) => {
              return <EventCards event={e} key={i} active={i + 1 == active} />;
            })}
          </div>
        </div>
      </div>*/
  );
};
const arrow = () => {
  return <div className=""></div>;
};

export default EventCarosel;
