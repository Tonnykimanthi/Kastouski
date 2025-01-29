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
    <html lang="en">
      <body className="text-balance bg-gray-50">{children}</body>
    </html>
  );
}
