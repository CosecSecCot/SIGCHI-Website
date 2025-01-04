import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ActivityCard from "./ActivityCard";

export default function AboutUsPage() {
    return (
        <>
            <Navbar />
            <main className="font-barlow">
                <article className="mt-[8px] sm:mt-[112px] mx-[31px] sm:mx-[80px] flex flex-col lg:flex-row gap-[120px] justify-center items-center">
                    <div className="max-w-[378px] space-y-[68px]">
                        <img
                            src="/image5.png"
                            alt="image5"
                            className="max-h-[464px]"
                        />
                        <div className="flex justify-end">
                            <blockquote className="font-extralight text-[21px] leading-tight sm:text-[26px] sm:leading-[31px] text-right italic sm:w-[90%]">
                                “Great design doesn’t just bridge humans and
                                technology—it creates experiences that feel
                                natural, intuitive, and human at their core.”
                            </blockquote>
                        </div>
                    </div>
                    <section className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-x-[40px] gap-y-[48px]">
                        {new Array(6).fill(0).map((_, idx) => (
                            <ActivityCard
                                key={idx}
                                title="Diversity in Human Centric Design"
                                description="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                                iconWithBar={true}
                            />
                        ))}
                    </section>
                </article>
                <article className="mt-[69px] sm:mt-[112px] mx-[31px] sm:mx-[80px] mb-[88px] ">
                    <div className="star-style-heading flex justify-center">
                        <img
                            src="/our-teams.svg"
                            alt="Our Teams"
                            className="h-[150px] sm:h-[192px] w-auto object-cover"
                        />
                    </div>
                    <section className="mt-[35px] w-full flex justify-center">
                        <div className="flex flex-wrap gap-x-[80px] gap-y-[48px] justify-center max-w-[1135px]">
                            {new Array(6).fill(0).map((_, idx) => (
                                <ActivityCard
                                    key={idx}
                                    title="Diversity in Human Centric Design"
                                    description="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                                    size="lg"
                                />
                            ))}
                        </div>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}
