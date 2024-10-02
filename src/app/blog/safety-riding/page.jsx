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
              src={"/images/blog/Safety Riding Cara Aman Rem Di Tanjakan.jpg"}
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
              <p className="font-extrabold text-3xl md:text-4xl text-left">Safety Riding: Cara Aman Rem Di Tanjakan</p>
              <br />
              <p className="text-md md:text-[17px] leading-[26px] text-justify">
                Menggunakan sepeda motor matic di jalan menanjak dan menurun memerlukan penyesuaian dalam teknik
                berkendara. Tidak seperti motor bertransmisi manual, motor matic tidak bisa berakselerasi menggunakan
                gigi kecil saat menanjak, dan melakukan engine brake saat turun. Oleh sebab itu, perlu pemahaman
                keterampilan yang tepat, meliputi cara membuka-tutup gas, pengereman, postur tubuh, hingga perilaku
                berkendara yang aman untuk meminimalisir risiko kecelakaan yang tidak diinginkan.
              </p>

              <p className="font-bold mt-3 text-lg">Jaga Kecepatan Ideal</p>
              <p className="mt-3 text-md md:text-[17px]">
                Saat melewati jalan tanjakan menggunakan motor matic, hal pertama yang harus diperhatikan adalah menjaga
                kecepatan ideal dengan memanfaatkan momentum, baik sebelum maupun saat menanjak. Agar bisa mendapatkan
                kecepatan yang ideal, salah satu caranya adalah menjaga jarak dengan pengendara di depan sehingga Anda
                punya ruang untuk berakselerasi.
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Jika jalan menanjak disertai tikungan berkelok yang tajam, pilih sisi jalur yang landai dan sebisa
                mungkin kurangi pengereman untuk menjaga laju kecepatan ideal tersebut. Jika ingin mengurangi kecepatan,
                lebih disarankan untuk melakukan deselerasi dengan menutup gas.
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Hal lain yang perlu diperhatikan ketika menanjak dengan motor matic adalah hindari berakselerasi dengan
                membuka-tutup gas secara agresif dan berulang-ulang, karena kondisi ini bisa menyebabkan mesin menjadi
                lebih panas (overheat) sehingga berpotensi merusak komponen di dalam mesin.
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Terkait dengan postur berkendara, pada saat melewati jalanan menanjak yang cukup curam, sebaiknya
                pengendara lebih mencondongkan badan ke arah depan. Hal ini bertujuan agar beban berpusat ke bagian
                depan untuk menghindari roda depan motor terangkat (wheelie).
              </p>
              <p className="mt-3 text-sm">
                Agar nyaman berkendara dalam kondisi apapun, sebaiknya menggunakan motor yang terawat dengan baik dan
                rutin. Jadwalkan perawatan motor di <strong> bengkel AHASS </strong>. Lakukan pemeriksaan serta
                perawatan motor berkala secara rutin di <strong>bengkel AHASS</strong> agar seluruh fitur dan komponen
                sepeda motor, termasuk ban, tetap bisa bekerja secara optimal. Ada baiknya memanfaatkan pula{" "}
                <strong> layanan booking service dan layanan kunjung AHASS </strong> untuk fleksibilitas waktu dalam
                melakukan servis.
              </p>
              <p className="mt-3 text-sm text-blue-600">
                Serta untuk menghindari hal-hal yang tidak diinginkan di jalan, dibutuhkan adanya perlindungan maksimal
                pada kendaraan kesayangan, dengan cara memilih asuransi kendaraan yang tepat motor Honda Anda. .
                Berkendara jadi lebih tenang, aman, dan nyaman. Temukan asuransi pilihan Anda{" "}
                <a href="/">
                  <strong className="cursor-pointer">disini</strong>
                </a>{" "}
                (Link: www.asuransianda.com). Dapatkan harga spesial!
              </p>

              <p className="font-bold mt-3 text-lg">
                Intip Keunggulan <strong className="underline">Honda Beat Street 2024</strong> Sebelum Membeli
              </p>

              <div className="flex pl-1 md:pl-6 mt-2">
                <p className="font-bold text-lg">•</p>
                <p className="ml-1 md:ml-3 text-md">
                  <strong className="font-bold">Tampilan Menawan </strong>:{" "}
                  <span className="underline">Honda Beat Street 2024</span> memiliki desain fresh dengan stang telanjang
                  yang memberikan kesan gagah dan posisinya yang lebih tinggi serta lebar.
                </p>
              </div>
              <div className="flex pl-1 md:pl-6 mt-2">
                <p className="font-bold text-lg">•</p>
                <p className="ml-1 md:ml-3 text-md">
                  <strong className="font-bold">Ukuran Roda Berbeda </strong>:{" "}
                  <span className="underline">Honda Beat Street 2024</span> memiliki desain fresh dengan stang telanjang
                  yang memberikan kesan gagah dan posisinya yang lebih tinggi serta lebar.
                </p>
              </div>
              <div className="flex pl-1 md:pl-6 mt-2">
                <p className="font-bold text-lg">•</p>
                <p className="ml-1 md:ml-3 text-md">
                  <strong className="font-bold">Super Irit </strong>:{" "}
                  <span className="underline">Honda Beat Street 2024</span> menggunakan Mesin 110 cc SOHC dan sistem
                  pembakaran injeksi PGM-FI eSP membuat konsumsi bahan bakar sangat efisien, mencapai 60.6 km/liter, dan
                  mampu menempuh jarak 254,52 km per pengisian.
                </p>
              </div>
              <div className="flex pl-1 md:pl-6 mt-2">
                <p className="font-bold text-lg">•</p>
                <p className="ml-1 md:ml-3 text-md">
                  <strong className="font-bold">Handling Lincah </strong>:{" "}
                  <span className="underline">Honda Beat Street 2024</span> Menyediakan kenyamanan berkendara dengan
                  handling responsif dan dinamis, ideal untuk jalanan perkotaan yang padat..
                </p>
              </div>
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
