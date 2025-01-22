"use client";

import gsap from "gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import DownArrow from "@/components/icons/DownArrow";

/**
 * DropdownMenu component renders a dropdown with a title and customizable items.
 *
 * @example
 *
 * <DropdownMenu title="Click ME">
 *     <DropdownItem>
 *         <a href="#option1">Option 1</a>
 *     </DropdownItem>
 *     <DropdownItem>
 *         <a href="#option2">Option 2</a>
 *     </DropdownItem>
 * </DropdownMenu>
 */
export function DropdownMenu({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownContainer = useRef(null);

    const { contextSafe } = useGSAP();

    const closeMenu = contextSafe(() =>
        gsap.fromTo(
            dropdownContainer.current,
            { y: 0, opacity: 1 },
            {
                y: -10,
                opacity: 0,
                duration: 0.25,
                ease: "power4.inOut",
            }
        )
    );

    const openMenu = contextSafe(() =>
        gsap.fromTo(
            dropdownContainer.current,
            { y: -10, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.25,
                ease: "power4.inOut",
            }
        )
    );

    const toggleDropdown = () => {
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-1"
            >
                {title}
                <DownArrow
                    className={`w-[1.2rem] h-auto transform transition-transform stroke-black ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </button>
            {/* isOpen && (
                <div
                    ref={dropdownContainer}
                    className="absolute top-full -left-4 mt-2 min-w-48 bg-white border border-gray-300 rounded-md shadow-lg z-40"
                >
                    <ul className="py-2">{children}</ul>
                </div>
            ) */}

            <div
                ref={dropdownContainer}
                className={`absolute ${isOpen ? "" : "hidden"} top-full -left-4 mt-6 min-w-48 bg-white border-t-persian-blue border-t-4 border border-gray-300 rounded-bl-lg rounded-br-lg shadow-lg z-40`}
            >
                <ul className="py-2">{children}</ul>
            </div>
        </div>
    );
}

/**
 * DropdownItem component renders a single item inside a dropdown menu.
 */
export function DropdownItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            {children}
        </li>
    );
}
