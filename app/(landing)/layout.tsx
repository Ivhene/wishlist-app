import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "For coordinating gifts without you knowing what you will get",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
