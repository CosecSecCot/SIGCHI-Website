import PropTypes from "prop-types";

/**
 * Section Heading
 * Heading with a persian-blue gradient underline
 *
 * @component
 *
 * @example
 * // Usage
 * <SectionHeading>About Us</SectionHeading>
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the section heading.
 * @returns {JSX.Element} The SectionHeading component.
 */
export default function SectionHeading({ children }) {
    return (
        <h1 className="font-agdasima text-[48px] leading-[58px] sm:text-[64px] sm:leading-[66px] text-persian-blue">
            {children}
            <div className="h-[2px] bg-gradient-to-r from-persian-blue to-transparent opacity-30" />
        </h1>
    );
}

SectionHeading.propTypes = {
    children: PropTypes.node.isRequired,
};
