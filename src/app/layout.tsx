import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import { Roboto_Mono } from "next/font/google";
import Header from "./header";

export const metadata: Metadata = {
  title: "Satoru",
  description: "Satoru",
};

// TODO - Link this to the Tailwind Font
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoMono.className}>
      <body>
        <div className="flex flex-col h-full">
          <Providers>
            <Header />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
