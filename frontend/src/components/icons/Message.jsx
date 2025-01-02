import PropTypes from "prop-types";

/**
 *
 * Message Icon
 *
 * @component
 *
 * @example
 * <Message className="w-4 h-auto aspect-square" />
 *
 * @param {Object} props - Component props.
 * @param {string|undefined} props.className - className
 * @returns {JSX.Element} The Message Icon.
 *
 */
export default function Message({ className }) {
    return (
        <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9395 0C16.2805 0 17.5705 0.53 18.5195 1.481C19.4695 2.43 20.0005 3.71 20.0005 5.05V12.95C20.0005 15.74 17.7305 18 14.9395 18H5.06049C2.26949 18 0.000488281 15.74 0.000488281 12.95V5.05C0.000488281 2.26 2.25949 0 5.06049 0H14.9395ZM16.5305 6.54L16.6105 6.46C16.8495 6.17 16.8495 5.75 16.5995 5.46C16.4605 5.311 16.2695 5.22 16.0705 5.2C15.8605 5.189 15.6605 5.26 15.5095 5.4L11.0005 9C10.4205 9.481 9.58949 9.481 9.00049 9L4.50049 5.4C4.18949 5.17 3.75949 5.2 3.50049 5.47C3.23049 5.74 3.20049 6.17 3.42949 6.47L3.56049 6.6L8.11049 10.15C8.67049 10.59 9.34949 10.83 10.0605 10.83C10.7695 10.83 11.4605 10.59 12.0195 10.15L16.5305 6.54Z"
            />
        </svg>
    );
}

Message.propTypes = {
    className: PropTypes.string,
};
