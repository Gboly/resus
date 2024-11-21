import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Resus",
  description: "No 1 waste to energy company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
