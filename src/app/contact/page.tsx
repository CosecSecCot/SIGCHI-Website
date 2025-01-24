"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ContactCard from "@/app/contact/contact-card";
import Image from "next/image";

const contactDetails = [
    {
        icon: <Image src="/icons/mail.svg" width={34} height={27} alt="" />,
        href: "mailto:sigchi@iiitd.ac.in",
        title: "sigchi@iiitd.ac.in",
        subtitle:
            "Reach us via email for detailed inquiries or support. Our team is happy to assist you with any questions or requests.",
    },
    {
        icon: (
            <Image src="/icons/instagram.svg" width={29} height={29} alt="" />
        ),
        href: "https://www.linkedin.com/company/acm-sigchi-iiitd",
        title: "@sigchi.iiitd",
        subtitle:
            "Stay updated on our latest activities and events by following us on Instagram. DM us for any inquiries or feedback!",
    },
    {
        icon: <Image src="/icons/linkedin.svg" width={27} height={27} alt="" />,
        href: "https://www.linkedin.com/company/acm-sigchi-iiitd",
        title: "Linkedin : ACM SIGCHI IIIT Delhi ",
        subtitle:
            "Let’s connect on LinkedIn! Follow SIGCHI for professional updates, and feel free to reach out for collaboration or questions.",
    },
];

export default function ContactPage() {
    useGSAP(() => {
        const timeline = gsap.timeline();

        timeline.fromTo(
            "section>div>h1, section>div>span, section>h2",
            {
                y: "20%",
                opacity: 0,
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            },
            {
                y: 0,
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
                stagger: 0.15,
                duration: 0.75,
            }
        );

        timeline.fromTo(
            ".contact-info-container>*",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                stagger: 0.1,
                duration: 0.5,
            },
            "-=0.5"
        );
    });

    return (
        <main className="font-barlow mb-[25vh]">
            <article className="mt-[30px] sm:mt-[60px] mx-[31px] sm:mx-[80px] flex justify-center">
                <section className="flex gap-[32px] md:gap-[68px] items-center max-w-[1120px] flex-wrap lg:flex-nowrap justify-center">
                    <div>
                        <span className="font-agdasima text-[20px] leading-[24px] text-persian-blue">
                            CONTACT US FOR ANY QUERIES
                        </span>
                        <h1 className="text-[48px] leading-[58px]">
                            Got a question? You can contact us through are
                            contact information provided below.
                        </h1>
                    </div>
                    <h2 className="font-extralight text-[25px] leading-[34px]">
                        We are a collective of diverse thinkers reimagining how
                        human-technology interactions can be seamless and
                        meaningful.
                    </h2>
                </section>
            </article>
            <article className="items-start mt-[30px] sm:mt-[60px] mx-[31px] sm:mx-[80px] flex justify-center">
                <section className="contact-info-container flex gap-[24px] items-center max-w-[1120px] flex-wrap lg:flex-nowrap justify-center">
                    {contactDetails.map(
                        ({ icon, href, title, subtitle }, idx) => (
                            <ContactCard
                                key={idx}
                                href={href}
                                icon={icon}
                                title={title}
                                subtitle={subtitle}
                            />
                        )
                    )}
                </section>
            </article>
        </main>
    );
}
