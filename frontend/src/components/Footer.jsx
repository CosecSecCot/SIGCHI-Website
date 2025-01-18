import { Link } from "react-router";
import logo2 from "/logo2.svg";

export default function Footer() {
    return (
        <footer className="font-barlow w-full bg-persian-blue text-white">
            <div className="flex flex-col w-full h-full px-[40px] md:px-[80px] py-[20px] md:py-[40px] gap-[16px] md:gap-[36px]">
                <div className="flex justify-between border-b sm:border-b-2 border-white border-dashed border-opacity-40 pb-[13px] md:pb-[48px]">
                    <div className="grid grid-cols-3 gap-x-[21px] md:gap-x-[66px] gap-y-[2px] md:gap-y-[4px] text-[15px] leading-tight md:text-[30px] md:leading-[36px] font-light">
                        <Link
                            to="/"
                            className="grid grid-cols-subgrid gap-x-[66px] col-span-3 pb-[6px] md:pb-[14px]"
                        >
                            <img
                                src={logo2}
                                alt="IIITD SIG CHI"
                                className="w-[23px] md:w-[47px] h-auto"
                            />
                        </Link>
                        <Link to="/events">Events</Link>
                        <Link to="/aboutus">About Us</Link>
                        <Link to="">Resources</Link>
                        <Link to="/events">Workshops</Link>
                        <Link to="/members">Members</Link>
                        <Link to="">Archives</Link>
                        <Link to="">Blogs</Link>
                    </div>
                    <div className="hidden lg:flex items-center gap-[18px] flex-shrink">
                        <img src={logo2} alt="" className="w-[108px] h-auto" />
                        <span className="text-[79px] leading-[95px] flex-shrink-0">
                            IIITD SIG <span className="font-bold">CHI.</span>
                        </span>
                    </div>
                </div>

                <div className="flex justify-between items-center gap-4 text-[14px] leading-tight md:text-[28px] md:leading-[33px]">
                    <span>IIIT Delhi’s ACM SIGCHI Student Chapter</span>
                    <div className="flex gap-[15px] md:gap-[30px]">
                        <Link to="">
                            <img
                                src="/twitter.png"
                                alt="twitter"
                                className="w-[22px] md:w-[45px] h-auto"
                            />
                        </Link>
                        <Link to="">
                            <img
                                src="/instagram.png"
                                alt="instagram"
                                className="w-[22px] md:w-[45px] h-auto"
                            />
                        </Link>
                        <Link to="">
                            <img
                                src="/linkedin.png"
                                alt="linkedin"
                                className="w-[22px] md:w-[45px] h-auto"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
