import Button from "./components/Button";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatIsGoingOnSection from "./components/WhatIsGoingOn";
import WhatIsACMSIGCHISection from "./components/WhatIsACMSIGCHI";

export default function App() {
    return (
        <>
            <Navbar />
            <main className="font-barlow pb-10">
                <article className="w-full h-full relative overflow-hidden">
                    <section className="absolute top-[99px] left-12 flex flex-col gap-8 mx-10">
                        <div className="flex flex-col gap-2">
                            <h1 className="flex flex-col text-[66px] leading-[79px] h-full">
                                Redefining the Way
                                <span>
                                    <span className="font-extralight italic text-persian-blue">
                                        Humans
                                    </span>{" "}
                                    and Technology Connect
                                </span>
                            </h1>
                            <h2 className="font-extralight text-[30px] leading-[34px] w-[45%]">
                                We are a collective of diverse thinkers
                                reimagining how human-technology interactions
                                can be seamless and meaningful.
                            </h2>
                        </div>
                        <Button>
                            <div className="flex items-center gap-2 px-[28px]">
                                <span className="pt-[12px] pb-[16px]">
                                    Learn More
                                </span>
                                <img
                                    src="/Arrow - Right.svg"
                                    alt="Arrow Right"
                                    className="pt-[16px] pb-[14px]"
                                />
                            </div>
                        </Button>
                    </section>

                    <div className="w-full mt-[61px]">
                        <svg
                            width="833"
                            height="557"
                            viewBox="0 0 833 557"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative w-full left-[20%]"
                        >
                            <rect
                                x="160"
                                width="2000"
                                height="101"
                                rx="10"
                                fill="#1A36C0"
                            />
                            <rect
                                x="447"
                                y="114"
                                width="2000"
                                height="101"
                                rx="10"
                                fill="#1A36C0"
                            />
                            <rect
                                x="252"
                                y="228"
                                width="2000"
                                height="101"
                                rx="10"
                                fill="#1A36C0"
                            />
                            <rect
                                y="342"
                                width="2000"
                                height="101"
                                rx="10"
                                fill="#1A36C0"
                            />
                            <rect
                                x="380"
                                y="456"
                                width="2000"
                                height="101"
                                rx="10"
                                fill="#1A36C0"
                            />
                        </svg>
                    </div>
                </article>
                <WhatIsGoingOnSection />
                <WhatIsACMSIGCHISection />
            </main>
            <Footer />
        </>
    );
}
