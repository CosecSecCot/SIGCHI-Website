/**
 *
 * Down Arrow Icon
 *
 * @example
 * <DownArrow className="w-4 h-auto aspect-square" />
 */
export default function DownArrow({ className }: { className?: string }) {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M23.75 10.625L15 19.375L6.25 10.625"
                stroke=""
                strokeWidth="1.875"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
