"use client";

import Image from "next/image";
import Accordion from "@/components/accordion/accordion";
import SwiperComponent from "@/components/swiper/swiper";
import SwiperBeritaComponent from "@/components/swiper/swiper-berita";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
    
    <div className="w-full">
    <header className="w-full h-auto">
      <Image
          src={"/images/lpasuransi/header/Header.png"}
          alt="illustrasi-1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />

    </header>

      <div>
        <SwiperComponent />
      </div>
      <div className="bg-red-700 w-full h-auto px-4 py-2">
        <p className="text-[6.4vw] text-white font-bold text-center">Aman dan nyaman di jalan!</p>
        <p className="text-white text-center text-[3.3vw]">Dapatkan perlindungan untuk motor kesayanganmu</p>
      </div>


      <div className="w-full bg-white relative">
        <div className="absolute left-[5.5vw] top-[2.7vw] ">
          <p className="text-[5.5vw] font-extrabold ">PREMI MULAI DARI</p>
        </div>
        <motion.div
            animate={{ scale: [1, 1.1, 1] }} // Scale up to 1.2, then back to 1
            transition={{
              duration: 0.8, // Duration of one complete cycle
              repeat: Infinity, // Loop the animation infinitely
              repeatType: "loop", // Loop type
              ease: "easeInOut", // Easing function for smooth transitions
            }}
            className="absolute left-[16.5vw] md:left-[8vw] top-[9.3vw]"
            style={{
              // backgroundColor: "tomato",
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className="text-[7vw] font-bold text-red-700 -ml-11 -mt-5">Rp</p>
            <p className="text-[8.5vw] font-bold text-red-700">50.000-an</p>
        </motion.div>
        <div className="h-auto w-[37vw] absolute left-[5.5vw] top-[23vw]">
          <a className="cursor-pointer" href="https://wa.me/082124744961">
          
          <Image
          src={"/images/lpasuransi/Button_Penawaran.png"}
          alt="illustrasi-1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        </a>
        </div>
        <Image
          src={"/images/lpasuransi/Illustration.png"}
          alt="illustrasi-1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        
      </div>


      <div className="w-full h-auto py-4 bg-red-700 flex justify-center">
        <br />
          <div className="w-10/12 leading-6 md:leading-9">
              <p className="text-white font-extrabold text-left text-[3.5vw]">Kenapa saya perlu memiliki asuransi motor?</p>
              <p className="text-white text-justify text-[2vw]">Asuransi motor memberikan kamu perlindungan maksimal dengan premi yang minimal. Tersedia pilihan yang beragam sesuai kebutuhan dan gaya hidupmu, mulai dari TLO, LiMo, dan Compre. Masing - masing asuransi motor didukung dengan manfaat yang dirancang menanggung yang terpenting dalam berkendara</p>
          </div>
      </div>



      <div className="h-auto bg-slate-400 py-3 relative">
        <br />
        <SwiperBeritaComponent />
      </div>

      <div className="w-full">
        <br />
        <br />
        <div className="w-full flex items-center justify-center">
          <Accordion />
        </div>
        <br />
        <br />
      </div>

      {/* footer */}
      <footer className="w-full h-auto bg-slate-200 grid grid-cols-12 px-8 py-4">
        <div className="h-full col-span-3 flex items-center">
          <Image
          src={"/images/lpasuransi/footer/Footer_Reliance.png"}
          alt="illustrasi-1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="h-full flex items-center col-span-4">
          <Image
          src={"/images/lpasuransi/footer/Footer_Sinarmas.png"}
          alt="illustrasi-1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="ml-6"
          />
        </div>
        <div className="h-auto col-span-2">
        </div>
        <div className="h-auto col-span-3">
          <Image
          src={"/images/lpasuransi/footer/Footer_OJK.PNG"}
          alt="illustrasi-1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          />
        </div>

      </footer>
    </div>
    </div>
  );
}
