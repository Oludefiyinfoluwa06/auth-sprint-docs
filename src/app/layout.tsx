import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auth Sprint",
  description: "Auth Sprint is a lightweight CLI that scaffolds authentication controllers, routes and middleware for supported frameworks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
