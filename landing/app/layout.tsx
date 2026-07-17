import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Pocket Ledger",
  description: "Track your spending and understand your finances.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  );
}