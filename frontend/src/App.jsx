import Navbar from "./components/Navbar";

export default function App() {
    return (
        <>
            <Navbar />
            <main className="font-barlow">
                <div className="w-full h-full relative overflow-hidden">
                    <div className="absolute top-20 left-14 flex flex-col gap-2 mx-10">
                        <h1 className="flex flex-col text-7xl h-full">
                            Redefining the Way
                            <span>
                                <span className="barlow-condensed-extralight-italic text-[#1a36c0]">
                                    Humans
                                </span>{" "}
                                and Technology Connect
                            </span>
                        </h1>
                        <h2 className="font-extralight text-4xl w-[45%]">
                            We are a collective of diverse thinkers reimagining
                            how human-technology interactions can be seamless
                            and meaningful.
                        </h2>
                    </div>
                    <div className="w-full mt-9">
                        <svg
                            width="833"
                            height="557"
                            viewBox="0 0 833 557"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative w-full left-[20%]"
                        >
                            <rect
                                x="160"
                                width="2000"
                                height="101"
                                rx="10"
                                fill="#1A36C0"
                            />
                            <rect
                                x="447"
                                y="114"
                                width="2000"
                                height="101"
                                rx="10"
                                fill="#1A36C0"
                            />
                            <rect
                                x="252"
                                y="228"
                                width="2000"
                                height="101"
                                rx="10"
                                fill="#1A36C0"
                            />
                            <rect
                                y="342"
                                width="2000"
                                height="101"
                                rx="10"
                                fill="#1A36C0"
                            />
                            <rect
                                x="380"
                                y="456"
                                width="2000"
                                height="101"
                                rx="10"
                                fill="#1A36C0"
                            />
                        </svg>
                    </div>
                </div>
            </main>
        </>
    );
}
