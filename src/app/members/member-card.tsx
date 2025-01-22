import Button from "@/components/button";
import Instagram from "@/components/icons/Instagram";
import Linkedin from "@/components/icons/Linkedin";
import Message from "@/components/icons/Message";
import Image from "next/image";

const iconMap: { [key: string]: React.ReactNode } = {
    email: (
        <Message className="relative w-[16px] sm:w-[20px] h-auto aspect-square fill-persian-blue sm:group-hover:fill-white" />
    ),
    instagram: (
        <Instagram className="relative w-[16px] sm:w-[20px] h-auto aspect-square fill-persian-blue sm:group-hover:fill-white" />
    ),
    linkedin: (
        <Linkedin className="relative w-[16px] sm:w-[20px] h-auto aspect-square fill-persian-blue sm:group-hover:fill-white" />
    ),
};

export default function MemberCard({
    image,
    name,
    position,
    socials,
}: {
    image?: string;
    name: string;
    position: string;
    socials?: { [key: string]: string };
}) {
    return (
        <div className="font-barlow min-w-[235px] flex flex-col gap-3">
            {image ? (
                <Image
                    src={image}
                    alt={name}
                    width={235}
                    height={235}
                    className="w-[235px] object-cover aspect-square rounded-[10px] bg-persian-blue"
                />
            ) : (
                <div className="w-full aspect-square rounded-[10px] bg-persian-blue" />
            )}
            <div>
                <div className="flex gap-2">
                    {socials &&
                        Object.keys(socials).map((social, idx) => {
                            return (
                                <Button key={idx}>
                                    <div className="p-[8px] sm:p-[10px]">
                                        {iconMap[social]}
                                    </div>
                                </Button>
                            );
                        })}
                </div>
                <h2 className="text-[27px] leading-[32px] sm:text-[36px] sm:leading-[43px]">
                    {name}
                </h2>
                <h3 className="text-[21px] leading-[25px] sm:text-[28px] sm:leading-[34px] opacity-60">
                    {position}
                </h3>
            </div>
        </div>
    );
}
