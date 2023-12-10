import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./fonts";
import { italiana } from "./fonts";
import { QueryClientWrapper } from "@/lib/query";

export const metadata: Metadata = {
  title: "Acme Books",
  description: "A bookstore for the modern world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${italiana.variable} bg-background`}>
        <QueryClientWrapper>{children}</QueryClientWrapper>
      </body>
    </html>
  );
}
