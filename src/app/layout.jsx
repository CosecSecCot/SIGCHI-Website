import { Barlow_Condensed } from "next/font/google";

import Navbar from "@/components/Navbar";
import "./globals.css";

const barlow = Barlow_Condensed({
    weight: ["100", "200", "300", "400"],
    subsets: ["latin"],
});

export const metadata = {
    title: "IIITD SIGHI",
    description:
        "IIITD's Special Interest Group on Computer Human Interaction (SIGCHI)",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body lang="en" className={`${barlow.className} antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
