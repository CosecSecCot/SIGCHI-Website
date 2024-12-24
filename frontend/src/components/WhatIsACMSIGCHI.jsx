import Button from "./Button";

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
                    <button className="font-agdasima w-fit h-fit flex items-center gap-2 px-[17px] py-[9px] sm:px-[28px] sm:py-[14px] text-[18px] sm:text-[30px] bg-white border-[1.5px] sm:border-[2px] border-persian-blue text-persian-blue rounded-md">
                        <span>Learn More</span>
                        <img
                            src="/Arrow - Right.svg"
                            alt=""
                            className="w-[20px] sm:w-auto h-auto"
                        />
                    </button>
                </div>

                <div className="relative flex-1 hidden lg:flex justify-end">
                    <img src="/element2.svg" alt="" />
                </div>
            </section>
        </article>
    );
}
