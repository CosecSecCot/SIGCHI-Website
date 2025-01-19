import PropTypes from "prop-types";

/**
 * ActivityCard.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title.
 * @param {string} props.description - The description.
 * @param {any} props.icon - The icon.
 * @param {boolean} props.iconWithBar - `icon` will have a bar at its left. (default - `false`)
 * @param {"sm"|"lg"} props.size - Size of the card. (default - "sm")
 * @param {"inverted"|"default"} props.style - Style of the card. (default - "default")
 */
export default function ActivityCard({
    title,
    description,
    icon,
    iconWithBar = false,
    size = "sm",
    style,
}) {
    if (style == "inverted") {
        switch (size) {
            case "sm":
                return (
                    <div className="max-w-[275px] bg-persian-blue text-white px-[18px] py-[22px] rounded-lg">
                        <div className="flex items-center gap-2">
                            {iconWithBar ? (
                                <svg
                                    width="4"
                                    height="30"
                                    viewBox="0 0 4 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 0V32"
                                        stroke="#FFFFFF"
                                        strokeWidth="3"
                                    />
                                </svg>
                            ) : (
                                ""
                            )}
                            {icon}
                        </div>
                        <h3 className="font-normal text-[24px] leading-[28px] sm:text-[32px] sm:leading-[38px]">
                            {title}
                        </h3>
                        <p className="font-extralight text-[17px] leading-[20px] sm:text-[22px] sm:leading-[26px]">
                            {description}
                        </p>
                    </div>
                );
            case "lg":
                return (
                    <div className="max-w-[275px] sm:max-w-[352px] bg-persian-blue text-white px-[22px] py-[25px] rounded-[10px]">
                        <div className="flex items-center gap-2">
                            {iconWithBar ? (
                                <svg
                                    width="4"
                                    height="30"
                                    viewBox="0 0 4 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 0V32"
                                        stroke="#FFFFFF"
                                        strokeWidth="3"
                                    />
                                </svg>
                            ) : (
                                ""
                            )}
                            {icon}
                        </div>
                        <h3 className="font-normal text-[26px] leading-[30px] sm:text-[34px] sm:leading-[40px]">
                            {title}
                        </h3>
                        <p className="font-extralight text-[17px] leading-[20px] sm:text-[23px] sm:leading-[28px]">
                            {description}
                        </p>
                    </div>
                );
        }
    } else {
        switch (size) {
            case "sm":
                return (
                    <div className="max-w-[275px]">
                        <div className="flex items-center gap-2">
                            {iconWithBar ? (
                                <svg
                                    width="4"
                                    height="30"
                                    viewBox="0 0 4 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 0V32"
                                        stroke="#1A36C0"
                                        strokeWidth="3"
                                    />
                                </svg>
                            ) : (
                                ""
                            )}
                            {icon}
                        </div>
                        <h3 className="font-normal text-[24px] leading-[28px] sm:text-[32px] sm:leading-[38px]">
                            {title}
                        </h3>
                        <p className="font-extralight text-[17px] leading-[20px] sm:text-[22px] sm:leading-[26px]">
                            {description}
                        </p>
                    </div>
                );
            case "lg":
                return (
                    <div className="max-w-[275px] sm:max-w-[325px]">
                        <div className="flex items-center gap-2">
                            {iconWithBar ? (
                                <svg
                                    width="4"
                                    height="30"
                                    viewBox="0 0 4 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 0V32"
                                        stroke="#1A36C0"
                                        strokeWidth="3"
                                    />
                                </svg>
                            ) : (
                                ""
                            )}
                            {icon}
                        </div>
                        <h3 className="font-normal text-[26px] leading-[30px] sm:text-[34px] sm:leading-[40px]">
                            {title}
                        </h3>
                        <p className="font-extralight text-[17px] leading-[20px] sm:text-[23px] sm:leading-[28px]">
                            {description}
                        </p>
                    </div>
                );
        }
    }
}

ActivityCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
    iconWithBar: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "lg"]),
    style: PropTypes.oneOf(["inverted"]),
};
