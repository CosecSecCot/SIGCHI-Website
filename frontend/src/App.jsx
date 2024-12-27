import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatIsGoingOnSection from "./components/WhatIsGoingOn";
import WhatIsACMSIGCHISection from "./components/WhatIsACMSIGCHI";
import ExpressYourIdeasSection from "./components/ExpressYourIdeas";
import PageReveal from "./components/PageReveal";
import Button from "./components/Button";

export default function App() {
    return (
        <>
            <PageReveal />
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
