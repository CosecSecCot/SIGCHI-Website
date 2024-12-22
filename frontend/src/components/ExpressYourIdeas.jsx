import { useForm } from "react-hook-form";

export default function ExpressYourIdeasSection() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        console.log(data);
    };

    return (
        <article className="font-barlow my-[76px] px-20 flex justify-between gap-24">
            <section className="space-y-[11px]">
                <h2 className="text-[66px] leading-[79px]">
                    Express Your{" "}
                    <span className="text-persian-blue">Ideas</span>
                </h2>
                <p className="mb-6 font-extralight text-[26px] leading-[34px] w-[60%] xl:w-[50%]">
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
                            className="flex justify-end text-persian-blue text-[34px] leading-[41px]"
                        >
                            Email ID
                        </label>
                        {errors.email && (
                            <span className="text-[24px] font-extralight italic text-gray-600">
                                {errors.email.message}
                            </span>
                        )}
                        <input
                            id="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Enter Email..."
                            className="border-2 border-persian-blue rounded-[4px] outline-none py-[17px] px-[24px] text-[20px] leading-[25px]"
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
                            className="flex justify-end text-persian-blue text-[34px] leading-[41px]"
                        >
                            Description
                        </label>
                        {errors.description && (
                            <span className="text-[24px] font-extralight italic text-gray-600">
                                {errors.description.message}
                            </span>
                        )}
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Enter Description..."
                            className="h-[175px] border-2 border-persian-blue rounded-[4px] outline-none py-[17px] px-[24px] text-[20px] leading-[25px]"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "Description is required!",
                                },
                            })}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="font-agdasima w-fit h-fit text-3xl bg-white border-[2px] border-persian-blue text-persian-blue rounded-md disabled:opacity-30"
                        >
                            <div className="flex gap-2 px-[25px]">
                                <span className="text-[27px] pt-[10px] pb-[15px]">
                                    Submit
                                </span>
                                <img
                                    src="/Arrow - Right.svg"
                                    alt=""
                                    width={30}
                                    height={30}
                                    className="pt-[14px] pb-[12px]"
                                />
                            </div>
                        </button>
                    </div>
                </form>
            </section>
        </article>
    );
}
