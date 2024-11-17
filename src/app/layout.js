import localFont from "next/font/local";
import "./globals.css";

const sfProLight = localFont({
  src: "./fonts/SF-Pro-Display-Light.otf",
  variable: "--font-sf-pro-light",
  weight: "300",
});

const sfProRegular = localFont({
  src: "./fonts/SF-Pro-Display-Regular.otf",
  variable: "--font-sf-pro-regular",
  weight: "400",
});

const sfProMedium = localFont({
  src: "./fonts/SF-Pro-Display-Medium.otf",
  variable: "--font-sf-pro-medium",
  weight: "500",
});

const sfProSemibold = localFont({
  src: "./fonts/SF-Pro-Display-Semibold.otf",
  variable: "--font-sf-pro-semibold",
  weight: "600",
});

const sfProBold = localFont({
  src: "./fonts/SF-Pro-Display-Bold.otf",
  variable: "--font-sf-pro-bold",
  weight: "700",
});

export const metadata = {
  title: "Stress Tracker for Apple Watch",
  description: "Your personal stress management tool on your wrist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sfProLight.variable} ${sfProRegular.variable} ${sfProMedium.variable} ${sfProSemibold.variable} ${sfProBold.variable}`}>
        {children}
      </body>
    </html>
  );
}