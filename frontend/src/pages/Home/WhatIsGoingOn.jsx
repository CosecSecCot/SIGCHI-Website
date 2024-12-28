import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import PropTypes from "prop-types";
import { useRef } from "react";

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
    const containerRef = useRef();

    useGSAP(
        () => {
            const timeline = gsap.timeline({
                defaults: { ease: "power4.inOut" },
                scrollTrigger: {
                    trigger: ".star-style-heading",
                    start: "top center",
                },
            });

            timeline.fromTo(
                ".star-style-heading",
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                }
            );

            timeline.fromTo(
                ".highlight-card-index, .highlight-card-heading, .highlight-card-subheading, .highlight-card-text",
                {
                    opacity: 0,
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                    opacity: 1,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 0.5,
                },
                "-=1"
            );

            timeline.fromTo(
                ".highlight-card-image",
                {
                    x: 50,
                    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 0.5,
                },
                "-=1"
            );
        },
        { scope: containerRef.current }
    );

    return (
        <article ref={containerRef} className="mt-6 min-[1220px]:mt-[180px]">
            <div className="star-style-heading flex justify-center">
                <img
                    src="/what-is-going-on.svg"
                    alt="What Is Going On"
                    className="h-[101px] sm:h-[203px] w-auto object-cover"
                />
            </div>
            <section className="mt-10 space-y-8 px-[30px] sm:px-[80px]">
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
            </section>
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
            className={`highlight-card font-barlow flex justify-between gap-3 sm:gap-10 ${border ? "border-b sm:border-b-2 border-black border-opacity-20" : ""} pb-[16px] sm:pb-[45px] overflow-hidden`}
        >
            <div className="flex sm:gap-[51px]">
                <div className="flex gap-[29px]">
                    <div className="relative top-[7px] highlight-card-index font-agdasima text-persian-blue text-[19px] sm:text-[45px] leading-none">
                        {number}
                    </div>
                    <div className="-space-y-2">
                        <h2 className="highlight-card-heading text-[20px] sm:text-[48px] leading-tight">
                            {title}
                        </h2>
                        <h3 className="highlight-card-subheading text-persian-blue text-[13px] sm:text-[30px]">
                            {subtitle}
                        </h3>
                    </div>
                </div>
                <p className="highlight-card-text font-extralight text-[26px] w-[50%] hidden lg:block">
                    {description}
                </p>
            </div>
            <div className="highlight-card-image w-[35%] sm:w-auto">
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
