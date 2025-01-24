import type { Metadata } from "next";
import { Agdasima, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const barlowCondensed = Barlow_Condensed({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-barlow-condensed",
});

const agdasima = Agdasima({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-agdasima",
});

export const metadata: Metadata = {
    title: "IIITD SIGHI",
    description:
        "IIITD's Special Interest Group on Computer Human Interaction (SIGCHI)",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${barlowCondensed.variable} ${agdasima.variable} antialiased`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
