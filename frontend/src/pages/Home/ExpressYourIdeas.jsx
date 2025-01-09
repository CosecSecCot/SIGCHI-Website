import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import RightArrow from "../../components/icons/RightArrow";

export default function ExpressYourIdeasSection() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    /**
     * Prints out form data in console after 1 second of delay (to simulate network delay).
     * */
    const onSubmit = async (data) => {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        console.log(data);
    };

    return (
        <article className="font-barlow my-[56px] sm:my-[76px] px-[30px] sm:px-[80px] flex flex-col lg:flex-row lg:justify-between gap-[20px] lg:gap-24">
            <section className="space-y-[11px]">
                <h2 className="text-[35px] leading-[42px] sm:text-[66px] sm:leading-[79px]">
                    Express Your{" "}
                    <span className="text-persian-blue">Ideas</span>
                </h2>
                <p className="mb-6 font-extralight text-[16px] leading-[21px] sm:text-[26px] sm:leading-[34px] w-[80%] sm:w-[60%] xl:w-[50%]">
                    SIGCHI provides a forum for the discussion of all aspects of
                    HCI through their conferences, publications, web sites,
                    email discussion groups, and other services.
                </p>
            </section>
            <section className="w-full xl:w-[60%]">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full space-y-[18px]"
                >
                    <div className="flex flex-col gap-[5px]">
                        <label
                            htmlFor="email"
                            className="flex lg:justify-end text-persian-blue text-[18px] leading-[21px] sm:text-[34px] sm:leading-[41px]"
                        >
                            Email ID
                        </label>
                        {errors.email && (
                            <span className="text-[14px] sm:text-[24px] font-extralight italic text-zinc-600">
                                {errors.email.message}
                            </span>
                        )}
                        <input
                            id="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Enter Email..."
                            className="border sm:border-2 border-persian-blue rounded-[4px] outline-none px-[12px] py-[8px] sm:py-[17px] sm:px-[24px] text-[11px] leading-[13px] sm:text-[20px] sm:leading-[25px]"
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
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <label
                            htmlFor="description"
                            className="flex lg:justify-end text-persian-blue text-[18px] leading-[21px] sm:text-[34px] sm:leading-[41px]"
                        >
                            Description
                        </label>
                        {errors.description && (
                            <span className="text-[14px] sm:text-[24px] font-extralight italic text-zinc-600">
                                {errors.description.message}
                            </span>
                        )}
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Enter Description..."
                            className="h-[91px] sm:h-[175px] border sm:border-2 border-persian-blue rounded-[4px] outline-none px-[12px] py-[8px] sm:py-[17px] sm:px-[24px] text-[11px] leading-[13px] sm:text-[20px] sm:leading-[25px]"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "Description is required!",
                                },
                            })}
                        />
                    </div>
                    <div className="flex lg:justify-end">
                        <Button type="submit" disabled={isSubmitting}>
                            <div
                                className="flex items-center gap-2 px-[16px] py-[9px] sm:px-[28px]
                            sm:py-[14px]"
                            >
                                <span className="relative">Submit</span>
                                <RightArrow className="relative w-[1.25rem] sm:w-auto h-auto stroke-persian-blue sm:group-hover:stroke-white" />
                            </div>
                        </Button>
                    </div>
                </form>
            </section>
        </article>
    );
}
