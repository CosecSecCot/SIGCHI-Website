import { formatDate } from "@/utils/formatting";
import { Clock4, MapPin } from "lucide-react";
import Image from "next/image";

export default function InaugurationEventPage() {
    return (
        <main className="max-w-[1700px] mx-auto font-barlow flex relative">
            <article className="px-[30px] sm:px-[80px] my-[8px] sm:my-[80px] space-y-[50px] sm:space-y-[67px]">
                <div className="space-y-2">
                    <span className="hidden lg:inline-block font-agdasima text-persian-blue text-[17px] leading-[21px] sm:text-[24px] sm:leading-[28px] px-[1.25em] py-[0.25em] border-2 border-persian-blue bg-white rounded-full">
                        Event
                    </span>
                    <h1 className="text-[55px] leading-[60px] sm:text-[74px] sm:leading-[77px]">
                        IIIT Delhi SIGCHI Chapter Inauguration Event
                    </h1>
                    <div className="flex gap-[0.5em] sm:gap-[1em] items-center flex-wrap">
                        <span className="font-agdasima text-persian-blue text-[17px] leading-[21px] sm:text-[24px] sm:leading-[28px]">
                            160+ (B.Tech, M.Tech, PhD students & professors)
                        </span>
                        <div className="flex items-center gap-[0.5em] font-agdasima text-persian-blue">
                            <MapPin size={17} />
                            <span className="text-[17px] leading-[21px] sm:text-[24px] sm:leading-[28px]">
                                IIIT Delhi Campus
                            </span>
                        </div>
                        <div className="flex items-center gap-[0.5em] font-agdasima text-persian-blue">
                            <Clock4 size={17} />
                            <span className="text-[17px] leading-[21px] sm:text-[24px] sm:leading-[28px]">
                                {formatDate(
                                    new Date("April 7, 2024 12:30:00"),
                                    true
                                )}
                            </span>
                        </div>
                    </div>
                    <div className="lg:hidden flex flex-wrap gap-[0.5em]">
                        <EventTag>Event</EventTag>
                        <EventTag>Workshop</EventTag>
                        <EventTag>Interactive</EventTag>
                        <EventTag>Typography</EventTag>
                        <EventTag>AR</EventTag>
                        <EventTag>VR</EventTag>
                        <EventTag>Interaction Design</EventTag>
                    </div>
                </div>
                <div className="lg:hidden">
                    <OverviewSection />
                </div>
                <div className="space-y-[2em] font-extralight text-[15px] leading-[18px] sm:text-[23px] sm:leading-[26px]">
                    <section className="space-y-[1em]">
                        <header className="font-normal text-[38px] leading-[42px] sm:text-[51px] sm:leading-[56px]">
                            <h3>Introduction to SIGCHI @ IIIT Delhi</h3>
                        </header>
                        <p className="indent-[1em]">
                            The inauguration of the ACM SIGCHI Student Chapter
                            at IIIT Delhi marked a significant step toward
                            advancing the fields of HCI, UX, and emerging
                            interactive technologies at our institute. The event
                            brought together a diverse audience—students,
                            faculty, and researchers—to explore the
                            ever-evolving landscape of human-computer
                            interaction.
                        </p>
                        <div className="w-full aspect-video rounded-xl overflow-hidden">
                            <Image
                                src="/images/events/image1.svg"
                                width={400}
                                height={400}
                                alt="IIIT Delhi SIGCHI Chapter Inauguration Event"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </section>
                    <section className="space-y-[1em]">
                        <header className="font-normal text-[38px] leading-[42px] sm:text-[51px] sm:leading-[56px]">
                            <h3>Keynote Talk by Niteesh Yadav</h3>
                        </header>
                        <p className="indent-[1em]">
                            Niteesh Yadav, Director of Design and Research at
                            PocketFM, delivered a thought-provoking keynote on
                            the intersection of AR/VR and typography. Drawing
                            from his industry and academic experience, he
                            explored the challenges of spatial design, immersive
                            storytelling, and how typography evolves in virtual
                            environments.
                        </p>
                        <blockquote className="w-fit font-extralight italic border-l-2 border-l-persian-blue px-[1em] py-[0.5em] bg-persian-blue/5">
                            “Typography is no longer just ink on paper—it’s now
                            space, motion, and emotion.”
                            <footer className="text-right">
                                – Niteesh Yadav
                            </footer>
                        </blockquote>
                        <div className="w-full aspect-video rounded-xl overflow-hidden">
                            <Image
                                src="/images/events/image1.svg"
                                width={400}
                                height={400}
                                alt="IIIT Delhi SIGCHI Chapter Inauguration Event"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </section>
                    <section className="space-y-[1em]">
                        <header className="font-normal text-[38px] leading-[42px] sm:text-[51px] sm:leading-[56px]">
                            <h3>Makey Makey Workshop: Creative Interfaces</h3>
                        </header>
                        <p className="indent-[1em]">
                            The hands-on workshop introduced participants to
                            Makey Makey kits, showcasing how everyday objects
                            can be turned into touch-sensitive interactive
                            controllers. Attendees learned the basics of
                            circuitry, interaction design, and user-centric
                            thinking through fun, experimental play. <br />
                            They were encouraged to:
                        </p>
                        <ul className="list-inside list-disc">
                            <li>Design interactive sound murals</li>
                            <li>
                                Build innovative controllers using bananas,
                                paper, foil, etc.
                            </li>
                            <li>
                                Explore real-world applications of tangible
                                interaction
                            </li>
                        </ul>
                        <div className="w-full aspect-video rounded-xl overflow-hidden">
                            <Image
                                src="/images/events/image1.svg"
                                width={400}
                                height={400}
                                alt="IIIT Delhi SIGCHI Chapter Inauguration Event"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </section>
                    <section className="space-y-[1em]">
                        <header className="font-normal text-[38px] leading-[42px] sm:text-[51px] sm:leading-[56px]">
                            <h3>Interactive Project Displays</h3>
                        </header>
                        <p className="indent-[1em]">
                            A curated exhibition featured interactive HCI
                            projects developed by students and researchers.
                            These displays spanned:
                        </p>
                        <ul className="list-inside list-disc">
                            <li>Immersive technologies (AR/VR)</li>
                            <li>Gesture-based interfaces</li>
                            <li>Assistive tech for accessibility</li>
                            <li>Emotion recognition systems</li>
                        </ul>
                        <div className="w-full aspect-video rounded-xl overflow-hidden">
                            <Image
                                src="/images/events/image1.svg"
                                width={400}
                                height={400}
                                alt="IIIT Delhi SIGCHI Chapter Inauguration Event"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </section>
                    <section className="space-y-[1em]">
                        <header className="font-normal text-[38px] leading-[42px] sm:text-[51px] sm:leading-[56px]">
                            <h3>Strong Visual Identity</h3>
                        </header>
                        <p className="indent-[1em]">
                            A standout element of the event was its consistent
                            and bold visual language. From posters to standees,
                            the branding resonated with the theme of interaction
                            and technology. A cohesive color palette, custom
                            typography, and symbolic visuals made the event
                            visually striking and memorable.
                        </p>
                        <div className="w-full aspect-video rounded-xl overflow-hidden">
                            <Image
                                src="/images/events/image1.svg"
                                width={400}
                                height={400}
                                alt="IIIT Delhi SIGCHI Chapter Inauguration Event"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </section>
                    <section className="space-y-[1em]">
                        <header className="font-normal text-[38px] leading-[42px] sm:text-[51px] sm:leading-[56px]">
                            <h3>Gallery</h3>
                        </header>
                        <div className="w-full aspect-video rounded-xl overflow-hidden">
                            <Image
                                src="/images/events/image1.svg"
                                width={400}
                                height={400}
                                alt="IIIT Delhi SIGCHI Chapter Inauguration Event"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </section>
                    <section className="space-y-[1em]">
                        <header className="font-normal text-[38px] leading-[42px] sm:text-[51px] sm:leading-[56px]">
                            <h3>What's Next?</h3>
                        </header>
                        <ul className="list-inside list-disc">
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </section>
                </div>
            </article>
            <aside className="sticky top-0 hidden lg:block min-w-[40vw] md:min-w-[30vw] h-fit pr-[80px] pt-[40px] pb-[80px] space-y-[2em]">
                <OverviewSection />
                <section className="space-y-[1.5em]">
                    <header className="font-normal text-persian-blue text-[38px] leading-[42px] sm:text-[51px] sm:leading-[56px]">
                        Tag Cloud
                    </header>
                    <div className="flex flex-wrap gap-[0.5em]">
                        <EventTag>Event</EventTag>
                        <EventTag>Workshop</EventTag>
                        <EventTag>Interactive</EventTag>
                        <EventTag>Typography</EventTag>
                        <EventTag>AR</EventTag>
                        <EventTag>VR</EventTag>
                        <EventTag>Interaction Design</EventTag>
                    </div>
                </section>
            </aside>
        </main>
    );
}

function EventTag({ children }: { children: React.ReactNode }) {
    return (
        <span className="font-agdasima text-persian-blue text-[17px] leading-[21px] sm:text-[24px] sm:leading-[28px] px-[1.25em] py-[0.25em] border-2 border-persian-blue bg-white rounded-full">
            {children}
        </span>
    );
}

function OverviewSection() {
    return (
        <section className="space-y-[0.5em]">
            <header className="font-normal text-persian-blue text-[38px] leading-[42px] sm:text-[51px] sm:leading-[56px]">
                Overview
            </header>
            <table className="font-extralight text-[17px] leading-[20px] sm:text-[22px] sm:leading-[26px]">
                <tbody>
                    <tr>
                        <td className="font-normal pr-[0.5em] py-[0.5em]">
                            Date
                        </td>
                        <td className="pl-[0.5em] py-[0.5em]">
                            7th April 2025
                        </td>
                    </tr>
                    <tr>
                        <td className="font-normal pr-[0.5em] py-[0.5em]">
                            Attendees
                        </td>
                        <td className="pl-[0.5em] py-[0.5em]">
                            160+ students & faculty
                        </td>
                    </tr>
                    <tr>
                        <td className="font-normal pr-[0.5em] py-[0.5em]">
                            Chief Speaker
                        </td>
                        <td className="pl-[0.5em] py-[0.5em]">
                            Niteesh Yadav (Director, Design & Research,
                            PocketFM)
                        </td>
                    </tr>
                    <tr>
                        <td className="font-normal pr-[0.5em] py-[0.5em]">
                            Workshops
                        </td>
                        <td className="pl-[0.5em] py-[0.5em]">
                            Makey Makey Kits – Creative Controllers & Sound
                            Murals
                        </td>
                    </tr>
                    <tr>
                        <td className="font-normal pr-[0.5em] py-[0.5em]">
                            Interactive Displays
                        </td>
                        <td className="pl-[0.5em] py-[0.5em]">
                            HCI Projects, AR/VR, Immersive Tech
                        </td>
                    </tr>
                    <tr>
                        <td className="font-normal pr-[0.5em] py-[0.5em]">
                            Visual Identity
                        </td>
                        <td className="pl-[0.5em] py-[0.5em]">
                            Custom posters, banners, standees
                        </td>
                    </tr>
                    <tr>
                        <td className="font-normal pr-[0.5em] py-[0.5em]">
                            Organized by
                        </td>
                        <td className="pl-[0.5em] py-[0.5em]">
                            ACM SIGCHI IIIT Delhi Chapter
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
