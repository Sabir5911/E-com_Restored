import "./globals.css";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Providers from "./store/Providers";
import { Inter } from "next/font/google";
import Wrapper from "./shared/Wrapper";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Com",
  description: "E-com_website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>

    <html lang="en">
      <body className={inter.className}>

        <Wrapper>
          <Providers>
            <Header />
            {children}
          </Providers>
          <Footer />
        </Wrapper>

      </body>
    </html>
    // </ClerkProvider>

  );
}
