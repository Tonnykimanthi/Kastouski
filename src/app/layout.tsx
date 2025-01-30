import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kastouski",
  description: "Kastouski",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className="overflow-x-hidden text-balance">{children}</body>
    </html>
  );
}
