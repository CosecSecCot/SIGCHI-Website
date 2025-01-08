import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ContactCard from "./ContactCard";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-between gap-[86px] lg:gap-[172px]">
                <main className="min-h-[50vh] font-barlow">
                    <article className="mt-[30px] sm:mt-[60px] mx-[31px] sm:mx-[80px] flex justify-center">
                        <section className="flex gap-[68px] items-center max-w-[1120px] flex-wrap lg:flex-nowrap justify-center">
                            <div>
                                <span className="font-agdasima text-[20px] leading-[24px] text-persian-blue">
                                    CONTACT US FOR ANY QUERIES
                                </span>
                                <h1 className="text-[48px] leading-[58px]">
                                    Got a question? You can contact us through
                                    are contact information provided below.
                                </h1>
                            </div>
                            <h2 className="font-extralight text-[25px] leading-[34px]">
                                We are a collective of diverse thinkers
                                reimagining how human-technology interactions
                                can be seamless and meaningful.
                            </h2>
                        </section>
                    </article>
                    <article className="items-start mt-[30px] sm:mt-[60px] mx-[31px] sm:mx-[80px] flex justify-center">
                        <section className="flex gap-[24px] items-center max-w-[1120px] flex-wrap lg:flex-nowrap justify-center">
                            {new Array(3).fill(0).map((_, idx) => (
                                <ContactCard
                                    key={idx}
                                    title="sigchi@iiitd.ac.in"
                                    subtitle="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                                />
                            ))}
                        </section>
                    </article>
                </main>
                <Footer />
            </div>
        </>
    );
}
