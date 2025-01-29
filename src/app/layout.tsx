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
    <html lang="en" className="overflow-x-hidden">
      <body className="text-balance overflow-x-hidden">{children}</body>
    </html>
  );
}
