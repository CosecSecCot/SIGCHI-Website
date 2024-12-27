import Button from "../../components/Button";

export default function WhatIsACMSIGCHISection() {
    return (
        <article className="mt-[76px] px-[30px] sm:px-[80px]">
            <section className="font-barlow flex justify-between gap-8">
                <div className="flex-1">
                    <h2 className="text-[35px] leading-[42px] sm:text-[66px] sm:leading-[79px]">
                        What is ACM{" "}
                        <span className="text-persian-blue">SIGCHI</span>
                    </h2>
                    <p className="mt-4 mb-6 font-extralight text-[16px] leading-[21px] sm:text-[26px] sm:leading-[34px]">
                        Special Interest Group on Computer Human Interaction
                        (SIGCHI) is the premier international society for
                        professionals, academics and students who are interested
                        in human-technology and human-computer interaction
                        (HCI).
                        <br />
                        <br />
                        SIGCHI provides a forum for the discussion of all
                        aspects of HCI through their conferences, publications,
                        web sites, email discussion groups, and other services.
                    </p>
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
                </div>

                <div className="relative flex-1 hidden lg:flex justify-end">
                    <img src="/element2.svg" alt="" />
                </div>
            </section>
        </article>
    );
}
