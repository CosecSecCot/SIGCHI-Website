import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const links = [
    {
        title: "ABOUT US",
        href: "",
    },
    {
        title: "MEMBERS",
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
    // const [menuOpen, setMenuOpen] = useState(false);
    const overlayRef = useRef();

    const { contextSafe } = useGSAP({scope: overlayRef});

    const onMenuOpen = contextSafe(() => {
        const timeline = gsap.timeline();
        timeline.to(
            overlayRef.current,
            {
                y: "0%",
                duration: 0.5,
                ease: "power4.out"
            }
        );

        timeline.fromTo(
            ".navlink",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out",
                stagger: 0.1,
            },
            "-=0.5"
        )

        timeline.fromTo(
            ".navlogo-large",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power4" },
            "-=0.6"
        );
    })

    const onMenuClose = contextSafe(() => {
        gsap.to(
            overlayRef.current,
            {
                y: "-100%",
                ease: "power4.in",
                duration: 0.4
            }
        );
    });

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
                    onClick={onMenuOpen}
                >
                    <img src="/Hamburger.svg" alt="menu" />
                </button>
            </nav>
            <div
                ref={overlayRef}
                className="fixed z-50 top-0 left-0 w-full h-full bg-persian-blue translate-y-[-100%]"
            >
                <div className="flex justify-end p-4">
                    <button className="" onClick={onMenuClose}>
                        <img src="/Cross.svg" alt="exit" />
                    </button>
                </div>
                <div className="flex flex-col items-center justify-around h-[70vh] gap-8">
                    <div className="flex flex-col items-center gap-[17px] text-[32px] text-white font-medium text-opacity-90">
                        <a href="" className="navlink">HOME</a>
                        {links.map((link, idx) => {
                            return (
                                <a href={link.href} key={idx} className="navlink">
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
                        className='navlogo-large'
                    />
                </div>
            </div>
        </header>
    );
}
