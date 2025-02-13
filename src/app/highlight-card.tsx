import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export default function HighlightCard({
    href,
    number,
    date,
    title,
    subtitle,
    description,
    image,
    border = true,
}: {
    href: string;
    number: string;
    date?: string;
    title: string;
    subtitle: string;
    description: string;
    image: StaticImport;
    border?: boolean;
}) {
    return (
        <Link
            href={href}
            className={`highlight-card flex justify-between gap-3 sm:gap-10 ${border ? "border-b sm:border-b-2 border-black border-opacity-20" : ""} pb-[16px] sm:pb-[45px] overflow-hidden`}
        >
            <div className="flex sm:gap-[51px]">
                <div className="flex gap-[12px] sm:gap-[29px]">
                    <div className="relative top-[24px] sm:top-[29px] highlight-card-index font-agdasima text-persian-blue text-[19px] sm:text-[45px] leading-none">
                        {number}
                    </div>
                    <div>
                        <div className="-space-y-1">
                            <span className="highlight-card-date font-light text-[10px] sm:text-[20px] leading-tight italic">
                                {date}
                            </span>
                            <h2 className="highlight-card-heading text-[20px] sm:text-[48px] leading-tight">
                                {title}
                            </h2>
                        </div>
                        <h3 className="highlight-card-subheading text-persian-blue text-[13px] sm:text-[30px]">
                            {subtitle}
                        </h3>
                    </div>
                </div>
                <p className="highlight-card-text font-extralight text-[26px] w-[50%] hidden lg:block">
                    {description}
                </p>
            </div>
            <div className="highlight-card-image lg:flex-shrink-0">
                <Image src={image} alt="" />
            </div>
        </Link>
    );
}
