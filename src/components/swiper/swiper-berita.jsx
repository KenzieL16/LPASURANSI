"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

export default function SwiperBeritaComponent() {
  return (
    <>
    <Swiper
      spaceBetween={3}
      slidesPerView={4}
      grabCursor={true}
      loop={true}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      className="p-8 w-10/12"
    >
      <SwiperSlide>
        <div className="h-auto flex items-center justify-center">
          <div className="h-[25vw] w-full bg-cyan-50 p-1 rounded-md flex flex-col justify-between">
            <div className="w-full">
              <div className="w-full aspect-video bg-red-400 rounded-md"></div>
              <div className="w-full text-left mt-2">
                <p className="text-xs font-bold underline">Mengenal Teknologi Penggerak elektrik</p>
              </div>
            </div>
            <div className="w-full text-left">
              <p className="text-xs text-blue-500">Selengkapnya</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-auto flex items-center justify-center">
          <div className="h-[25vw] w-full bg-cyan-50 p-1 rounded-md flex flex-col justify-between">
            <div className="w-full">
              <div className="w-full aspect-video bg-red-400 rounded-md"></div>
              <div className="w-full text-left mt-2">
                <p className="text-xs font-bold underline">Mengenal Teknologi Penggerak elektrik</p>
              </div>
            </div>
            <div className="w-full text-left">
              <p className="text-xs text-blue-500">Selengkapnya</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-auto flex items-center justify-center">
          <div className="h-[25vw] w-full bg-cyan-50 p-1 rounded-md flex flex-col justify-between">
            <div className="w-full">
              <div className="w-full aspect-video bg-red-400 rounded-md"></div>
              <div className="w-full text-left mt-2">
                <p className="text-xs font-bold underline">Mengenal Teknologi Penggerak elektrik</p>
              </div>
            </div>
            <div className="w-full text-left">
              <p className="text-xs text-blue-500">Selengkapnya</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-auto flex items-center justify-center">
          <div className="h-[25vw] w-full bg-cyan-50 p-1 rounded-md flex flex-col justify-between">
            <div className="w-full">
              <div className="w-full aspect-video bg-red-400 rounded-md"></div>
              <div className="w-full text-left mt-2">
                <p className="text-xs font-bold underline">Mengenal Teknologi Penggerak elektrik</p>
              </div>
            </div>
            <div className="w-full text-left">
              <p className="text-xs text-blue-500">Selengkapnya</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-auto flex items-center justify-center">
          <div className="h-[25vw] w-full bg-cyan-50 p-1 rounded-md flex flex-col justify-between">
            <div className="w-full">
              <div className="w-full aspect-video bg-red-400 rounded-md"></div>
              <div className="w-full text-left mt-2">
                <p className="text-xs font-bold underline">Mengenal Teknologi Penggerak elektrik</p>
              </div>
            </div>
            <div className="w-full text-left">
              <p className="text-xs text-blue-500">Selengkapnya</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-auto flex items-center justify-center">
          <div className="h-[25vw] w-full bg-cyan-50 p-1 rounded-md flex flex-col justify-between">
            <div className="w-full">
              <div className="w-full aspect-video bg-red-400 rounded-md"></div>
              <div className="w-full text-left mt-2">
                <p className="text-xs font-bold underline">Mengenal Teknologi Penggerak elektrik</p>
              </div>
            </div>
            <div className="w-full text-left">
              <p className="text-xs text-blue-500">
                Selengkapnya
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </div>
        <div className="swiper-button-next slider-arrow">
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div>
        <div className="swiper-pagination"></div>
      </div> */}
    </Swiper>
    <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </div>
        <div className="swiper-button-next slider-arrow">
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div>
        <div className="swiper-pagination"></div>
      </div>
      </>
  );
}
