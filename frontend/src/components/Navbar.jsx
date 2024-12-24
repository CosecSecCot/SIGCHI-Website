import { useState } from "react";

const links = [
    {
        title: "ABOUT",
        href: "",
    },
    {
        title: "EVENTS & WORKSHOPS",
        href: "",
    },
    {
        title: "RESOURCES",
        href: "",
    },
    {
        title: "CONTACT US",
        href: "",
    },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full px-4 sm:px-9 py-8 font-barlow">
            <nav className="nav-shadow-small sm:nav-shadow px-4 sm:px-11 py-4 flex justify-between items-center bg-white shadow-[#0000001a] rounded-xl">
                <a href="" className="flex items-center gap-2 flex-shrink-0">
                    <img
                        src="/logo1.svg"
                        alt="SIGCHI Logo"
                        className="w-[32px] h-[33px] sm:w-auto sm:h-auto"
                    />
                    <span className="text-persian-blue text-[24px] sm:text-[30px]">
                        IIITD SIG{" "}
                        <span className="font-bold text-persian-blue">CHI</span>
                    </span>
                </a>
                <div className="lg:flex gap-11 text-2xl hidden">
                    {links.map((link, idx) => {
                        return (
                            <a href={link.href} key={idx}>
                                {link.title}
                            </a>
                        );
                    })}
                </div>
                <button
                    className="flex justify-end lg:hidden"
                    onClick={() => setMenuOpen(true)}
                >
                    <img src="/Hamburger.svg" alt="menu" />
                </button>
            </nav>
            <div
                className={`fixed z-50 top-0 left-0 w-full h-full bg-persian-blue ${menuOpen ? "" : "hidden"}`}
            >
                <div className="flex justify-end p-4">
                    <button className="" onClick={() => setMenuOpen(false)}>
                        <img src="/Cross.svg" alt="exit" />
                    </button>
                </div>
                <div className="flex flex-col items-center justify-around h-[70vh] gap-8">
                    <div className="flex flex-col items-center gap-[17px] text-[32px] text-white font-medium text-opacity-90">
                        <a href="">HOME</a>
                        {links.map((link, idx) => {
                            return (
                                <a href={link.href} key={idx}>
                                    {link.title}
                                </a>
                            );
                        })}
                    </div>
                    <img
                        src="/logo2.svg"
                        alt="IIITD SIG CHI"
                        width={160}
                        height={164}
                    />
                </div>
            </div>
        </header>
    );
}
