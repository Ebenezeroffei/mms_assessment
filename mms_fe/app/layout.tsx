import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.css";
import 'react-toastify/ReactToastify.css';
import 'react-phone-number-input/style.css';
import Navbar from "@/components/navbar/Navbar";
import ContextProvider from "@/providers/ContextProvider";
import ModalProvider from "@/providers/ModalProvider";

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  fallback: ['sans-serif']
})

export const metadata: Metadata = {
  title: {
    template: "Merchant Management System | %s",
    default: "Merchant Management System",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100`}
      >
        <Navbar />
        <ToastContainer />
        <ContextProvider>
          <ModalProvider />
          <main className="px-4 py-8">
            <section className="container mx-auto">
              {children}
            </section>
          </main>
        </ContextProvider>
      </body>
    </html>
  );
}
