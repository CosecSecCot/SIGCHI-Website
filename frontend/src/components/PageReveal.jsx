import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

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
 * @returns {JSX.Element | null} Returns the overlay JSX if animation is in progress, otherwise `null`.
 *
 * @dependencies
 * - `gsap`: For animations.
 * - `@gsap/react`: React integration for GSAP.
 */
export default function PageReveal() {
    const [animationComplete, setAnimationComplete] = useState(false);
    const containerRef = useRef();
    const logoRef = useRef();
    const headingRef = useRef();

    useGSAP(
        () => {
            if (animationComplete) return;

            let timeline = gsap.timeline({
                defaults: { ease: "power4.inOut", duration: 2 },
            });

            timeline.fromTo(
                logoRef.current,
                {
                    y: 50,
                    opacity: 0,
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                    y: 0,
                    opacity: 1,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }
            );

            timeline.fromTo(
                headingRef.current,
                {
                    y: 50,
                    opacity: 0,
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                    y: 0,
                    opacity: 1,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                },
                "-=1.75"
            );

            timeline.to(containerRef.current, {
                scale: 50,
                y: "-5000%",
                onComplete: () => setAnimationComplete(true),
            });

            return () => {
                console.log("i want to delete the overlay now...");
            };
        },
        { scope: containerRef.current }
    );

    if (animationComplete) return;

    return (
        <div
            ref={containerRef}
            className="fixed z-[100] w-full h-full bg-persian-blue flex flex-col md:flex-row justify-center items-center gap-10"
        >
            <img
                src="/logo2.svg"
                alt="logo"
                ref={logoRef}
                className="h-auto w-[144px] md:w-[161px]"
            />
            <h1
                ref={headingRef}
                className="font-barlow text-[72px] md:text-[96px] text-white"
            >
                IIITD SIG <span className="font-bold">CHI.</span>
            </h1>
        </div>
    );
}
