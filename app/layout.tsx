import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = { title: "Campus Feriwala — Tech for Campus Life", description: "Useful, honest gadgets for student life." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><CartProvider><Navbar />{children}<Footer /></CartProvider></body></html>; }
