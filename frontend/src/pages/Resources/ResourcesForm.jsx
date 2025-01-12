import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

/**
 * ResourcesForm.
 * Form to submit email for getting updates.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onSubmit - Function to run when form is submitted.
 * @returns {JSX.Element} The Resources Form.
 */
export default function ResourcesForm({ onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative scale-125 sm:scale-1 font-agdasima h-fit flex items-center border-2 border-persian-blue rounded-full overflow-hidden"
        >
            <input
                id="email"
                name="email"
                autoComplete="email"
                placeholder="ENTER YOUR EMAIL"
                className="text-[13px] md:text-[26px] leading-[17px] md:leading-[33px] outline-none pl-[20px] md:pl-[40px] pr-[100px] md:pr-[250px] py-[17px] md:py-[35px]"
                {...register("email", {
                    required: {
                        value: true,
                        message: "Email ID is required!",
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Email ID is incorrect!",
                    },
                })}
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className="absolute top-1/2 -translate-y-1/2 right-0 font-bold
                text-[16px] md:text-[32px] leading-[20px] md:leading-[40px]
                px-[20px] md:px-[40px] py-[10px] md:py-[20px] mr-[8px] md:mr-[16px]
                bg-persian-blue text-white rounded-full
                hover:scale-[1.02] transition-transform duration-100
                disabled:contrast-50 disabled:cursor-not-allowed"
            >
                LETS GO
            </button>
        </form>
    );
}

ResourcesForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
