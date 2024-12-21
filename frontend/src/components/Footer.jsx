import logo2 from "/logo2.svg";

export default function Footer() {
    return (
        <footer className="font-barlow w-full bg-persian-blue text-white">
            <div className="flex flex-col w-full h-full px-20 py-10 gap-9">
                <div className="flex justify-between border-b-2 border-white border-dashed border-opacity-40 pb-12">
                    <div className="grid grid-cols-3 gap-x-[66px] gap-y-1 text-[30px] leading-[36px] font-light">
                        <div className="grid grid-cols-subgrid gap-x-[66px] col-span-3 pb-[14px]">
                            <img
                                src={logo2}
                                alt="IIITD SIG CHI"
                                width={47}
                                height={48}
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
                    <div className="flex items-center gap-[18px]">
                        <img src={logo2} alt="" width={108} height={111} />
                        <span className="text-[79px] leading-[95px]">
                            IIITD SIG <span className="font-bold">CHI.</span>
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center text-[28px] leading-[33px]">
                    <div>IIIT Delhi’s ACM SIGCHI Student Chapter</div>
                    <div className="flex gap-[30px]">
                        <img src="/twitter.png" alt="twitter" />
                        <img src="/instagram.png" alt="instagram" />
                        <img src="/linkedin.png" alt="linkedin" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
