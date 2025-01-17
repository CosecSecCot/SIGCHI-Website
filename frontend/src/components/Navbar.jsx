import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Link, NavLink } from "react-router";
import { DropdownItem, DropdownMenu } from "./DropdownMenu";

/**
 * Navbar Component
 *
 * A responsive navigation bar. It includes a desktop menu and a mobile overlay
 * menu with animated transitions using GSAP.
 *
 * @component
 *
 * @example
 * <Navbar />
 *
 * @returns {JSX.Element} The Navbar component.
 *
 * @dependencies
 * - `gsap`: For animations.
 * - `@gsap/react`: React integration for GSAP.
 */
export default function Navbar() {
    const overlayRef = useRef();

    const { contextSafe } = useGSAP({ scope: overlayRef });

    const onMenuOpen = contextSafe(() => {
        const timeline = gsap.timeline();
        timeline.to(overlayRef.current, {
            y: "0%",
            duration: 0.5,
            ease: "power4.out",
        });

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
        );

        timeline.fromTo(
            ".navlogo-large",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power4" },
            "-=0.6"
        );
    });

    const onMenuClose = contextSafe(() => {
        gsap.to(overlayRef.current, {
            y: "-100%",
            ease: "power4.in",
            duration: 0.4,
        });
    });

    return (
        <header className="relative w-full px-4 sm:px-9 py-8 font-barlow z-40">
            <nav className="nav-shadow-small sm:nav-shadow px-4 sm:px-11 py-4 flex justify-between items-center bg-white shadow-[#0000001a] rounded-xl">
                <Link to="/" className="flex items-center gap-2 flex-shrink-0">
                    <img
                        src="/logo1.svg"
                        alt="SIGCHI Logo"
                        className="w-[32px] h-[33px] sm:w-auto sm:h-auto"
                    />
                    <span className="text-persian-blue text-[24px] sm:text-[30px]">
                        IIITD SIG{" "}
                        <span className="font-bold text-persian-blue">CHI</span>
                    </span>
                </Link>
                <div className="lg:flex gap-11 text-2xl hidden">
                    <DropdownMenu title="ABOUT">
                        <DropdownItem>
                            <Link to="/aboutus">ABOUT US</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to="/members">MEMBERS</Link>
                        </DropdownItem>
                    </DropdownMenu>
                    <NavLink
                        to="/events"
                        className={(e) =>
                            e.isActive ? "text-persian-blue" : ""
                        }
                    >
                        EVENTS &amp; WORKSHOPS
                    </NavLink>
                    {/* <NavLink
                        to="/resources"
                        className={(e) =>
                            e.isActive ? "text-persian-blue" : ""
                        }
                    >
                        RESOURCES
                    </NavLink> */}
                    <NavLink
                        to="/contact"
                        className={(e) =>
                            e.isActive ? "text-persian-blue" : ""
                        }
                    >
                        CONTACT US
                    </NavLink>
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
                className="fixed z-50 top-0 left-0 w-full h-full bg-persian-blue translate-y-[-100%] overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-4">
                    <button className="" onClick={onMenuClose}>
                        <img src="/Cross.svg" alt="exit" />
                    </button>
                </div>
                <div className="h-full flex flex-col items-center justify-center gap-[100px]">
                    <div className="flex flex-col items-center gap-[17px] text-[32px] text-white font-medium text-opacity-90">
                        <Link to="/" className="navlink">
                            HOME
                        </Link>
                        <Link to="/aboutus" className="navlink">
                            ABOUT US
                        </Link>
                        <Link to="/members" className="navlink">
                            MEMBERS
                        </Link>
                        <Link to="/events" className="navlink">
                            EVENTS &amp; WORKSHOPS
                        </Link>
                        {/* <Link to="/resources" className="navlink">
                            RESOURCES
                        </Link> */}
                        <Link to="/contact" className="navlink">
                            CONTACT US
                        </Link>
                    </div>
                    <img
                        src="/logo2.svg"
                        alt="IIITD SIG CHI"
                        width={160}
                        height={164}
                        className="navlogo-large hidden [@media(min-height:800px)]:block"
                    />
                </div>
            </div>
        </header>
    );
}
