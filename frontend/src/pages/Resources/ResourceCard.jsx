import PropType from "prop-types";
import { formatDate } from "../../utils/formatting";

/**
 * Resources Card
 *
 * @component
 *
 * @example
 * <ResourcesCard
 *     date={new Date("Feburary 07, 2024 16:00:00")}
 *     title="This is the title"
 *     subtitle="This is the description."
 *     img="/image.jpeg"
 *     height="45%"
 * />
 *
 * @param {Object} props - The component props.
 * @param {Date} props.date
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string?} props.img
 * @param {string?} props.width - Width of the component (eg: "300px", "40%", etc.)
 * @param {"video"|"square"} props.aspect - Aspect ratio of the image (will be replaced)
 * @returns {JSX.Element} The Resources Card component.
 */
export default function ResourcesCard({
    date,
    title,
    subtitle,
    img,
    width = "auto",
    aspect = "video",
}) {
    return (
        <div
            className={`font-barlow max-w-[${width}] flex flex-col border-2 border-persian-blue rounded-md overflow-hidden hover:-translate-y-1 transition-transform duration-100`}
            style={{
                boxShadow: "-9px 11px 0 0 #1a36c0",
            }}
        >
            <div
                className={`w-full h-auto object-cover bg-zinc-400 aspect-${aspect}`}
            />
            <div className="bg-white w-full h-fit space-y-2 px-[24px] py-[16px]">
                <h3 className="font-agdasima text-persian-blue text-[15px] leading-[18px]">
                    {formatDate(date)}
                </h3>
                <h2 className="text-[32px] leading-[35px] line-clamp-2">
                    {title}
                </h2>
                <p className="font-extralight text-[12px] leading-[15px] w-[80%]">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}

ResourcesCard.propTypes = {
    date: PropType.instanceOf(Date),
    title: PropType.string.isRequired,
    subtitle: PropType.string.isRequired,
    img: PropType.string,
    width: PropType.string,
    aspect: PropType.string,
};
