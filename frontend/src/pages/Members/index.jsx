import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import MemberCard from "./MemberCard";
import SectionHeading from "./SectionHeading";

const officers = [
    {
        name: "Sagar Gupta",
        position: "Chair",
        image: "/images/members/member1.png",
    },
    {
        name: "Riya Jain",
        position: "Vice Chair",
        image: "/images/members/member2.jpeg",
    },
    {
        name: "Midam Srivastava",
        position: "Treasurer",
        image: "/images/members/member3.png",
    },
    {
        name: "Beas Bishnu",
        position: "Secretary",
        image: "",
    },
    {
        name: "Anmol Srivastava",
        position: "Faculty Sponsor",
        image: "/images/members/member4.png",
    },
];

const coreTeam = [
    {
        name: "Anouska Sahoo",
        position: "General Director",
        image: "/images/members/member5.png",
    },
    {
        name: "Jagjot Singh",
        position: "Head of Web Dev",
        image: "",
    },
    {
        name: "Sarabjeet Singh",
        position: "Webmaster",
        image: "/images/members/member7.png",
    },
    {
        name: "Aishwary S. Panwar",
        position: "Webmaster",
        image: "",
    },
    {
        name: "Aditya Padma",
        position: "Mentor",
        image: "/images/members/member8.jpeg",
    },
];

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
                                {officers.map(
                                    ({ name, position, image }, idx) => (
                                        <MemberCard
                                            key={idx}
                                            image={image}
                                            name={name}
                                            position={position}
                                            socials={{
                                                email:
                                                    "mem" +
                                                    idx +
                                                    "@iiitd.ac.in",
                                                instagram: "insta/mem" + idx,
                                                linkedin: "linkedin/mem" + idx,
                                            }}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </section>
                    <section className="mt-[63px]">
                        <SectionHeading>Core Team</SectionHeading>
                        <div className="w-full flex justify-start">
                            <div className="mt-[64px] flex flex-wrap gap-[60px] justify-center lg:justify-start">
                                {coreTeam.map(
                                    ({ name, position, image }, idx) => (
                                        <MemberCard
                                            key={idx}
                                            image={image}
                                            name={name}
                                            position={position}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </section>
                    <section className="mt-[62px] mb-[113px] sm:mb-[225px]">
                        <SectionHeading>SIGCHI Action Cohort</SectionHeading>
                        <div className="w-full flex justify-start">
                            <div className="mt-[64px] flex flex-wrap gap-[60px] justify-center lg:justify-start">
                                <MemberCard
                                    name="You"
                                    position="Waiting for you!"
                                />
                            </div>
                        </div>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}
