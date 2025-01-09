import PropTypes from "prop-types";

/**
 *
 * Right Arrow Icon
 *
 * @component
 *
 * @example
 * <RightArrow className="w-4 h-auto aspect-square" />
 *
 * @param {Object} props - Component props.
 * @param {string|undefined} props.className - className
 * @returns {JSX.Element} The RightArrow Icon.
 *
 */
export default function RightArrow({ className }) {
    return (
        <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M27.9795 16.6112H6.72949"
                strokeWidth="2.125"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.4092 8.07682L27.98 16.6108L19.4092 25.1462"
                strokeWidth="2.125"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

RightArrow.propTypes = {
    className: PropTypes.string,
};
