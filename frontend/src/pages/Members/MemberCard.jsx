import PropTypes from "prop-types";
import Button from "../../components/Button";
import Instagram from "../../components/icons/Instagram";
import Linkedin from "../../components/icons/Linkedin";
import Message from "../../components/icons/Message";

const iconMap = {
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

/**
 * MemberCard.
 *
 * @param {Object} props - The component props.
 * @param {string} props.image
 * @param {string} props.name
 * @param {string} props.position
 * @param {Object<string, string>|undefined} props.socials
 * @returns {JSX.Element} - The MemberCard component.
 */
export default function MemberCard({ image, name, position, socials }) {
    return (
        <div className="font-barlow min-w-[235px] flex flex-col gap-3">
            {image ? (
                <img
                    src={image}
                    alt={name}
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

MemberCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    socials: PropTypes.objectOf(PropTypes.string),
};
