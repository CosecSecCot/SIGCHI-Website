import gsap from "gsap";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useGSAP } from "@gsap/react";

/**
 * DropdownMenu component renders a dropdown with a title and customizable items.
 *
 * @component
 * @param {string} title - The title displayed for the dropdown button.
 * @param {React.ReactNode} children - The items to display in the dropdown.
 */
export function DropdownMenu({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownContainer = useRef();

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
                className="flex items-center gap-2"
            >
                {title}
                <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                >
                    <path
                        d="M11.25 1.375L6 6.625L0.75 1.375"
                        stroke="#1A090D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
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

DropdownMenu.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

/**
 * DropdownItem component renders a single item inside a dropdown menu.
 *
 * @component
 * @param {React.ReactNode} children - The content of the dropdown item.
 * @param {function} [onClick] - The callback function triggered when the item is clicked.
 */
export function DropdownItem({ children, onClick }) {
    return (
        <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={onClick}
        >
            {children}
        </li>
    );
}

DropdownItem.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};
