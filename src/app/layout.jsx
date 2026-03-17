import Navbar from "./Components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Care.xyz - Reliable Care for Your Loved Ones",
  description:
    "Find trusted babysitting, elderly care, and specialized home care services easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="caretheme">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
