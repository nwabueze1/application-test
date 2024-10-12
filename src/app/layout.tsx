import type { Metadata } from "next";
import "./globals.css";
import { dmSans, tomatoFont } from "@/font/body";
import { DM_Sans } from "next/font/google";
import clx from "classnames";

export const metadata: Metadata = {
  title: "Investment",
  description: "Portfolio",
};


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={clx(tomatoFont.className)}>{children}</body>
    </html>
  );
}
