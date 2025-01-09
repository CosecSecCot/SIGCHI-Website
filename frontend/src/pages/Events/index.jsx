import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EventForm from "./EventForm";
import EventCard from "./EventCard";

export default function EventsPage() {
    const onFormSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <Navbar />
            <main className="font-barlow min-h-[70vh] pb-10">
                <section className="space-y-4 mx-[31px] sm:mx-[80px] mt-[8px] sm:mt-[79px]">
                    <h1 className="text-[51px] leading-[53px] sm:text-[96px] sm:leading-[100px] lg:w-[80%] xl:w-[50%]">
                        Explore upcoming events and workshops.
                    </h1>
                    <p className="font-extralight text-[20px] leading-[23px] sm:text-[30px] sm:leading-[34px] md:w-[70%] lg:w-[50%] xl:w-[30%]">
                        We are a collective of diverse thinkers reimagining how
                        human-technology interactions can be seamless and
                        meaningful.
                    </p>
                </section>
                <section className="mx-[31px] sm:mx-[80px] my-[55px]">
                    <div className="flex justify-between gap-4 flex-wrap">
                        <EventForm onSubmit={onFormSubmit} />
                        <button
                            type="button"
                            className="ml-6 font-agdasima font-bold text-[20px] leading-[24px] text-persian-blue"
                        >
                            Show Past Events
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <div className="mt-[80px] flex flex-wrap gap-[64px] justify-center max-w-[1118px]">
                            <EventCard
                                style="lg"
                                date={new Date("Feburary 07, 2024 16:00:00")}
                                title="Explore the Future : Design and Computation"
                                subtitle="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                                img="/image1.jpeg"
                            />
                            <EventCard
                                style="sm"
                                date={new Date("Feburary 07, 2024 16:00:00")}
                                title="Explore the Future : Design and Computation"
                                subtitle="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                                img="/image4.jpeg"
                            />
                            <EventCard
                                style="sm"
                                date={new Date("Feburary 07, 2024 16:00:00")}
                                title="Explore the Future : Design and Computation"
                                subtitle="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                                img="/image2.jpeg"
                            />
                            <EventCard
                                style="sm"
                                date={new Date("Feburary 07, 2024 16:00:00")}
                                title="Explore the Future : Design and Computation"
                                subtitle="We are a collective of diverse thinkers reimagining how human-technology interactions can be seamless and meaningful."
                                img="/image3.jpeg"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
