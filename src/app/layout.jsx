import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asuransi Anda",
  description:
    "Temukan solusi asuransi terbaik untuk melindungi keuangan Anda. Pilih dari berbagai produk asuransi yang sesuai dengan kebutuhan Anda, termasuk asuransi kesehatan, jiwa, dan kendaraan.",
  keywords: [
    "asuransi",
    "perlindungan keuangan",
    "asuransi kesehatan",
    "asuransi jiwa",
    "asuransi mobil",
    "asuransi properti",
    "polis asuransi",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="Temukan solusi asuransi terbaik untuk melindungi keuangan Anda. Pilih dari berbagai produk asuransi yang sesuai dengan kebutuhan Anda, termasuk asuransi kesehatan, jiwa, dan kendaraan."
        />
        <meta
          name="keywords"
          content="asuransi, perlindungan keuangan, asuransi kesehatan, asuransi jiwa, asuransi mobil, asuransi properti, polis asuransi"
        />
        <meta name="author" content="PT Wahana Kalyana Mitramahardika" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Asuransi Terpercaya - Perlindungan Keuangan Anda" />
        <meta
          property="og:description"
          content="Dapatkan perlindungan finansial terbaik dengan produk asuransi kami. Mulai dari asuransi kesehatan hingga asuransi jiwa."
        />
        <meta property="og:url" content="www.asuransianda.com" /> {/* Ganti dengan URL website Anda */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Asuransi Anda" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-CF614JDH0W');`,
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-CF614JDH0W" />
    </html>
  );
}
