import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ActivityCard from "./ActivityCard";
import { useRef } from "react";

const aboutUsData = [
    {
        icon: (
            <img
                src="/icons/star_bold.svg"
                alt=""
                className="w-[27px] sm:w-[35px]"
            />
        ),
        title: "Purpose of the SIGCHI Chapter",
        description:
            "The SIGCHI chapter at IIIT Delhi aims to advance human-computer interaction through innovation and collaboration.",
    },
    {
        icon: (
            <img
                src="/icons/activity_bold.svg"
                alt=""
                className="w-[27px] sm:w-[35px]"
            />
        ),
        title: "Collaboration and Networking",
        description:
            "The chapter brings together students from various fields to collaborate on ideas and projects.",
    },
    {
        icon: (
            <img
                src="/icons/shopping_cart_bold.svg"
                alt=""
                className="w-[27px] sm:w-[35px]"
            />
        ),
        title: "SIGCHI Project Development",
        description:
            "Members are encouraged to work on innovative projects that address real-world challenges.",
    },
    {
        icon: (
            <img
                src="/icons/document_bold.svg"
                alt=""
                className="w-[27px] sm:w-[35px]"
            />
        ),
        title: "Research Support in HCI Field",
        description:
            "The chapter supports students in conducting HCI research and publishing papers.",
    },
    {
        icon: (
            <img
                src="/icons/award_bold.svg"
                alt=""
                className="w-[27px] sm:w-[35px]"
            />
        ),
        title: "Shaping the Future in HCI Domain",
        description:
            "By blending design, research, and development, the chapter empowers students to create meaningful solutions.",
    },
    {
        icon: (
            <img
                src="/icons/sunrise_bold.svg"
                alt=""
                className="w-[27px] sm:w-[35px]"
            />
        ),
        title: "Skill Development in SIGCHI Activities",
        description:
            "By blending design, research, and development, the chapter empowers students to create meaningful solutions.",
    },
];

const ourTeamsData = [
    {
        icon: (
            <img
                src="/icons/home_bold.svg"
                alt=""
                className="w-[27px] sm:w-[35px]"
            />
        ),
        title: "SIGCHI Action Cohort",
        description:
            "The foundational team encompassing all members, working together to support the chapter's vision and ensure seamless collaboration.",
        style: "inverted",
    },
    {
        icon: (
            <img
                src="/icons/activity_bold.svg"
                alt=""
                className="w-[27px] sm:w-[35px]"
            />
        ),
        title: "Event & Curation Management Team",
        description:
            "Responsible for planning, organizing, and curating engaging events, workshops, and discussions that promote SIGCHI’s mission.",
    },
    {
        icon: (
            <img
                src="/icons/report_bold.svg"
                alt=""
                className="w-[27px] sm:w-[35px]"
            />
        ),
        title: "Marketing and Public Relations Team",
        description:
            "Handles the chapter's outreach and branding through impactful communication strategies, social media engagement, and public relations.",
    },
    {
        icon: (
            <img
                src="/icons/edit_2_bold.svg"
                alt=""
                className="w-[27px] sm:w-[35px]"
            />
        ),
        title: "Design & Creatives Team",
        description:
            "Focuses on creating visually appealing designs, promotional materials, and innovative user experiences to amplify the chapter's initiatives.",
    },
    {
        icon: (
            <img
                src="/icons/two_user_bold.svg"
                alt=""
                className="w-[27px] sm:w-[35px]"
            />
        ),
        title: "Outreach & Collaboration Team",
        description:
            "Builds connections with industry professionals, other chapters, and student organizations to foster collaborations and expand the chapter's impact.",
    },
    {
        icon: (
            <img
                src="/icons/presentation_bold.svg"
                alt=""
                className="w-[27px] sm:w-[35px]"
            />
        ),
        title: "Web Development and Tech Team",
        description:
            "Develops and maintains the chapter's digital presence, including the website and tools, ensuring a smooth user experience.",
    },
];

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
                        {aboutUsData.map(
                            ({ icon, title, description }, idx) => (
                                <ActivityCard
                                    key={idx}
                                    title={title}
                                    description={description}
                                    icon={icon}
                                    iconWithBar
                                />
                            )
                        )}
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
                        <div className="activity-card-container-2 flex flex-wrap gap-x-[80px] gap-y-[48px] justify-center max-w-[1216px]">
                            {ourTeamsData.map(
                                ({ icon, title, description, style }, idx) => (
                                    <ActivityCard
                                        style={style}
                                        key={idx}
                                        title={title}
                                        description={description}
                                        icon={icon}
                                        size="lg"
                                    />
                                )
                            )}
                        </div>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}
