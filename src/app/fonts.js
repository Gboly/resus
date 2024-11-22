import { Philosopher, Open_Sans, Playfair } from "next/font/google";

export const philosopherFont = Philosopher({
  subsets: ["latin"],
  weight: "700",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
