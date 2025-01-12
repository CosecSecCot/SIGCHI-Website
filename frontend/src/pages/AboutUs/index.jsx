import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ActivityCard from "./ActivityCard";
import { useRef } from "react";

export default function AboutUsPage() {
    const coverImage = useRef();

    const from = {
        y: "20%",
        opacity: 0,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    };

    const to = {
        y: 0,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
        duration: 1,
    };

    useGSAP(() => {
        gsap.fromTo(coverImage.current, from, to);

        gsap.fromTo(".activity-card-container-1>div", from, {
            scrollTrigger: {
                trigger: ".activity-card-container-1",
                start: "top 90%",
            },
            stagger: 0.075,
            ...to,
        });

        gsap.fromTo(".activity-card-container-2>div", from, {
            scrollTrigger: {
                trigger: ".activity-card-container-2",
                start: "top 80%",
            },
            stagger: 0.075,
            ...to,
        });
    });

    return (
        <>
            <Navbar />
            <main className="font-barlow">
                <article className="mt-[8px] sm:mt-[112px] mx-[31px] sm:mx-[80px] flex flex-col lg:flex-row gap-[120px] justify-center items-center">
                    <div
                        ref={coverImage}
                        className="max-w-[378px] space-y-[68px]"
                    >
                        <img
                            src="/image5.png"
                            alt="image5"
                            className="h-[464px]"
                        />
                        <div className="flex justify-end">
                            <blockquote className="font-extralight text-[21px] leading-tight sm:text-[26px] sm:leading-[31px] text-right italic sm:w-[90%] pr-2">
                                “Great design doesn’t just bridge humans and
                                technology—it creates experiences that feel
                                natural, intuitive, and human at their core.”
                            </blockquote>
                        </div>
                    </div>
                    <section className="activity-card-container-1 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-x-[40px] gap-y-[48px]">
                        {new Array(6).fill(0).map((_, idx) => (
                            <ActivityCard
                                key={idx}
                                title="Diversity in Human Centric Design"
                                description="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                                iconWithBar={true}
                            />
                        ))}
                    </section>
                </article>
                <article className="mt-[69px] sm:mt-[112px] mx-[31px] sm:mx-[80px] mb-[88px] ">
                    <div className="star-style-heading flex justify-center">
                        <img
                            src="/our-teams.svg"
                            alt="Our Teams"
                            className="h-[150px] sm:h-[192px] w-auto object-cover"
                        />
                    </div>
                    <section className="mt-[35px] w-full flex justify-center">
                        <div className="activity-card-container-2 flex flex-wrap gap-x-[80px] gap-y-[48px] justify-center max-w-[1135px]">
                            {new Array(6).fill(0).map((_, idx) => (
                                <ActivityCard
                                    key={idx}
                                    title="Diversity in Human Centric Design"
                                    description="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                                    size="lg"
                                />
                            ))}
                        </div>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}
