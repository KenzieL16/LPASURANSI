"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [windowWidth, setWindowWidth] = useState(0);

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

  return (
    <>
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
        </div>
      </div>

      <div className="w-full flex justify-center mb-8 text-justify">
        <div className="w-11/12  md:w-9/12">
          <div className="w-full">
            <Image
              src={"/images/blog/Lindungi Motor Kesayangan Anda Hanya Dengan Rp 150.jpg"}
              alt="illustrasi-1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          {/* body          */}
          <br />
          <div className="w-full flex justify-center">
            <div className="w-11/12 md:w-full">
              <p className="font-extrabold text-3xl md:text-4xl text-left">Lindungi Motor Kesayangan Anda Hanya Dengan Rp 150.000</p>
              <br />
              <p className="text-md md:text-[17px] leading-[26px] text-justify">
              Motor adalah aset berharga yang mendukung aktivitas harian, menunjang pekerjaan, bahkan menjadi gaya hidup. 
              Namun, risiko seperti kecelakaan, pencurian, hingga kerusakan akibat bencana alam selalu mengintai. 
              Di sinilah AsuransiAnda.com hadir sebagai solusi perlindungan optimal untuk kendaraan roda dua Anda.
              </p>

              <p className="font-bold mt-3 text-lg">Mengapa Memilih AsuransiAnda.com?</p>
              <div className="flex pl-1 md:pl-4 mt-2">
                <p className="font-bold text-md">1.</p>
                <div className="ml-1 md:ml-3 text-md">
                  <p className="font-semibold">Perlindungan Lengkap dan Fleksibel</p>
                  <p>
                    Kami menawarkan dua jenis perlindungan utama yang dapat disesuaikan dengan kebutuhan Anda:
                  </p>
                  <ul className="list-[lower-alpha] pl-5 mt-2 space-y-1">
                    <li>
                      <span className="font-medium">Asuransi All Risk</span> 
                      <p>
                        Menanggung segala bentuk kerusakan—besar maupun kecil—termasuk kehilangan akibat pencurian dan kerusakan total akibat kecelakaan.
                      </p>
                    </li>
                    <li>
                      <span className="font-medium">Asuransi Total Loss Only (TLO) </span> 
                      <p>
                      Memberikan perlindungan saat motor mengalami kerusakan di atas 75% atau kehilangan total.
                      </p>
                      </li>
                  </ul>
                </div>
              </div>
              <div className="flex pl-1 md:pl-4 mt-2">
                <p className="font-bold text-md">2.</p>
                <div className="ml-1 md:ml-3 text-md">
                  <p className="font-semibold">Proses Klaim Cepat dan Transparan</p>
                  <p>
                  AsuransiAnda.com menyediakan layanan klaim online yang praktis, 
                  cepat, dan didukung oleh tim profesional yang siap membantu setiap saat.
                  </p>
                </div>
              </div>
              <div className="flex pl-1 md:pl-4 mt-2">
                <p className="font-bold text-md">3.</p>
                <div className="ml-1 md:ml-3 text-md">
                  <p className="font-semibold">Mulai dari hanya Rp150.000 per tahun, Anda sudah bisa mendapatkan perlindungan menyeluruh untuk motor kesayangan Anda. 
                  </p>
                </div>
              </div>
              <p className="font-bold mt-3 text-lg">
              Cara Daftar Mudah di AsuransiAnda.com
              </p>
              <div className="flex pl-1 md:pl-4 mt-2">
                <p className="text-md">1.</p>
                <div className="ml-1 md:ml-3 text-md">
                  <p>
                    Kunjungi website kami di www.asuransianda.com
                  </p>
                
                </div>
              </div>
              <div className="flex pl-1 md:pl-4 mt-2">
                <p className="text-md">2.</p>
                <div className="ml-1 md:ml-3 text-md">
                  <p>
                    Lalu hubungi nomor Customer kami di 0896-8600-6006
                  </p>
                 
                </div>
              </div>
              <br />
              <p className="text-md md:text-[17px] leading-[26px] text-justify">
              Jangan tunggu hingga musibah datang. Berikan perlindungan yang layak 
              untuk kendaraan Anda bersama AsuransiAnda.com. Cepat, aman, dan terpercaya. 
              Karena motor anda layak mendapatkan perlindungan terbaik.              
              </p>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}
