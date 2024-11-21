"use client";

import Image from "next/image";
import Accordion from "@/components/accordion/accordion";
import SwiperComponent from "@/components/swiper/swiper";
import SwiperBeritaComponent from "@/components/swiper/swiper-berita";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  const [hasilPremi, setHasilPremi] = useState("0");
  const [otr, setOtr] = useState(0);
  const [rateAsuransi, setRateAsuransi] = useState(2);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let header;
  if (windowWidth > 1023) {
    header = "Header Desktop.png";
  } else if (windowWidth > 768) {
    header = "Header Tablet.png";
  } else {
    header = "Header.png";
  }

  const hitungPremi = (a, b) => {
    const mentah = (a * b) / 100 + (a > 0 && b > 0 ? 50000 : 0);
    if (mentah < 0) {
      return setHasilPremi("0");
    }
    return setHasilPremi(mentah.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  };

  const listBannerMobile = ["Banner.png", "Banner.png", "Banner.png", "Banner.png"];
  const listBannerDesktop = ["Banner Desktop.png", "Banner Desktop.png", "Banner Desktop.png", "Banner Desktop.png"];

  let banners = windowWidth > 1023 ? listBannerDesktop : listBannerMobile;

  return (
    <div className="w-full flex justify-center">
      <div className="w-full">
        <header className="w-full h-auto">
          <Image
            src={"/images/lpasuransi/header/" + header}
            alt="illustrasi-1"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </header>

        <div>
          <SwiperComponent sWidth={windowWidth} banners={banners} />
        </div>
        <div className="bg-red-700 w-full h-auto px-4 py-2">
          <p className="text-[6.4vw] text-white font-bold text-center sm:leading-8 md:leading-tight lg:text-4xl">
            Aman dan nyaman di jalan!
          </p>
          <p className="text-white text-center text-[3.3vw] lg:text-xl">
            Dapatkan perlindungan untuk motor kesayanganmu
          </p>
        </div>

        {windowWidth < 1024 && (
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
              <p className="text-[3.9vw] font-bold text-red-700 -ml-12 -mt-5">Rp</p>
              <p className="text-[8.4vw] font-bold text-red-700">150.000-an</p>
            </motion.div>
            <div className="h-auto w-[37vw] sm:w-[240px] md:w-[280px] left-[10px] top-[23vw] fixed z-10">
              <a
                className="cursor-pointer"
                href="https://wa.me/6289696006006?text=%2ANama%3A%2A%0A%2ADomisili%3A%2A%0A%2ANo%20Hp%20Aktif%3A%2A%0A%2AMerk%3A%2A%0A%2AType%3A%2A%0A%2ATahun%3A%2A%0A%2AMobil%2FMotor%3A%2A%0A%2ATerimakasih%2A"
              >
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
        )}

        {windowWidth > 1023 && (
          <>
            <div className="grid grid-cols-12">
              <div className="h-full col-span-3 bg-black py-2 px-6">
                <p className="text-white font-extrabold text-left text-sm mt-6 xl:text-lg">
                  Kenapa saya perlu memiliki asuransi motor?
                </p>
                <p className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1">
                  Asuransi motor memberikan kamu perlindungan maksimal dengan premi yang minimal. Tersedia pilihan yang
                  beragam sesuai kebutuhan dan gaya hidupmu, mulai dari TLO, TLO+Perluasan, dan Compre. Masing - masing
                  asuransi motor didukung dengan manfaat yang dirancang menanggung yang terpenting dalam berkendara
                </p>
              </div>
              <div className="col-span-9 bg-white relative">
                <div className="absolute left-[30px] top-[25px] ">
                  <p className="text-5xl font-extrabold ">PREMI MULAI DARI</p>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }} // Scale up to 1.2, then back to 1
                  transition={{
                    duration: 0.8, // Duration of one complete cycle
                    repeat: Infinity, // Loop the animation infinitely
                    repeatType: "loop", // Loop type
                    ease: "easeInOut", // Easing function for smooth transitions
                  }}
                  className="absolute left-[30px] md:left-[72px] top-[57px]"
                  style={{
                    // backgroundColor: "tomato",
                    borderRadius: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className="text-[3.9vw] font-bold text-red-700 -ml-12 -mt-5">Rp</p>
                  <p className="text-[5.4vw] font-bold text-red-700">150.000-an</p>
                </motion.div>
                <div className="h-auto w-[37vw] sm:w-[240px] md:w-[280px] left-[30px] top-[23vw] fixed z-10">
                  <a
                    className="cursor-pointer"
                    href="https://wa.me/6289696006006?text=%2ANama%3A%2A%0A%2ADomisili%3A%2A%0A%2ANo%20Hp%20Aktif%3A%2A%0A%2AMerk%3A%2A%0A%2AType%3A%2A%0A%2ATahun%3A%2A%0A%2AMobil%2FMotor%3A%2A%0A%2ATerimakasih%2A"
                  >
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
                  src={"/images/lpasuransi/Illustration Desktop.png"}
                  alt="illustrasi-1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </>
        )}

        {windowWidth < 1024 && (
          <div className="w-full h-auto py-4 bg-red-700 flex justify-center mt-[2px] lg:mt-0">
            <br />
            <div className="w-10/12 leading-6 md:leading-9">
              <p className="text-white font-extrabold text-left text-[3.5vw] sm:text-2xl">
                Kenapa saya perlu memiliki asuransi motor?
              </p>
              <p className="text-white text-justify text-[2.3vw] ">
                Asuransi motor memberikan kamu perlindungan maksimal dengan premi yang minimal. Tersedia pilihan yang
                beragam sesuai kebutuhan dan gaya hidupmu, mulai dari TLO, TLO+Perluasan, dan Compre. Masing - masing
                asuransi motor didukung dengan manfaat yang dirancang menanggung yang terpenting dalam berkendara
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-12 gap-y-1 lg:gap-y-0  md:gap-x-[6px] mt-1 lg:mt-0">
          <div className="h-full col-span-12 md:col-span-6 lg:col-span-3 bg-red-800 py-2 px-6">
            <p className="text-white font-extrabold text-md mt-6 lg:text-lg xl:text-2xl text-center">
              Total Loss Only (TLO)
            </p>
            <br />
            <p className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1">
              Memberikan Jaminan terhadap kerugian apabila kendaraan yang dipertanggungkan mengalami kerugian total
              sebagai akibat dari:
            </p>
            <br />
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Pencurian, perampasan, penodongan atas unit sepeda motor.</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Kecelakaan atau kebakaran dengan nilai kerusakan diatas 75% dari harga pasar sepeda motor.</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>
                Untuk penggantian TLO adalah Market Price (harga pasar) saat terjadinya kehilangan (harga motor second).
              </p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Untuk penggantinya adalah 90% dikembalikan dan 10% resiko sendiri.</p>
            </div>
            <br />
          </div>

          <div className="h-full col-span-12 md:col-span-6 lg:col-span-3 bg-red-800 py-2 px-6">
            <p className="text-white font-extrabold text-md mt-6 lg:text-lg xl:text-2xl text-center">
              TLO + Perluasan A
            </p>
            <br />
            <p className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1">
              Memberikan Jaminan terhadap kerugian apabila kendaraan yang dipertanggungkan mengalami kerugian total
              sebagai akibat:
            </p>
            <br />
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Pencurian, perampasan, penodongan atas unit sepeda motor.</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Hipnotis/Penipuan</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Kerusuhan/Huru-hara</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Terorisme Sabotase</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Musibah Banjir, Angin Topan & Tanah Longsor</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Bencana Alam Gempa Bumi, Tsunami </p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Kerusakan karena Kecelakaan dengan nilai kerusakan diatas 50% dari harga pasar sepeda motor. </p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Penggunaan Komersial Ojek </p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Penggantian New For Old adalah penggantian harga sesuai dengan nilai polis. </p>
            </div>
            <br />

            <p className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1">
              Dengan Resiko Sendiri 10% dan 90% dibayarkan ke konsumen. Berlaku selama 1 tahun (Sampai dengan masa
              berakhirnya polis).
            </p>

            <br />
          </div>

          <div className="h-full col-span-12 md:col-span-6 lg:col-span-3 bg-red-800 py-2 px-6">
            <p className="text-white font-extrabold text-md mt-6 lg:text-lg xl:text-2xl text-center">
              TLO + Perluasan B
            </p>
            <br />
            <p className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1">
              Memberikan Jaminan terhadap kerugian apabila kendaraan yang dipertanggungkan mengalami kerugian total
              sebagai akibat:
            </p>
            <br />
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Pencurian, perampasan, penodongan atas unit sepeda motor.</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Hipnotis/Penipuan</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Kerusuhan/Huru-hara</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Terorisme Sabotase</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>
                Kerusakan karena Kecelakaan dan kebakaran dengan nilai kerusakan diatas 50% dari harga pasar sepeda
                motor. Penggantiannya berupa sejumlah uang yang akan di transfer ke rekening Bpk/Ibu.
              </p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Penggantian New For Old adalah penggantian harga sesuai dengan nilai polis</p>
            </div>
            <br />

            <p className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1">
              Dengan Resiko Sendiri 10% dan 90% dibayarkan ke konsumen. Berlaku selama 1 tahun (Sampai dengan masa
              berakhirnya polis).
            </p>

            <br />
          </div>

          <div className="h-full col-span-12 md:col-span-6 lg:col-span-3 bg-red-800 py-2 px-6">
            <p className="text-white font-extrabold text-md mt-6 lg:text-lg xl:text-2xl text-center">
              Perluasan COMPRE +
            </p>
            <br />
            <p className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1">
              Memberikan Jaminan terhadap kerugian apabila kendaraan yang dipertanggungkan mengalami kerugian total
              sebagai akibat:
            </p>
            <br />
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Pencurian, perampasan, penodongan atas unit sepeda motor.</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Hipnotis/Penipuan</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Kerusuhan/Huru-hara.</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Terorisme Sabotase.</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Musibah Banjir, Angin Topan & Tanah Longsor.</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Bencana Alam Gempa Bumi, Tsunami.</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Kerusakan karena Kecelakaan dengan nilai kerusakan diatas 50% dari harga pasar sepeda motor.</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Penggunaan Komersial Ojek.</p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>
                Penggantian New For Old adalah penggantian harga sesuai dengan nilai polis. Dengan Resiko Sendiri 10%
                dan 90% dibayarkan ke konsumen. Berlaku selama 1 tahun (Sampai dengan masa berakhirnya polis).
              </p>
            </div>
            <div className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1 flex gap-x-2">
              <p>
                <strong>•</strong>
              </p>
              <p>Partial Loss ( All Risk )</p>
            </div>
            <br />

            <p className="text-white text-left text-xs xl:text-[16px] xl:leading-6 xl:mt-1">
              Untuk ALL Risk Parsial Loss apabila Motor dibawah harga 30 Jt Rp 500.000,- Untuk ALL Risk Parsial Loss
              apabila Motor diatas harga 30 Jt Rp 1.000.000,- .
            </p>

            <br />
          </div>
        </div>

        <hr />

        <div className="h-auto bg-slate-400 pb-7 relative">
          <br />
          <SwiperBeritaComponent sWidth={windowWidth} />
        </div>

        {/* komentar sementara */}
        {/* <div className="w-full bg-red-700 h-auto pt-4 pb-8 mt-[2px] lg:mt-0">
          <p className="text-center text-lg text-white font-bold">Hitung Premi</p>
          <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-12 mt-2 md:gap-x-4">
              <div className="col-span-11 md:col-span-4">
                <label htmlFor="kode" className="block text-sm font-medium leading-6 text-white">
                  Pilih Asuransi
                </label>
                <div className="mt-2">
                  <select
                    onChange={(e) => {
                      setRateAsuransi(e.target.value);
                      hitungPremi(e.target.value, otr);
                    }}
                    value={rateAsuransi}
                    className="cursor-pointer h-8 md:h-12 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name=""
                    id=""
                  >
                    <option className="cursor-pointer" value={2}>
                      TLO
                    </option>
                    <option className="cursor-pointer" value={3.2}>
                      TLO+
                    </option>
                    <option className="cursor-pointer" value={3.2}>
                      TLO+Perluasan
                    </option>
                    <option className="cursor-pointer" value={3.5}>
                      LiMo+
                    </option>
                    <option className="cursor-pointer" value={4.3}>
                      Compre+
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-span-11 md:col-span-4 mt-2 md:mt-0">
                <label htmlFor="otr" className="block text-sm font-medium leading-6 text-white">
                  On The Road
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => {
                      setOtr(e.target.value);
                      hitungPremi(rateAsuransi, e.target.value);
                    }}
                    value={otr}
                    id="otr"
                    name="otr"
                    min={0}
                    type="number"
                    className="h-8 md:h-12 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-11 md:col-span-4 mt-2 md:mt-0">
                <label htmlFor="hasil" className="block text-sm font-medium leading-6 text-white">
                  Hasil
                </label>
                <div className="mt-2">
                  <input
                    id="hasil"
                    name="hasil"
                    type="text"
                    value={hasilPremi < 0 ? 0 : hasilPremi}
                    disabled
                    className="h-8 md:h-12 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

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
        {windowWidth < 768 && (
          <footer className="w-full h-auto bg-slate-200 grid grid-cols-12 px-3 gap-x-1 py-4">
            <div className="h-full col-span-4 flex items-center">
              <Image
                src={"/images/lpasuransi/footer/Footer_Sahabat.png"}
                alt="illustrasi-1"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: windowWidth < 640 ? "90%" : "90%", height: "auto" }}
              />
            </div>
            <div className="h-full col-span-4 flex items-center justify-center">
              <Image
                src={"/images/lpasuransi/footer/Footer_Reliance.png"}
                alt="illustrasi-1"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: windowWidth < 640 ? "90%" : "90%", height: "auto" }}
              />
            </div>
            <div className="h-full flex items-center justify-end col-span-4">
              <Image
                src={"/images/lpasuransi/footer/Footer_Sinarmas.png"}
                alt="illustrasi-1"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: windowWidth < 640 ? "90%" : "90%", height: "auto" }}
              />
            </div>
          </footer>
        )}
        {windowWidth >= 768 && (
          <footer className="w-full h-auto">
            <Image
              src={"/images/lpasuransi/footer/Footer desktop.png"}
              alt="illustrasi-1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </footer>
        )}
      </div>
    </div>
  );
}
