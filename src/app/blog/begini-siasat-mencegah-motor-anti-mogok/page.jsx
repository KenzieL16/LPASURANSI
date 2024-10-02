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
              src={"/images/blog/Begini Siasat Mencegah Motor Anti Mogok.jpg"}
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
              <p className="font-extrabold text-3xl md:text-4xl text-left">Begini Siasat Mencegah Motor Anti Mogok</p>
              <br />
              <p className="text-md md:text-[17px] leading-[26px] text-justify">
                Bisa ngak sih mencegah motor mogok jauh-jauh hari sebelum waktunya? Jawabnya bisa. Seperti kata pepatah,
                lebih baik mencegah dari pada mengobatinya. Begitupun dengan mogok motor, karena itu motor wajib dirawat
                sebelum penyakit mogok menjelang.
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Menurut para ahli mekanik, mogok terjadi karena proses pembakaran di ruang mesin motor, tidak bekerja
                secara normal.
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Dan sesungguhnya ada 3 syarat penting agar mesin bekerja secara normal yakni ketersediaan bahan bakar,
                kompresi, dan pengapian yang baik.
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Jika salah satu syarat tersebut mengalami gangguan dan tidak terpenuhi dengan baik, maka mesin tidak
                akan bisa menyala alias ngadat, alias bakal mogok.
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Nah, untuk menghindari motor mogok mendadak. Simaks tip cara mencegahnya:
              </p>

              <p className="font-bold mt-3 text-lg">1. BBM Murni Wajib Tersedia</p>
              <p className="mt-3 text-md md:text-[17px]">
                Selalu periksa ketersediaan bahan bakar di dalam tangki. Kebiasan membiarkan tangka kering inilah yang
                bisa membuat motor mogok.
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Karenanya pastikan suplai bahan bakar di dalam tangki menuju mesin tidak tersumbat yang bisa
                mengakibatkan mesin tidak menyala.
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Hindari membeli bahan bakar eceran, karena biasanya banyak bensin eceran sudah tercampur uap air.
                Pastikan untuk selalu mengunakan jenis bahan bakar murni sesuai anjuran pabrik.
              </p>

              <p className="font-bold mt-3 text-lg">2. Filter Udara Lancar</p>
              <p className="mt-3 text-md md:text-[17px]">
                Selalu siapkan waktu untuk rutin mengecek filter udara, agar benda-benda asing tidak masuk dan
                menyumbat. Pastikan aliran udara menuju mesin mengalir lancar. Sama dengan prinsip pada bahan bakar,
                hindari air masuk ke filter udara karena akan mengakibatkan motor mogok
              </p>

              <p className="font-bold mt-3 text-lg">3. Jangan Modif Berlebihan</p>
              <p className="mt-3 text-md md:text-[17px]">
                Hati hati ketika ada rencana memodifikasi motor. Modifikasi berlebihan bisa menyebabkan motor mogok.
                Hindari memodifikasi bagian mesin secara berlebihan.
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Selain bisa membuat motor mogok, memodifikasi berlebihan akan menggugurkan garansi motor.
              </p>

              <p className="font-bold mt-3 text-lg">4. Aliran Kelistrikan Baik</p>
              <p className="mt-3 text-md md:text-[17px]">
                Pastikan komponen-komponen kelistrikan berfungsi normal, misalnya untuk motor-motor yang masih
                menggunakan CDI (Capacitor Discharge Ignition). Pastikan komponen CDI dalam kondisi yang baik.
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Cara mengecek CDI motor, bisa buka kabel yang menuju busi kemudian lepas kop busi, lalu tempelkan ujung
                kabel tersebut ke bagian logam misalnya di bagian mesin. Lantas, coba starter mesin melalui kick starter
                atau electric starter. Jika dari ujung kabel tersebut keluar percikan api berarti suplai api masih dalam
                kondisi baik.
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Untuk motor yang sudah menggunakan ECU, disarankan untuk selalu service ke bengkel resmi setiap 2 bulan
                sekali. Dikarenakan bengkel resmi memiliki alat khusus untuk memeriksa komponen ECU.
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Pastikan, selalu melakukan pemeriksaan sekaligus perawatan motor berkala secara rutin di{" "}
                <strong>bengkel AHASS </strong>agar seluruh fitur dan komponen sepeda motor termasuk ban tetap bisa
                bekerja secara optimal.
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Ada baiknya memanfaatkan pula <strong>layanan booking service dan layanan kunjung AHASS </strong> untuk
                kebebasan waktu dalam melakukan service.***
              </p>
              <p className="mt-3 text-md md:text-[17px]">
                Jika sudah melakukan servis rutin, Anda juga bisa memberikan perlindungan ganda untuk sepeda motor Honda
                kesayangan dari tindakan pencurian/kerusakan ringan-berat akibat dari kecelakaan. Temukan asuransi
                kendaraan yang cocok dengan pilihanmu{" "}
                <a href="/">
                  <strong>disini.</strong>
                </a>{" "}
                Dapatkan harga spesial!
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
