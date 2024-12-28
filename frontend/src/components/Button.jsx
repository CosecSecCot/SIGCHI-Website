import PropTypes from "prop-types";

/**
 *
 * Button Component
 * A customizable button with hover animations, supports custom children for flexibility.
 *
 * Children of this component are arranged by `flex` property with a gap of `8px`.
 * For further customization, one can wrap the children in a `div`.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {boolean} props.disabled - Disables the button when true.
 * @param {Function} props.onClick - Callback function to handle button click.
 * @param {"submit" | "reset" | "button" | undefined} props.type - Button type.
 * @param {React.ReactNode} props.children - Content to render inside the button.
 * @returns {JSX.Element} The button component.
 *
 * @example
 * <Button onClick={handleClick} disabled={false}>
 *   <span>Simple Button</span>
 *   <SomeIcon />
 * </Button>
 *
 * @example
 * <Button onClick={handleClick} disabled={false}>
 *   <div className="wrapper-container">
 *     <span>Complex Button</span>
 *     ...
 *     <SomeIcon />
 *   <div/>
 * </Button>
 */
export default function Button({
    disabled = false,
    onClick,
    type = "button",
    children,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`relative font-agdasima w-fit h-fit overflow-hidden flex items-center gap-2 px-[1rem] py-[0.5625rem] sm:px-[1.75rem]
                            sm:py-[0.875rem] text-[18px] sm:text-[30px] bg-white border sm:border-2 border-persian-blue text-persian-blue
                            rounded-md ${disabled ? "" : "sm:hover:text-white"} transition-all duration-400 group disabled:opacity-30 disabled:cursor-not-allowed`}
        >
            <div
                className={`absolute left-0 h-full w-0 ${disabled ? "" : "sm:group-hover:w-full"} bg-persian-blue transition-all duration-200`}
            ></div>
            {children}
        </button>
    );
}

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["submit", "reset", "button"]),
    children: PropTypes.node.isRequired,
};
