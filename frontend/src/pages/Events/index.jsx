import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EventForm from "./EventForm";
import EventCard from "./EventCard";

export default function EventsPage() {
    const onFormSubmit = (data) => {
        console.log(data);
    };

    useGSAP(() => {
        gsap.fromTo(
            ".page-heading>*",
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
                duration: 0.5,
            }
        );
    });

    return (
        <>
            <Navbar />
            <main className="font-barlow min-h-[70vh] pb-10">
                <section className="page-heading space-y-4 mx-[31px] sm:mx-[80px] mt-[8px] sm:mt-[79px]">
                    <h1 className="text-[51px] leading-[53px] sm:text-[96px] sm:leading-[100px] lg:w-[80%] xl:w-[50%]">
                        Explore upcoming events and workshops.
                    </h1>
                    <p className="font-extralight text-[20px] leading-[23px] sm:text-[30px] sm:leading-[34px] md:w-[70%] lg:w-[50%] xl:w-[30%]">
                        We are a collective of diverse thinkers reimagining how
                        human-technology interactions can be seamless and
                        meaningful.
                    </p>
                </section>
                <section className="mx-[31px] sm:mx-[80px] my-[55px]">
                    <div className="flex justify-between gap-4 flex-wrap">
                        <EventForm onSubmit={onFormSubmit} />
                        <button
                            type="button"
                            className="ml-6 font-agdasima font-bold text-[20px] leading-[24px] text-persian-blue"
                        >
                            Show Past Events
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <div className="mt-[80px] flex flex-wrap gap-[64px] justify-center max-w-[1118px]">
                            <EventCard
                                style="lg"
                                date={new Date("Feburary 07, 2024 12:30:00")}
                                title="IIIT Delhi SIGCHI Chapter Inauguration Event"
                                subtitle="The SIGCHI inauguration event kicks off a journey of innovation and collaboration in human-computer interaction, bringing together experts and enthusiasts to inspire new ideas and advancements in user experience design."
                                img="/images/events/image1.svg"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
