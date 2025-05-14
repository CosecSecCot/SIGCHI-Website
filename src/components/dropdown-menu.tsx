"use client";

import gsap from "gsap";
import { Children, useRef, useState } from "react";
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
 *
 * @dependencies
 * - `gsap`: For animations.
 * - `@gsap/react`: React integration for GSAP.
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
    const timeline = useRef<gsap.core.Timeline>(null);

    useGSAP(() => {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current.fromTo(
            dropdownContainer.current,
            {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            },
            {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.25,
                ease: "power4.inOut",
            }
        );
    });

    const toggleDropdown = () => {
        if (!isOpen) {
            timeline.current?.play();
        } else {
            timeline.current?.reverse();
        }
        setIsOpen(!isOpen);
    };

    return (
        <div
            onMouseOver={() => {
                timeline.current?.play();
                setIsOpen(true);
            }}
            onMouseOut={() => {
                timeline.current?.reverse();
                setIsOpen(false);
            }}
            className="relative inline-block"
        >
            <button
                onClick={toggleDropdown}
                onMouseLeave={() => setIsOpen(false)}
                className="flex items-center gap-1"
            >
                {title}
                <DownArrow
                    className={`w-[1.2rem] h-auto transform transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </button>
            <div
                ref={dropdownContainer}
                className={`absolute top-full -left-4 mt-6 min-w-48 bg-white border-t-persian-blue border-t-4 border border-gray-300 rounded-bl-lg rounded-br-lg shadow-lg z-40`}
            >
                <ul className="py-2">
                    {Children.map(Children.toArray(children), (child, idx) => {
                        return (
                            <li
                                key={idx}
                                onClick={toggleDropdown}
                                className="hover:bg-gray-100 cursor-pointer"
                            >
                                {child}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
