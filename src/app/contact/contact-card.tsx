"use client";

/**
 * Contact Card
 *
 * @example
 * <ContactCard
 *     title="This is the title"
 *     subtitle="This is the description."
 * />
 */
export default function ContactCard({
    icon,
    title,
    subtitle,
}: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}) {
    return (
        <div
            className={`font-barlow p-[25px] bg-persian-blue text-white rounded-md overflow-hidden space-y-[7px] hover:-translate-y-1 transition-transform duration-100`}
            style={{
                boxShadow: "-9px 10px 0 0 #000000",
            }}
        >
            {icon}
            <h3 className="text-[24px] leading-[29px]">{title}</h3>
            <p className="font-extralight text-[17px] leading-[20px]">
                {subtitle}
            </p>
        </div>
    );
}
