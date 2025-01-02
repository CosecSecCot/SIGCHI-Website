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
            className="scale-125 sm:scale-1 font-agdasima h-fit flex items-center border-2 border-persian-blue rounded-full overflow-hidden flex-shrink-0"
        >
            <input
                id="email"
                name="email"
                autoComplete="email"
                placeholder="ENTER YOUR EMAIL"
                className="flex-shrink text-[13px] sm:text-[26px] leading-[17px] sm:leading-[33px] outline-none px-[20px] sm:px-[40px] py-[17px] sm:py-[35px]"
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
                className="font-bold flex-shrink-0 text-[16px] sm:text-[32px] leading-[20px] sm:leading-[40px] px-[20px] sm:px-[40px] py-[10px] sm:py-[20px] mr-[8px] sm:mr-[16px] bg-persian-blue text-white rounded-full hover:scale-[1.02] transition-transform duration-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                LETS GO
            </button>
        </form>
    );
}

ResourcesForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
