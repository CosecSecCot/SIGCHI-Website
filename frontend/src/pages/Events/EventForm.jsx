import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import DownArrow from "../../components/icons/DownArrow";
import Search from "../../components/icons/Search";

/**
 * EventForm.
 * Form to filter or search for events.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onSubmit - Function to run when form is submitted.
 * @returns {JSX.Element} The Event Form.
 */
export default function EventForm({ onSubmit }) {
    const { register, handleSubmit } = useForm();

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center flex-wrap gap-4 font-agdasima text-[20px] leading-tight sm:text-[25px] sm:leading-[30px] font-extralight"
        >
            <div className="relative">
                <select
                    {...register("eventType")}
                    className="min-w-[200px] pl-[24px] sm:pl-[30px] pr-[75px] py-[10px] sm:py-[12px] border-2 border-persian-blue text-persian-blue bg-white rounded-full appearance-none focus:outline-none cursor-pointer"
                >
                    <option value="">Event Types</option>
                </select>
                <DownArrow className="absolute w-[30px] h-auto right-[24px] sm:right-[30px] top-1/2 transform -translate-y-1/2 pointer-events-none stroke-persian-blue" />
            </div>
            <div className="relative">
                <select
                    {...register("location")}
                    className="min-w-[200px] pl-[24px] sm:pl-[30px] pr-[75px] py-[10px] sm:py-[12px] border-2 border-persian-blue text-persian-blue bg-white rounded-full appearance-none focus:outline-none cursor-pointer"
                >
                    <option value="">Location</option>
                </select>
                <DownArrow className="absolute w-[30px] h-auto right-[24px] sm:right-[30px] top-1/2 transform -translate-y-1/2 pointer-events-none stroke-persian-blue" />
            </div>
            <div className="relative">
                <input
                    type="text"
                    {...register("search")}
                    placeholder="Search Event..."
                    className="w-[300px] px-[24px] sm:px-[30px] py-[10px] sm:py-[12px] border-2 border-persian-blue text-persian-blue bg-white rounded-full focus:outline-none placeholder:text-persian-blue placeholder:text-opacity-50"
                />
                <Search className="absolute w-[21px] h-auto right-[24px] sm:right-[30px] top-1/2 transform -translate-y-1/2 pointer-events-none stroke-persian-blue" />
            </div>
        </form>
    );
}

EventForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
