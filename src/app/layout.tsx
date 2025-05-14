import type { Metadata } from "next";
import { Agdasima, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ReactLenis from "lenis/react";

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

const siteMetadata = {
    title: "IIITD ACM SIGCHI Student Chapter",
    description:
        "IIITD's Special Interest Group on Computer Human Interaction (SIGCHI) is the premier international society for professionals, academics and students who are interested in human-technology and human-computer interaction (HCI).",
    url: "https://sigchi.iiitd.ac.in/",
    image: "/banner.png",
};

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.url),
    title: siteMetadata.title,
    description: siteMetadata.description,
    openGraph: {
        type: "website",
        url: siteMetadata.url,
        title: siteMetadata.title,
        description: siteMetadata.description,
        siteName: "IIITD SIGCHI",
        images: [{ url: siteMetadata.image }],
    },
    twitter: {
        card: "summary_large_image",
        title: siteMetadata.title,
        description: siteMetadata.description,
        images: [{ url: siteMetadata.image }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <ReactLenis root>
                <body
                    className={`${barlowCondensed.variable} ${agdasima.variable} antialiased`}
                >
                    <Navbar />
                    {children}
                    <Footer />
                </body>
            </ReactLenis>
        </html>
    );
}
