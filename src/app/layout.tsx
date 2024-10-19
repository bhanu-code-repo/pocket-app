import type { Metadata } from "next";
import "./globals.css";

import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/side-navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pocket",
  description: "Pocket App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex",
          outfit.className,
          {
            "debug-screens": process.env.NODE_ENV === "development",
          }
        )}
      >
        <SideNavbar />
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
