import "./globals.css";
import { openSans } from "@/app/fonts";

export const metadata = {
  title: "Resus",
  description: "No 1 waste to energy company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>{children}</body>
    </html>
  );
}
