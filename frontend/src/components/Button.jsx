import PropTypes from "prop-types";

/**
 * Button component
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @returns {JSX.Element} - A button.
 */
export default function Button({ children }) {
    return (
        <button className="agdasima-regular w-fit h-fit px-[28px] text-3xl bg-white border-[2px] border-persian-blue text-persian-blue rounded-md">
            {children}
        </button>
    );
}

Button.propTypes = {
    /** The content to be displayed inside the button. */
    children: PropTypes.node.isRequired,
};
