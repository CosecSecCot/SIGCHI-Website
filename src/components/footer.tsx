"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="font-barlow w-full bg-persian-blue text-white">
            <div className="flex flex-col w-full h-full px-[40px] md:px-[80px] py-[20px] md:py-[40px] gap-[16px] md:gap-[36px]">
                <div className="flex justify-between border-b sm:border-b-2 border-white border-dashed border-opacity-40 pb-[13px] md:pb-[48px]">
                    <div className="grid grid-cols-3 gap-x-[21px] md:gap-x-[66px] gap-y-[2px] md:gap-y-[4px] text-[15px] leading-tight md:text-[30px] md:leading-[36px] font-light">
                        <Link
                            href="/"
                            className="grid grid-cols-subgrid gap-x-[66px] col-span-3 pb-[6px] md:pb-[14px]"
                        >
                            <Image
                                src="/logo2.svg"
                                width={161}
                                height={164}
                                alt="IIITD SIG CHI"
                                className="w-[23px] md:w-[47px] h-auto"
                            />
                        </Link>
                        <Link href="/events">Events</Link>
                        <Link href="/aboutus">About Us</Link>
                        <Link href="">Resources</Link>
                        <Link href="/events">Workshops</Link>
                        <Link href="/members">Members</Link>
                        <Link href="">Archives</Link>
                        <Link href="">Blogs</Link>
                    </div>
                    <div className="hidden lg:flex items-center gap-[18px] flex-shrink">
                        <Image
                            src="/logo2.svg"
                            width={161}
                            height={164}
                            alt=""
                            className="w-[108px] h-auto"
                        />
                        <span className="text-[79px] leading-[95px] flex-shrink-0">
                            IIITD SIG <span className="font-bold">CHI.</span>
                        </span>
                    </div>
                </div>

                <div className="flex justify-between items-center gap-4 text-[14px] leading-tight md:text-[28px] md:leading-[33px]">
                    <span>IIIT Delhi’s ACM SIGCHI Student Chapter</span>
                    <div className="flex items-center gap-[15px] md:gap-[30px]">
                        <Link href="mailto:sigchi@iiitd.ac.in" target="_blank">
                            <Image
                                src="/icons/mail.svg"
                                width={22}
                                height={22}
                                alt="twitter"
                                className="w-[22px] md:w-[45px] h-auto"
                            />
                        </Link>
                        <Link
                            href="https://www.instagram.com/sigchi.iiitd"
                            target="_blank"
                        >
                            <Image
                                src="/icons/instagram_outline.svg"
                                width={22}
                                height={22}
                                alt="instagram"
                                className="w-[22px] md:w-[45px] h-auto"
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/acm-sigchi-iiitd"
                            target="_blank"
                        >
                            <Image
                                src="/icons/linkedin.svg"
                                width={22}
                                height={22}
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
