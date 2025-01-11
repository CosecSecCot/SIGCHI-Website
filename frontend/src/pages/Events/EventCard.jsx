import PropType from "prop-types";
import { Link } from "react-router";
import { formatDate } from "../../utils/formatting";
import RightArrow from "../../components/icons/RightArrow";

/**
 * Event Card
 *
 * @component
 *
 * @example
 * <EventCard
 *     style="sm"
 *     date={new Date("Feburary 07, 2024 16:00:00")}
 *     title="This is the title"
 *     subtitle="This is the description."
 *     img="/image.jpeg"
 * />
 *
 * @param {Object} props - The component props.
 * @param {"lg"|"sm"} props.style - Style of the components. (by default "sm")
 * @param {Date} props.date - Date on which event was held.
 * @param {string} props.title - Name of the event.
 * @param {string} props.subtitle - Description of the event.
 * @param {string} props.img - The Cover image.
 * @returns {JSX.Element} The Event Card component.
 *
 * @dependencies
 * - `gsap`: For animations.
 * - `@gsap/react`: React integration for GSAP.
 */
export default function EventCard({
    style = "sm",
    date,
    title,
    subtitle,
    img,
}) {
    switch (style) {
        case "lg":
            return (
                <div className="font-barlow flex gap-[30px] items-center flex-wrap min-[1185px]:flex-nowrap">
                    <img
                        src={img}
                        alt={title}
                        className="max-h-[400px] rounded-xl object-cover"
                    />
                    <div className="space-y-[67px]">
                        <div className="space-y-2">
                            <h3 className="font-agdasima text-persian-blue text-[24px] leading-[28px]">
                                {formatDate(date)}
                            </h3>
                            <h2 className="text-[51px] leading-[56px]">
                                {title}
                            </h2>
                            <p className="font-extralight text-[20px] leading-[25px] md:w-[80%] xl:w-[70%]">
                                {subtitle}
                            </p>
                        </div>
                        <div>
                            <Link
                                to=""
                                className="w-fit font-agdasima text-persian-blue text-[24px] leading-[28px] flex gap-[12px] hover:gap-[14px] border-b sm:border-b-2 border-b-persian-blue border-opacity-0 hover:border-opacity-100 items-center transition-all"
                            >
                                VIEW EVENT DETAILS
                                <RightArrow className="w-[24px] h-auto stroke-persian-blue" />
                            </Link>
                        </div>
                    </div>
                </div>
            );
        case "sm":
            return (
                <div className="font-barlow max-w-[330px] flex flex-col gap-[30px] items-center">
                    <div className="relative group">
                        <img
                            src={img}
                            alt={title}
                            className="aspect-square rounded-[20px] group-hover:rounded-full object-cover brightness-100 group-hover:brightness-50 transition-all delay-200"
                        />
                        <div className="invisible group-hover:visible flex justify-center items-center absolute top-0 left-0 w-full h-full delay-200">
                            <Link
                                to=""
                                className="w-fit font-agdasima text-white text-[23px] leading-[28px] flex gap-[12px] hover:gap-[14px] border-b border-b-white"
                            >
                                VIEW EVENT DETAILS
                                <RightArrow className="w-[24px] h-auto stroke-white" />
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-[50px]">
                        <div className="space-y-2">
                            <h3 className="font-agdasima text-persian-blue text-[17px] leading-[21px]">
                                {formatDate(date)}
                            </h3>
                            <h2 className="text-[38px] leading-[42px]">
                                {title}
                            </h2>
                            <p className="font-extralight text-[15px] leading-[18px] w-[80%]">
                                {subtitle}
                            </p>
                        </div>
                        <div>
                            <Link
                                to=""
                                className="w-fit font-agdasima text-persian-blue text-[18px] leading-[21px] flex gap-[8px] hover:gap-[10px] border-b border-b-persian-blue border-opacity-0 hover:border-opacity-100 items-center transition-all"
                            >
                                VIEW EVENT DETAILS
                                <RightArrow className="w-[18px] h-auto stroke-persian-blue" />
                            </Link>
                        </div>
                    </div>
                </div>
            );
    }
}

EventCard.propTypes = {
    style: PropType.oneOf(["lg", "sm"]),
    date: PropType.instanceOf(Date),
    title: PropType.string.isRequired,
    subtitle: PropType.string.isRequired,
    img: PropType.string.isRequired,
};
