/**
 * Section Heading
 * Heading with a persian-blue gradient underline
 *
 * @example
 * // Usage
 * <SectionHeading>About Us</SectionHeading>
 */
export default function SectionHeading({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <h1 className="font-agdasima text-[48px] leading-[58px] sm:text-[64px] sm:leading-[66px] text-persian-blue">
            {children}
            <div className="h-[2px] bg-gradient-to-r from-persian-blue to-transparent opacity-30" />
        </h1>
    );
}
