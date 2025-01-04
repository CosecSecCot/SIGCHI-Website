import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * PageTitle.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - Page title.
 */
export default function PageTitle({ title }) {
    const location = useLocation();

    useEffect(() => {
        document.title = title;
    }, [location, title]);
}
