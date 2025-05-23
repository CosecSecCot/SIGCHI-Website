"use client";

import Image from "next/image";
import HighlightCard from "@/app/highlight-card";

const events = [
    {
        number: "01",
        date: "Monday, 7th April 2025",
        title: "Inauguration Event",
        subtitle: "at IIIT Delhi",
        description: "Launching our chapter with amazing activities planned",
        image: "/images/events/inauguration/IMG_0439.JPG",
        border: true,
    },
];

export default function WhatIsGoingOnSection() {
    return (
        <article className="mt-6 min-[1220px]:mt-[180px]">
            <div className="star-style-heading flex justify-center">
                <Image
                    src="/what-is-going-on.svg"
                    width={1280}
                    height={203}
                    alt="What Is Going On"
                    className="h-[101px] sm:h-[203px] w-auto object-cover"
                />
            </div>
            <div className="mt-10 space-y-8 px-[30px] sm:px-[80px]">
                {events.map((event, idx) => {
                    return (
                        <HighlightCard
                            key={idx}
                            href="/events/inauguration"
                            number={event.number}
                            date={event.date}
                            title={event.title}
                            subtitle={event.subtitle}
                            description={event.description}
                            image={event.image}
                            imageWidth={6000}
                            imageHeight={4000}
                            border={event.border}
                        />
                    );
                })}
            </div>
        </article>
    );
}
