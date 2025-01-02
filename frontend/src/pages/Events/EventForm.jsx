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
            className="flex items-center flex-wrap gap-4 font-agdasima text-[25px] leading-[30px] font-extralight"
        >
            <div className="relative">
                <select
                    {...register("eventType")}
                    className="min-w-[200px] pl-[30px] pr-[75px] py-[12px] border-2 border-persian-blue text-persian-blue bg-white rounded-full appearance-none focus:outline-none cursor-pointer"
                >
                    <option value="">Event Types</option>
                    <option value="workshop">Workshop</option>
                    <option value="seminar">Seminar</option>
                    <option value="conference">Conference</option>
                </select>
                <DownArrow className="absolute w-[30px] h-auto right-[30px] top-1/2 transform -translate-y-1/2 pointer-events-none stroke-persian-blue" />
            </div>
            <div className="relative">
                <select
                    {...register("location")}
                    className="min-w-[200px] pl-[30px] pr-[75px] py-[12px] border-2 border-persian-blue text-persian-blue bg-white rounded-full appearance-none focus:outline-none cursor-pointer"
                >
                    <option value="">Location</option>
                    <option value="lorem-small">Lorem, ipsum.</option>
                    <option value="lorem-large">Lorem ipsum dolor sit.</option>
                    <option value="remote">Remote</option>
                </select>
                <DownArrow className="absolute w-[30px] h-auto right-[30px] top-1/2 transform -translate-y-1/2 pointer-events-none stroke-persian-blue" />
            </div>
            <div className="relative">
                <input
                    type="text"
                    {...register("search")}
                    placeholder="Search Event..."
                    className="w-[300px] px-[30px] py-[12px] border-2 border-persian-blue text-persian-blue bg-white rounded-full focus:outline-none placeholder:text-persian-blue placeholder:text-opacity-50"
                />
                <Search className="absolute w-[21px] h-auto right-[30px] top-1/2 transform -translate-y-1/2 pointer-events-none stroke-persian-blue" />
            </div>
        </form>
    );
}

EventForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
