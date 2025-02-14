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

const siteTitle = "IIITD ACM SIGCHI Student Chapter";
const siteDescription =
    "IIITD's Special Interest Group on Computer Human Interaction (SIGCHI) is the premier international society for professionals, academics and students who are interested in human-technology and human-computer interaction (HCI).";

export const metadata: Metadata = {
    metadataBase: new URL("https://sigchi.iiitd.ac.in/"),
    title: siteTitle,
    description: siteDescription,
    openGraph: {
        type: "website",
        url: "/",
        title: siteTitle,
        description: siteDescription,
        siteName: "IIITD SIGCHI",
        images: { url: "/banner.png" },
    },
    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteDescription,
        images: { url: "/banner.png" },
    },
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
