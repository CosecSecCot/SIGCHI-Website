import { formatDate } from "@/utils/formatting";
import RightArrow from "@/components/icons/RightArrow";
import Image from "next/image";
import Link from "next/link";

/**
 * Event Card
 *
 * @example
 * <EventCard
 *     style="sm"
 *     date={new Date("Feburary 07, 2024 16:00:00")}
 *     title="This is the title"
 *     subtitle="This is the description."
 *     img="/image.jpeg"
 * />
 */
export default function EventCard({
    style = "sm",
    date,
    title,
    subtitle,
    img,
    href,
}: {
    style?: "sm" | "lg";
    date: Date;
    title: string;
    subtitle: string;
    img: string;
    href: string;
}) {
    switch (style) {
        case "lg":
            return (
                <div className="font-barlow flex gap-[30px] items-center flex-wrap min-[1185px]:flex-nowrap">
                    <Image
                        src={img}
                        width={400}
                        height={400}
                        alt={title}
                        className="max-h-[400px] rounded-xl object-cover"
                    />
                    <div className="space-y-[50px] sm:space-y-[67px]">
                        <div className="space-y-2">
                            <h3 className="font-agdasima text-persian-blue text-[17px] leading-[21px] sm:text-[24px] sm:leading-[28px]">
                                {formatDate(date)}
                            </h3>
                            <h2 className="text-[38px] leading-[42px] sm:text-[51px] sm:leading-[56px]">
                                {title}
                            </h2>
                            <p className="font-extralight text-[15px] leading-[18px] sm:text-[20px] sm:leading-[25px] md:w-[80%] xl:w-[70%]">
                                {subtitle}
                            </p>
                        </div>
                        <div>
                            <Link
                                href={href}
                                className="w-fit font-agdasima text-persian-blue text-[18px] leading-[21px] sm:text-[24px] sm:leading-[28px] flex gap-[12px] hover:gap-[14px] border-b sm:border-b-2 border-b-persian-blue border-opacity-0 hover:border-opacity-100 items-center transition-all"
                            >
                                VIEW EVENT DETAILS
                                <RightArrow className="w-[24px] h-auto stroke-persian-blue" />
                            </Link>
                        </div>
                    </div>
                </div>
            );
        case "sm":
            return (
                <div className="font-barlow max-w-[330px] flex flex-col gap-[30px] items-center">
                    <div className="relative group">
                        <Image
                            src={img}
                            width={330}
                            height={330}
                            alt={title}
                            className="aspect-square rounded-[20px] group-hover:rounded-full object-cover brightness-100 group-hover:brightness-50 transition-all delay-200"
                        />
                        <div className="invisible group-hover:visible flex justify-center items-center absolute top-0 left-0 w-full h-full delay-200">
                            <Link
                                href={href}
                                className="w-fit font-agdasima text-white text-[23px] leading-[28px] flex gap-[12px] hover:gap-[14px] border-b border-b-white"
                            >
                                VIEW EVENT DETAILS
                                <RightArrow className="w-[24px] h-auto stroke-white" />
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-[50px]">
                        <div className="space-y-2">
                            <h3 className="font-agdasima text-persian-blue text-[17px] leading-[21px]">
                                {formatDate(date)}
                            </h3>
                            <h2 className="text-[38px] leading-[42px]">
                                {title}
                            </h2>
                            <p className="font-extralight text-[15px] leading-[18px] w-[80%]">
                                {subtitle}
                            </p>
                        </div>
                        <div>
                            <Link
                                href=""
                                className="w-fit font-agdasima text-persian-blue text-[18px] leading-[21px] flex gap-[8px] hover:gap-[10px] border-b border-b-persian-blue border-opacity-0 hover:border-opacity-100 items-center transition-all"
                            >
                                VIEW EVENT DETAILS
                                <RightArrow className="w-[18px] h-auto stroke-persian-blue" />
                            </Link>
                        </div>
                    </div>
                </div>
            );
    }
}
