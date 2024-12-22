import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatIsGoingOnSection from "./components/WhatIsGoingOn";
import WhatIsACMSIGCHISection from "./components/WhatIsACMSIGCHI";
import ExpressYourIdeasSection from "./components/ExpressYourIdeas";

export default function App() {
    return (
        <>
            <Navbar />
            <main className="font-barlow pb-10">
                <article className="w-full">
                    <section className="flex flex-col gap-8 w-fit pl-[81px] pt-[67px]">
                        <div className="flex flex-col gap-2">
                            <h1 className="flex flex-col text-[66px] leading-[79px]">
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
                        <button className="font-agdasima w-fit h-fit flex items-center gap-2 px-[28px] text-3xl bg-white border-[2px] border-persian-blue text-persian-blue rounded-md">
                            <span className="pt-[12px] pb-[16px]">
                                Learn More
                            </span>
                            <img
                                src="/Arrow - Right.svg"
                                alt="Arrow Right"
                                className="pt-[16px] pb-[14px]"
                            />
                        </button>
                    </section>
                    <div className="absolute right-0 top-[179px] invisible min-[1220px]:visible">
                        <img src="/element1.svg" alt="" />
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
