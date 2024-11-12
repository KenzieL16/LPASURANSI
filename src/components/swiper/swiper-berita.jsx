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
import Image from "next/image";
import { title } from "process";

export default function SwiperBeritaComponent({ sWidth }) {
  const news = [
    {
      title: "Begini Siasat Mencegah Motor Anti Mogok",
      image: "Begini Siasat Mencegah Motor Anti Mogok.jpg",
      url: "begini-siasat-mencegah-motor-anti-mogok",
    },
    {
      title: "Safety Riding",
      image: "Safety Riding Cara Aman Rem Di Tanjakan.jpg",
      url: "safety-riding",
    },
    {
      title: "Mitos Atau Fakta, Ban Motor Kempes Bisa Bikin Boros Bensin?",
      image: "Ban Motor.png",
      url: "https://www.wahanahonda.com/blog/mitos-atau-fakta-ban-motor-kempes-bisa-bikin-boros-bensin",
    },
    {
      title: "Cara Mudah Mereset Indikator Oli Berkedip",
      image: "Indikator Motor.png",
      url: "https://www.wahanahonda.com/blog/cara-mudah-mereset-indikator-oli-berkedip",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={sWidth < 1024 ? 3 : 5}
        slidesPerView={sWidth < 1024 ? 3 : 4}
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
        {news.map((value, index) => {
          return (
            <SwiperSlide key={value + " " + index}>
              <a
                className="h-auto flex items-center justify-center cursor-pointer"
                href={value.url.startsWith("http") ? value.url : "blog/" + value.url}
              >
                <div className="h-[35vw] sm:h-[270px] md:h-[300px] xl:h-[320px] w-full bg-cyan-50 p-1 lg:p-2 rounded-md flex flex-col justify-between">
                  <div className="w-full">
                    <div className="w-full aspect-video bg-red-400 rounded-md">
                      <Image
                        src={"/images/blog/" + value.image}
                        alt="illustrasi-1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="w-full text-left mt-2">
                      <p className="text-[2.1vw] md:text-[16px] lg:text-lg font-bold underline">{value.title}</p>
                    </div>
                  </div>
                  <div className="w-full text-left">
                    <p className="text-[2.1vw] md:text-[16px] lg:text-lg  text-blue-500">Selengkapnya</p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          );
        })}

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
