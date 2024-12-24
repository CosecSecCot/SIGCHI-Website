import PropTypes from "prop-types";

const events = [
    {
        number: "01",
        title: "Science Design Cafe",
        subtitle: "at IIIT Delhi",
        description:
            "We are a collective of diverse thinkers reimagining how human.",
        image: "/design-workshops.svg",
    },
    {
        number: "02",
        title: "Design Workshops",
        subtitle: "at IIIT Delhi",
        description:
            "We are a collective of diverse thinkers reimagining how human.",
        image: "/science-design-cafe.svg",
    },
];

export default function WhatIsGoingOnSection() {
    return (
        <article className="mt-6 min-[1220px]:mt-[180px] px-20">
            <div className="flex justify-center">
                <img src="/what-is-going-on.svg" alt="What Is Going On" />
            </div>
            <div className="mt-10 space-y-8">
                {events.map((event, idx) => {
                    return (
                        <HighlightCard
                            key={idx}
                            number={event.number}
                            title={event.title}
                            subtitle={event.subtitle}
                            description={event.description}
                            image={event.image}
                        />
                    );
                })}
            </div>
        </article>
    );
}

/**
 * Component displaying a single highlighted activity in What Is Going On section.
 *
 * @param {Object} props - The component props.
 * @param {string} props.number - The number or order of the activity (e.g., "01").
 * @param {string} props.title - The title of the activity or event.
 * @param {string} props.subtitle - A subtitle or location of the activity (e.g., "at IIIT Delhi").
 * @param {string} props.description - A brief description of the activity.
 * @param {string} props.image - The URL of the image representing the activity.
 * @param {boolean} props.border - The border for seperating cards. (true by default).
 * @returns {JSX.Element} The rendered HighlightCard component.
 */
function HighlightCard({
    number,
    title,
    subtitle,
    description,
    image,
    border = true,
}) {
    return (
        <div
            className={`font-barlow flex justify-between gap-3 sm:gap-10 ${border ? "border-b-2 border-black border-opacity-20" : ""} pb-[45px]`}
        >
            <div className="flex sm:gap-[51px]">
                <div className="flex gap-[29px]">
                    <div className="font-agdasima text-persian-blue text-[19px] sm:text-[45px] leading-none">
                        {number}
                    </div>
                    <div>
                        <h2 className="text-[20px] sm:text-[48px] leading-none">
                            {title}
                        </h2>
                        <span className="text-persian-blue text-[13px] sm:text-[30px]">
                            {subtitle}
                        </span>
                    </div>
                </div>
                <p className="font-extralight text-[26px] w-[50%] hidden sm:block">
                    {description}
                </p>
            </div>
            <div className="w-[35%] sm:w-auto">
                <img src={image} alt={title} className="" />
            </div>
        </div>
    );
}

HighlightCard.propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    border: PropTypes.bool,
};
