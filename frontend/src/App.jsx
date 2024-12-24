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
                    <section className="flex flex-col gap-[20px] sm:gap-8 w-fit pl-[31px] pt-[8px] sm:pl-[81px] sm:pt-[67px]">
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
                        <button className="font-agdasima w-fit h-fit flex items-center gap-2 px-[17px] py-[9px] sm:px-[28px] sm:py-[14px] text-[18px] sm:text-[30px] bg-white border-[1.5px] sm:border-[2px] border-persian-blue text-persian-blue rounded-md">
                            <span>Learn More</span>
                            <img
                                src="/Arrow - Right.svg"
                                alt=""
                                className="w-[20px] sm:w-auto h-auto"
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
