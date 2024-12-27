import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import Button from "../../components/Button";
import ExpressYourIdeasSection from "./ExpressYourIdeas";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageReveal from "./PageReveal";
import WhatIsACMSIGCHISection from "./WhatIsACMSIGCHI";
import WhatIsGoingOnSection from "./WhatIsGoingOn";

export default function HomePage() {
    const [revealAnimationComplete, setRevealAnimationComplete] =
        useState(false);

    useGSAP(() => {
        let timeline = gsap.timeline({
            defaults: { ease: "power4.inOut", duration: 2 },
        });

        if (!revealAnimationComplete) {
            timeline.fromTo(
                ".page-reveal-logo",
                {
                    y: 50,
                    opacity: 0,
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                    y: 0,
                    opacity: 1,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }
            );

            timeline.fromTo(
                ".page-reveal-text",
                {
                    y: 50,
                    opacity: 0,
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                    y: 0,
                    opacity: 1,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                },
                "-=1.75"
            );

            timeline.to(".page-reveal-container", {
                scale: 50,
                y: "-5000%",
                onComplete: () => setRevealAnimationComplete(true),
            });
        }

        timeline.fromTo(
            "nav",
            {
                y: -100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.75,
            },
            "-=1.5"
        );

        timeline.fromTo(
            ".main-content-container>div>*",
            {
                y: 50,
                opacity: 0,
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            },
            {
                y: 0,
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                stagger: 0.15,
            },
            "-=2.25"
        );

        timeline.fromTo(
            ".main-content-container>button",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=2.25"
        );

        timeline.fromTo(
            ".bar-elements>div",
            {
                x: "100%",
            },
            {
                x: 0,
                duration: 1.5,
                stagger: 0.1,
            },
            "-=2.25"
        );
    });

    return (
        <>
            {revealAnimationComplete ? "" : <PageReveal />}
            <Navbar />
            <main className="font-barlow pb-10">
                <article className="w-full">
                    <section className="main-content-container flex flex-col gap-[20px] sm:gap-8 w-fit pl-[31px] pt-[8px] sm:pl-[81px] sm:pt-[67px]">
                        <div className="flex flex-col gap-2">
                            <h1 className="flex flex-col text-[36px] leading-[43px] sm:text-[66px] sm:leading-[79px] w-[90%]">
                                Redefining the Way
                                <span>
                                    <span className="font-extralight italic text-persian-blue">
                                        Humans
                                    </span>{" "}
                                    and Technology Connect
                                </span>
                            </h1>
                            <h2 className="font-extralight text-[16px] leading-[21px] sm:text-[30px] sm:leading-[34px] w-[60%] sm:w-[45%]">
                                We are a collective of diverse thinkers
                                reimagining how human-technology interactions
                                can be seamless and meaningful.
                            </h2>
                        </div>
                        <Button>
                            <span className="relative">Learn More</span>
                            <svg
                                width="34"
                                height="34"
                                viewBox="0 0 34 34"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="relative w-[1.25rem] sm:w-auto h-auto stroke-persian-blue sm:group-hover:stroke-white"
                            >
                                <path
                                    d="M27.9792 16.6112H6.72925"
                                    strokeWidth="2.125"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M19.4087 8.07682L27.9795 16.6108L19.4087 25.1462"
                                    strokeWidth="2.125"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                    </section>
                    <div
                        className="absolute right-0 top-[179px] invisible min-[1220px]:visible overflow-hidden"
                        aria-hidden={true}
                        role="presentation"
                    >
                        <div className="bar-elements flex flex-col gap-[13px]">
                            <div className="flex justify-end">
                                <div className="w-[673px] h-[101px] rounded-tl-[10px] rounded-bl-[10px] bg-persian-blue" />
                            </div>
                            <div className="flex justify-end">
                                <div className="w-[386px] h-[101px] rounded-tl-[10px] rounded-bl-[10px] bg-persian-blue" />
                            </div>
                            <div className="flex justify-end">
                                <div className="w-[581px] h-[101px] rounded-tl-[10px] rounded-bl-[10px] bg-persian-blue" />
                            </div>
                            <div className="flex justify-end">
                                <div className="w-[816px] h-[101px] rounded-tl-[10px] rounded-bl-[10px] bg-persian-blue" />
                            </div>
                            <div className="flex justify-end gap-[33px] items-center">
                                <blockquote className="font-extralight text-right italic text-[26px] leading-[31px]">
                                    “Great design doesn’t just bridge humans and
                                    technology—it creates <br /> experiences
                                    that feel natural, intuitive, and human at
                                    their core.”
                                </blockquote>
                                <div className="w-[453px] h-[101px] rounded-tl-[10px] rounded-bl-[10px] bg-persian-blue" />
                            </div>
                        </div>
                    </div>
                </article>
                <WhatIsGoingOnSection />
                <WhatIsACMSIGCHISection />
                <ExpressYourIdeasSection />
            </main>
            <Footer />
        </>
    );
}
