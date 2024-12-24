import logo2 from "/logo2.svg";

export default function Footer() {
    return (
        <footer className="font-barlow w-full bg-persian-blue text-white">
            <div className="flex flex-col w-full h-full px-[20px] lg:px-[80px] py-[13px] lg:py-[40px] gap-[16px] lg:gap-[36px]">
                <div className="flex justify-between border-b sm:border-b-2 border-white border-dashed border-opacity-40 pb-[13px] lg:pb-[48px]">
                    <div className="grid grid-cols-3 gap-x-[21px] lg:gap-x-[66px] gap-y-[2px] lg:gap-y-[4px] text-[10px] leading-[12px] lg:text-[30px] lg:leading-[36px] font-light">
                        <div className="grid grid-cols-subgrid gap-x-[66px] col-span-3 pb-[6px] lg:pb-[14px]">
                            <img
                                src={logo2}
                                alt="IIITD SIG CHI"
                                className="w-[15px] lg:w-[47px] h-auto"
                            />
                        </div>
                        <a href="">Events</a>
                        <a href="">About Us</a>
                        <a href="">Resources</a>
                        <a href="">Workshops</a>
                        <a href="">Members</a>
                        <a href="">Archives</a>
                        <a href="">Blogs</a>
                    </div>
                    <div className="flex items-center gap-[5px] lg:gap-[18px] flex-shrink-0">
                        <img
                            src={logo2}
                            alt=""
                            className="w-[35px] lg:w-[108px] h-auto"
                        />
                        <span className="text-[25px] leading-[30px] lg:text-[79px] lg:leading-[95px]">
                            IIITD SIG <span className="font-bold">CHI.</span>
                        </span>
                    </div>
                </div>

                <div className="flex justify-between items-center text-[12px] leading-[15px] lg:text-[28px] lg:leading-[33px]">
                    <div>IIIT Delhi’s ACM SIGCHI Student Chapter</div>
                    <div className="flex gap-[13px] lg:gap-[30px]">
                        <img
                            src="/twitter.png"
                            alt="twitter"
                            className="w-[20px] lg:w-[45px] h-auto"
                        />
                        <img
                            src="/instagram.png"
                            alt="instagram"
                            className="w-[20px] lg:w-[45px] h-auto"
                        />
                        <img
                            src="/linkedin.png"
                            alt="linkedin"
                            className="w-[20px] lg:w-[45px] h-auto"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
