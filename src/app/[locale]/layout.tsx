
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx"
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {ReactNode} from "react"
import { Header } from "@/Components/Common/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leaning langnuages",
  description: "Generated by create next app",
};


type Props = {
  children: ReactNode;
  params: { locale: string};

}


export default async function RootLayout({ children, params: {locale} }: Props) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
        {children}
        </NextIntlClientProvider>
        </body>
    </html>
  );
}