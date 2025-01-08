import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import MemberCard from "./MemberCard";
import SectionHeading from "./SectionHeading";

export default function MembersPage() {
    return (
        <>
            <Navbar />
            <main>
                <article className="mx-[31px] sm:mx-[81px]">
                    <section className="mt-[48px] sm:mt-[102px]">
                        <SectionHeading>Our Officers</SectionHeading>
                        <div className="w-full flex justify-start">
                            <div className="mt-[64px] flex flex-wrap gap-[60px] justify-center lg:justify-start">
                                {new Array(6).fill(0).map((_, idx) => (
                                    <MemberCard
                                        key={idx}
                                        name="Sagar Gupta"
                                        position="Chair"
                                        socials={{
                                            email: "mem" + idx + "@iiitd.ac.in",
                                            instagram: "insta/mem" + idx,
                                            linkedin: "linkedin/mem" + idx,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="mt-[72px] mb-[113px] sm:mb-[225px]">
                        <SectionHeading>Our Members</SectionHeading>
                        <div className="w-full flex justify-start">
                            <div className="mt-[64px] flex flex-wrap gap-[60px] justify-center lg:justify-start">
                                {new Array(9).fill(0).map((_, idx) => (
                                    <MemberCard
                                        key={idx}
                                        name="Sagar Gupta"
                                        position="Chair"
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}
