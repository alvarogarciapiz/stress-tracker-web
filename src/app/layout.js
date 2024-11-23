import localFont from "next/font/local";
import "./globals.css";

const sfProRegular = localFont({
  src: "./fonts/SF-Pro-Display-Regular.woff2",
  variable: "--font-sf-pro-regular",
  weight: "400",
});

const sfProMedium = localFont({
  src: "./fonts/SF-Pro-Display-Medium.woff2",
  variable: "--font-sf-pro-medium",
  weight: "500",
});

const sfProSemibold = localFont({
  src: "./fonts/SF-Pro-Display-Semibold.woff2",
  variable: "--font-sf-pro-semibold",
  weight: "600",
});

const sfProBold = localFont({
  src: "./fonts/SF-Pro-Display-Bold.woff2",
  variable: "--font-sf-pro-bold",
  weight: "700",
});

export const metadata = {
  title: "Stress Tracker for Apple Watch",
  description: "Your personal stress management tool on your wrist.",
};

import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sfProRegular.variable} ${sfProMedium.variable} ${sfProSemibold.variable} ${sfProBold.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}