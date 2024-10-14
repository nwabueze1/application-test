import type { Metadata } from "next";
import "./globals.css";
import { tomatoFont } from "@/font/body";

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
