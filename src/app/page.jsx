export default function Home() {
    return (
        <main className="pb-10">
            <article className="w-full">
                <section className="main-content-container flex flex-col gap-[20px] sm:gap-8 w-fit pl-[31px] pt-[8px] sm:pl-[81px] sm:pt-[67px]">
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
                            We are a collective of diverse thinkers reimagining
                            how human-technology interactions can be seamless
                            and meaningful.
                        </h2>
                    </div>
                </section>
                <div
                    className="absolute right-0 top-[179px] invisible min-[1220px]:visible overflow-hidden"
                    aria-hidden={true}
                    role="presentation"
                >
                    <div className="bar-elements flex flex-col gap-[13px]">
                        <div className="flex justify-end">
                            <div className="min-w-[673px] w-[42vw] h-[101px] rounded-tl-[10px] rounded-bl-[10px] bg-persian-blue" />
                        </div>
                        <div className="flex justify-end">
                            <div className="min-w-[386px] w-[25vw] h-[101px] rounded-tl-[10px] rounded-bl-[10px] bg-persian-blue" />
                        </div>
                        <div className="flex justify-end">
                            <div className="min-w-[581px] w-[40vw] h-[101px] rounded-tl-[10px] rounded-bl-[10px] bg-persian-blue" />
                        </div>
                        <div className="flex justify-end">
                            <div className="min-w-[816px] w-[54vw] h-[101px] rounded-tl-[10px] rounded-bl-[10px] bg-persian-blue" />
                        </div>
                        <div className="flex justify-end gap-[33px] items-center">
                            <blockquote className="font-extralight text-right italic text-[26px] leading-[31px]">
                                “Great design doesn’t just bridge humans and
                                technology—it creates <br /> experiences that
                                feel natural, intuitive, and human at their
                                core.”
                            </blockquote>
                            <div className="min-w-[453px] w-[30vw] h-[101px] rounded-tl-[10px] rounded-bl-[10px] bg-persian-blue" />
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}
