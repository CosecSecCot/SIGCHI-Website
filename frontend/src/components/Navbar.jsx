import logo1 from "/logo1.svg";

export default function Navbar() {
    return (
        <header className="w-full px-9 py-8 z-50">
            <nav className="nav-shadow px-11 py-4 flex justify-between barlow-regular items-center bg-white shadow-[#0000001a] rounded-xl">
                <a href="" className="flex items-center gap-2">
                    <img src={logo1} alt="SIGCHI Logo" />
                    <span className="text-persian-blue text-3xl">
                        IIITD SIG{" "}
                        <span className="font-bold text-persian-blue">CHI</span>
                    </span>
                </a>
                <div className="flex gap-11 text-2xl">
                    <a href="">ABOUT</a>
                    <a href="">EVENTS &amp; WORKSHOPS</a>
                    <a href="">RESOURCES</a>
                    <a href="">CONTACT US</a>
                </div>
            </nav>
        </header>
    );
}
