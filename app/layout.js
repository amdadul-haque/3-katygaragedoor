import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Professional Garage Door Repair Services in Katy, Texas",
  description: "Looking for Garage Door Repair in Katy TX ? Find a local garage door company for fast and efficient repairs. Same day service available for Katy Texas Resident",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>
        <Navbar />
        <div className="w-full h-20"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
