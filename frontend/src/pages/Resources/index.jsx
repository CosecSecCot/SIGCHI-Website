import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ResourcesCard from "./ResourceCard";
import ResourcesForm from "./ResourcesForm";

export default function ResourcesPage() {
    return (
        <>
            <div className="absolute top-0 left-0 w-full">
                <Navbar />
            </div>
            <main className="font-barlow">
                <div className="absolute top-0 left-0 z-0 w-full max-h-[400px] h-[50vh] bg-persian-blue"></div>
                <article className="mt-[223px] relative flex justify-center">
                    <section className="flex flex-wrap gap-[32px] max-w-[1120px] justify-center">
                        {/* BUG: at certain heights, image doesn't appear. */}
                        <div className="w-[338px] flex flex-col gap-[34px]">
                            <ResourcesCard
                                title="Explore the Future : Design and Computation"
                                subtitle="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                                aspect="square"
                            />
                            <ResourcesCard
                                title="Explore the Future : Design and Computation"
                                subtitle="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                            />
                        </div>
                        <div className="w-[380px] hidden lg:flex flex-col gap-[34px]">
                            <ResourcesCard
                                title="Explore the Future : Design and Computation"
                                subtitle="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                            />
                            <ResourcesCard
                                title="Explore the Future : Design and Computation"
                                subtitle="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                                aspect="square"
                            />
                        </div>
                        <div className="w-[338px] hidden xl:flex flex-col gap-[34px]">
                            <ResourcesCard
                                title="Explore the Future : Design and Computation"
                                subtitle="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                                aspect="square"
                            />
                            <ResourcesCard
                                title="Explore the Future : Design and Computation"
                                subtitle="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                            />
                        </div>
                    </section>
                </article>

                <article className="mx-[80px] my-[92px] flex justify-center">
                    <section className="flex flex-col lg:flex-row gap-[48px] items-center justify-evenly">
                        <h1 className="sm:w-[50%] text-[36px] sm:text-[48px] leading-[44px] sm:leading-[58px]">
                            Join our resources of SIGCHI and get the latest
                            acitvity update into your inbox monthly.
                        </h1>
                        <ResourcesForm
                            onSubmit={async (data) => {
                                await new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                    }, 1000);
                                });
                                console.log(data);
                            }}
                        />
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}
