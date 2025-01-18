import Button from "../../components/Button";
import RightArrow from "../../components/icons/RightArrow";

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
                        <div
                            className="flex items-center gap-2 px-[16px] py-[9px] sm:px-[28px]
                            sm:py-[14px]"
                        >
                            <span className="relative">Learn More</span>
                            <RightArrow className="relative w-[1.25rem] sm:w-auto h-auto stroke-persian-blue sm:group-hover:stroke-white" />
                        </div>
                    </Button>
                </div>

                <div className="relative flex-1 hidden lg:flex justify-end">
                    <img src="/images/home/image2.svg" alt="" />
                </div>
            </section>
        </article>
    );
}
