import { Italiana } from "next/font/google";
import { Roboto } from "next/font/google";

export const italiana = Italiana({
  display: "swap",
  weight: "400",
  variable: "--italiana",
  subsets: ["latin"],
});

export const roboto = Roboto({
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--roboto",
  subsets: ["latin"],
});
