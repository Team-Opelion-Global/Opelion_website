import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Welcome to Opelion Global Private Limited",
  description: "Opelion Global Private Limited specializes in the end-to-end sourcing, processing, quality assurance, and export of premium agro products to international markets.",
  // icons: {
  //   icon: "/LOGO_Opelion.png",
  //   shortcut: "/LOGO_Opelion.png",
  //   apple: "/LOGO_Opelion.png",
  // },
  icons: {
  icon: [
    { url: "/favicon.ico" , sizes:"any" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ],
  apple: "/favicon-48x48.png",
}
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* <link rel="icon" type="image/webp" href="/Logo_shadow.webp" />
        <link rel="shortcut icon" href="/Logo_shadow.webp" />
        <link rel="apple-touch-icon" href="/Logo_shadow.webp" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2PE24GWJJL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2PE24GWJJL');
          `}
        </Script>
      </head>
      <body className="font-[var(--font-inter)]">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
