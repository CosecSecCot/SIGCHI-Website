import PropTypes from "prop-types";

/**
 * Button component
 *
 * @param {Object} props - The component props.
 * @param {string} type - Size of button.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @returns {JSX.Element} - A button.
 */
export default function Button({ type, children }) {
    let size = "28px";
    switch (type) {
        case "sm":
            size = "25px";
            break;
        default:
            size = "28px";
            break;
    }

    return (
        <button
            className={`font-agdasima w-fit h-fit px-[${size}] text-3xl bg-white border-[2px] border-persian-blue text-persian-blue rounded-md`}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf("sm", "md", "lg"),
    /** The content to be displayed inside the button. */
    children: PropTypes.node.isRequired,
};
