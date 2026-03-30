import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";

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
  description: "Opelion Global private limited specializes in the end-to-end sourcing, processing, quality assurance, and export of premium agro products to international markets.",
  icons: {
    icon: "/Logo1 (2).webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
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
      </body>
    </html>
  );
}

// import "./globals.css";
// import { Playfair_Display, Inter } from "next/font/google";
// import Script from "next/script";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   variable: "--font-playfair",
// });

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// export const metadata = {
//   title: "Opelion Global",
//   description: "Premium Agricultural Exports",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      
//       {/* ✅ ADD THIS HEAD SECTION */}
//       <head>
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-2PE24GWJJL"
//           strategy="afterInteractive"
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-2PE24GWJJL');
//           `}
//         </Script>
//       </head>

//       <body className="font-[var(--font-inter)]">
//         {children}
//       </body>
//     </html>
//   );
// }

// import "./globals.css";

// export const metadata = {
//   title: "Opelion Global",
//   description: "Premium Agricultural Exports",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }


// import "./globals.css"; 
// import { Playfair_Display, Inter } from "next/font/google"; 

// const playfair = Playfair_Display({ 
//   subsets: ["latin"], 
//   weight: ["400", "600", "700"], 
//   variable: "--font-playfair", 
// }); 

// const inter = Inter({ 
//   subsets: ["latin"], 
//   variable: "--font-inter", 
// }); 

// export const metadata = { 
//   title: "Opelion Global", 
//   description: "Premium Agricultural Exports", 
// }; 

// export default function RootLayout({ children }: { children: React.ReactNode }) { 
//   return ( 
//     // <html lang="en" className={${playfair.variable} ${inter.variable}}> 
//      <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
//       <body className="font-[var(--font-inter)]">{children}</body> 
//     </html> 
//   ); 
// }
