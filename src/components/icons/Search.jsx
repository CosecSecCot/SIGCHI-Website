import PropTypes from "prop-types";

/**
 *
 * Search Icon
 *
 * @component
 *
 * @example
 * <Search className="w-4 h-auto aspect-square" />
 *
 * @param {Object} props - Component props.
 * @param {string|undefined} props.className - className
 * @returns {JSX.Element} The Search Icon.
 *
 */
export default function Search({ className }) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle
                cx="11.7471"
                cy="11.7471"
                r="9.73761"
                stroke=""
                strokeWidth="2.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.5198 19.0256L22.3375 22.8334"
                stroke=""
                strokeWidth="2.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

Search.propTypes = {
    className: PropTypes.string,
};
