import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full px-9 py-8 font-barlow">
            <nav className="nav-shadow px-4 md:px-11 py-4 flex justify-between items-center bg-white shadow-[#0000001a] rounded-xl">
                <a href="" className="flex items-center gap-2 flex-shrink-0">
                    <img
                        src="/logo1.svg"
                        alt="SIGCHI Logo"
                        className="w-[32px] h-[33px] md:w-auto md:h-auto"
                    />
                    <span className="text-persian-blue text-[24px] md:text-[30px]">
                        IIITD SIG{" "}
                        <span className="font-bold text-persian-blue">CHI</span>
                    </span>
                </a>
                <div className="lg:flex gap-11 text-2xl hidden">
                    <a href="">ABOUT</a>
                    <a href="">EVENTS &amp; WORKSHOPS</a>
                    <a href="">RESOURCES</a>
                    <a href="">CONTACT US</a>
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
                <div className="mt-[66px] flex flex-col items-center gap-[96px]">
                    <div className="flex flex-col items-center gap-[34px] text-[32px] text-white font-medium text-opacity-90">
                        <a href="">HOME</a>
                        <a href="">ABOUT US</a>
                        <a href="">EVENTS &amp; WORKSHOPS</a>
                        <a href="">RESOURCES</a>
                        <a href="">CONTACT US</a>
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
