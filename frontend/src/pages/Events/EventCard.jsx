import PropType from "prop-types";
import { Link } from "react-router";

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
 * @param {"lg"|"sm"|"sm-circle"} props.style - Style of the components. (by default "lg")
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
    style = "lg",
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
                                className="font-agdasima text-persian-blue text-[24px] leading-[28px]"
                            >
                                VIEW EVENT DETAILS
                            </Link>
                        </div>
                    </div>
                </div>
            );
        case "sm":
            return (
                <div className="font-barlow max-w-[330px] flex flex-col gap-[30px] items-center">
                    <img
                        src={img}
                        alt={title}
                        className="aspect-square rounded-[20px] object-cover"
                    />
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
                                className="font-agdasima text-persian-blue text-[18px] leading-[21px]"
                            >
                                VIEW EVENT DETAILS
                            </Link>
                        </div>
                    </div>
                </div>
            );
        case "sm-circle":
            return (
                <div className="font-barlow max-w-[330px] flex flex-col gap-[30px] items-center">
                    <div className="relative">
                        <img
                            src={img}
                            alt={title}
                            className="aspect-square rounded-full object-cover brightness-50"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                            <Link
                                to=""
                                className="font-agdasima text-white text-[23px] leading-[28px] underline"
                            >
                                VIEW EVENT DETAILS
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
                                className="font-agdasima text-persian-blue text-[18px] leading-[21px]"
                            >
                                VIEW EVENT DETAILS
                            </Link>
                        </div>
                    </div>
                </div>
            );
    }
}

/**
 * formatDate.
 * Formats date for `EventCard` component.
 *
 * @example
 * formatDate(new Date("Feburary 07, 2024 16:00:00"))
 * // Turns to
 * "Feburary 07, 2024 | 4:00PM"
 *
 * @param {Date} date - Date which needs to be modified.
 * @returns {string} - Formatted date (see example).
 */
function formatDate(date) {
    let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    let month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
    let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    let time = new Intl.DateTimeFormat("en", {
        hour: "2-digit",
        minute: "2-digit",
    }).format(date);

    return `${month} ${day}, ${year} | ${time}`;
}

EventCard.propTypes = {
    style: PropType.oneOf(["lg", "sm", "sm-circle"]),
    date: PropType.instanceOf(Date),
    title: PropType.string.isRequired,
    subtitle: PropType.string.isRequired,
    img: PropType.string.isRequired,
};
