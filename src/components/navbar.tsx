"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { DropdownMenu } from "@/components/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navlinks: { label: string; path: string }[] = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/aboutus" },
    // { label: "RESOURCES", path: "/resources" },
    { label: "MEMBERS", path: "/members" },
    { label: "EVENTS & WORKSHOPS", path: "/events" },
    { label: "CONTACT US", path: "/contact" },
];

/**
 * Navbar Component
 *
 * A responsive navigation bar. It includes a desktop menu and a mobile overlay
 * menu with animated transitions using GSAP.
 *
 * @example
 * <Navbar />
 *
 * @dependencies
 * - `gsap`: For animations.
 * - `@gsap/react`: React integration for GSAP.
 */
export default function Navbar() {
    const overlayRef = useRef(null);
    const timeline = useRef<gsap.core.Timeline>(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useGSAP(
        () => {
            timeline.current = gsap.timeline({ paused: true });
            timeline.current
                .to(overlayRef.current, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 0.5,
                    ease: "power4.out",
                })
                .fromTo(
                    ".navlink",
                    {
                        opacity: 0,
                        y: 30,
                        clipPath:
                            "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                    },
                    {
                        opacity: 1,
                        y: 0,
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        duration: 0.5,
                        ease: "power3.out",
                        stagger: 0.1,
                    },
                    "-=0.5"
                )
                .fromTo(
                    ".navlogo-large",
                    {
                        opacity: 0,
                        y: "30%",
                        clipPath:
                            "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                    },
                    {
                        opacity: 1,
                        y: 0,
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        duration: 0.5,
                        ease: "power4",
                    },
                    "-=0.5"
                );
        },
        { scope: overlayRef }
    );

    const toggleMenu = () => {
        if (isMenuOpen) {
            timeline.current?.reverse();
        } else {
            timeline.current?.play();
        }
        setIsMenuOpen(!isMenuOpen);
    };

    const pathname = usePathname();

    console.log(pathname);

    return (
        <header className="relative w-full px-4 sm:px-9 py-8 font-barlow z-40">
            <nav className="nav-shadow-small sm:nav-shadow px-4 sm:px-11 py-4 flex justify-between items-center bg-white shadow-[#0000001a] rounded-xl">
                <Link
                    href="/"
                    className="flex items-center gap-2 flex-shrink-0"
                >
                    <Image
                        src="/logo1.svg"
                        width={48}
                        height={50}
                        alt="logo"
                        className="w-[32px] h-[33px] sm:w-auto sm:h-auto"
                    />
                    <span className="text-persian-blue text-[24px] sm:text-[30px]">
                        IIITD SIG{" "}
                        <span className="font-bold text-persian-blue">CHI</span>
                    </span>
                </Link>
                <div
                    className={`${pathname === "/aboutus/" || pathname === "/members/" ? "text-persian-blue stroke-persian-blue" : "text-black stroke-black"} lg:flex gap-11 text-2xl hidden`}
                >
                    <DropdownMenu title="ABOUT">
                        <Link
                            href="/aboutus"
                            className="block w-full px-4 py-2 text-black"
                        >
                            ABOUT US
                        </Link>
                        <Link
                            href="/members"
                            className="block w-full px-4 py-2 text-black"
                        >
                            MEMBERS
                        </Link>
                    </DropdownMenu>

                    <Link
                        href="/events"
                        className={`${pathname === "/events/" ? "text-persian-blue" : "text-black"}`}
                    >
                        EVENTS &amp; WORKSHOPS
                    </Link>
                    {/* <Link
                        href="/resources"
                    >
                        RESOURCES
                    </Link> */}
                    <Link
                        href="/contact"
                        className={`${pathname === "/contact/" ? "text-persian-blue" : "text-black"}`}
                    >
                        CONTACT US
                    </Link>
                </div>
                <button
                    className="flex justify-end lg:hidden"
                    onClick={toggleMenu}
                >
                    <Image
                        src="/Hamburger.svg"
                        width={38}
                        height={38}
                        alt="menu"
                    />
                </button>
            </nav>
            <div
                ref={overlayRef}
                className="fixed z-50 top-0 left-0 w-full h-full bg-persian-blue overflow-hidden"
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                }}
            >
                <div className="absolute top-0 right-0 p-4">
                    <button className="" onClick={toggleMenu}>
                        <Image
                            src="/Cross.svg"
                            width={80}
                            height={81}
                            alt="exit"
                        />
                    </button>
                </div>
                <div className="h-full flex flex-col items-center justify-center gap-[100px]">
                    <div className="flex flex-col items-center gap-[17px] text-[32px] text-white font-medium text-opacity-90">
                        {navlinks.map(({ label, path }, idx) => {
                            return (
                                <Link
                                    key={idx}
                                    href={path}
                                    onClick={toggleMenu}
                                    className="navlink"
                                >
                                    {label}
                                </Link>
                            );
                        })}
                        <Image
                            src="/logo2.svg"
                            alt="IIITD SIG CHI"
                            width={160}
                            height={164}
                            className="navlogo-large hidden [@media(min-height:800px)]:block mt-[96px]"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
