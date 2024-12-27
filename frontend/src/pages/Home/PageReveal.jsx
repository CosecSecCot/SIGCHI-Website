/**
 * PageReveal Component
 *
 * This component displays a full-screen overlay with an animated logo and heading
 * that reveals the page content beneath it. The animation is powered by GSAP.
 * Once the animation completes, the overlay is removed from the DOM.
 *
 * @component
 *
 * @example
 * <PageReveal />
 *
 * @returns {JSX.Element} Returns the overlay.
 */
export default function PageReveal() {
    return (
        <div className="page-reveal-container fixed z-[100] w-full h-full bg-persian-blue flex flex-col md:flex-row justify-center items-center gap-10">
            <img
                src="/logo2.svg"
                alt="logo"
                className="page-reveal-logo h-auto w-[144px] md:w-[161px]"
            />
            <h1 className="page-reveal-text font-barlow text-[72px] md:text-[96px] text-white">
                IIITD SIG <span className="font-bold">CHI.</span>
            </h1>
        </div>
    );
}
