import Button from "./Button";

export default function WhatIsACMSIGCHISection() {
    return (
        <article className="mt-[76px] px-20">
            <section className="font-barlow flex justify-between gap-8">
                <div className="flex-1">
                    <h2 className="text-[66px] leading-[79px]">
                        What is ACM{" "}
                        <span className="text-persian-blue">SIGCHI</span>
                    </h2>
                    <p className="mt-4 mb-6 font-extralight text-[26px] leading-[34px]">
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
                    <Button type="sm">
                        <div className="flex items-center gap-2 text-[25px]">
                            <span className="pt-[10px] pb-[13px]">
                                Learn More
                            </span>
                            <img
                                src="/Arrow - Right.svg"
                                alt="Arrow Right"
                                className="pt-[13px] pb-[11px]"
                                width={28}
                                height={28}
                            />
                        </div>
                    </Button>
                </div>

                <div className="relative flex-1 flex justify-end">
                    <img src="/element2.svg" alt="" />
                </div>
            </section>
        </article>
    );
}
