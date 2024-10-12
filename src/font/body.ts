import { DM_Sans, Merriweather } from "next/font/google";
import localFont from "next/font/local";

export const tomatoFont = localFont({
  src: "./TomatoGrotesk-Regular.otf",
  display: "swap",
  variable: "--font-tomato",
});
export const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});


export const dmSans = DM_Sans({
  subsets: ["latin"],
});