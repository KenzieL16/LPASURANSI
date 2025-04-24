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
              src={"/images/blog/Kenapa Asuransi Motor Itu Penting.jpg"}
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
              <p className="font-extrabold text-3xl md:text-4xl text-left">Kenapa Asuransi Motor Itu Penting? Ini Alasan yang Wajib Kamu Tahu!</p>
              <br />
              <p className="text-md md:text-[17px] leading-[26px] text-justify">
              Motor bukan sekadar alat transportasi bagi banyak orang, motor adalah bagian penting dari kehidupan sehari-hari. 
              Dari menghindari macet hingga menunjang aktivitas kerja dan usaha, motor memainkan peran vital. 
              Tapi pernahkah kamu berpikir, seberapa siap kamu jika terjadi hal-hal yang tidak diinginkan?
              </p>

              <p className="font-bold mt-3 text-lg">
                Inilah saatnya kamu mengenal lebih dalam tentang asuransi motor 
                perlindungan cerdas untuk kendaraan roda dua kamu. Berikut alasan kenapa 
                asuransi motor itu penting dan layak jadi prioritas!</p>
              <div className="flex pl-1 md:pl-4 mt-2">
                <p className="font-bold text-md">1.</p>
                <div className="ml-1 md:ml-3 text-md">
                  <p className="font-semibold">Perlindungan Finansial Saat Kecelakaan</p>
                  <p>
                  Kecelakaan bisa terjadi kapan saja dan di mana saja, bahkan saat kamu sudah berhati-hati. 
                  Dengan asuransi motor, kamu tidak perlu menanggung semua biaya perbaikan sendiri. 
                  Mulai dari kerusakan ringan hingga kerusakan besar, biaya akan ditanggung oleh pihak asuransi 
                  sesuai ketentuan polis. Hemat, aman, dan tidak menguras tabungan mendadak!
                  </p>
                </div>
              </div>
              <div className="flex pl-1 md:pl-4 mt-2">
                <p className="font-bold text-md">2.</p>
                <div className="ml-1 md:ml-3 text-md">
                  <p className="font-semibold">Ganti Rugi Saat Motor Dicuri</p>
                  <p>
                  Pencurian motor masih menjadi salah satu kasus yang sering terjadi di Indonesia. 
                  Dengan asuransi komprehensif, kamu bisa mendapatkan ganti rugi atas kehilangan motor 
                  sesuai nilai pertanggungannya. Jadi, kamu tidak perlu memulai dari nol lagi jika kehilangan 
                  kendaraan kesayangan.
                  </p>
                </div>
              </div>
              <div className="flex pl-1 md:pl-4 mt-2">
                <p className="font-bold text-md">3.</p>
                <div className="ml-1 md:ml-3 text-md">
                  <p className="font-semibold">Premi Terjangkau, Manfaat Maksimal 
                  </p>
                  <p>
                  Banyak orang berpikir asuransi motor itu mahal. Faktanya, premi asuransi motor sangat terjangkau, 
                  bahkan mulai dari puluhan ribu rupiah per bulan. Dengan premi yang ringan, kamu bisa menikmati 
                  perlindungan menyeluruh yang bisa menyelamatkan keuangan kamu di saat-saat genting.
                  </p>
                </div>
              </div>
              <br />
              <p className="text-md md:text-[17px] leading-[26px] text-justify">
              Tak ada yang ingin mengalami kecelakaan atau kehilangan motor, 
              tapi memiliki asuransi motor adalah bentuk tanggung jawab dan antisipasi yang bijak. 
              Lindungi aset pentingmu, jaga kondisi keuangan, dan rasakan tenangnya berkendara setiap hari.
              </p>
              
              <br />
              <p className="text-md md:text-[17px] leading-[26px] text-justify">
              Ingat, lebih baik punya asuransi dan tidak menggunakannya, daripada membutuhkannya dan tidak punya.          
              </p>
              <br />
              <p className="text-md md:text-[17px] leading-[26px] text-justify">
              Segera pilih produk asuransi motor yang sesuai kebutuhanmu karena perlindungan terbaik adalah perlindungan yang dimulai hari ini.  
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
