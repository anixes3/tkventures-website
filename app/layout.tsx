import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TK Ventures — Innovation & Technology Solutions",
  description:
    "TK Ventures helps educational institutions, universities, enterprises and government organizations build industry-ready Centres of Excellence in AI, EV, Cyber Security and Data Analytics.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}