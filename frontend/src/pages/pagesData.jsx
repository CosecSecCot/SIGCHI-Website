import AboutUsPage from "./AboutUs";
import ContactPage from "./Contact";
import EventsPage from "./Events";
import HomePage from "./Home";
import MembersPage from "./Members";
import NotFound from "./NotFound";
import ResourcesPage from "./Resources";

/**
 * @typedef {Object} routerType
 * @property {string} title
 * @property {string} path
 * @property {JSX.Element} element
 */

/** @type {routerType[]} */
const pagesData = [
    {
        path: "/",
        element: <HomePage />,
        title: "IIITD SIGCHI",
    },
    {
        path: "/aboutus",
        element: <AboutUsPage />,
        title: "About Us - IIITD SIGCHI",
    },
    {
        path: "/members",
        element: <MembersPage />,
        title: "Members - IIITD SIGCHI",
    },
    {
        path: "/events",
        element: <EventsPage />,
        title: "Events & Workshops - IIITD SIGCHI",
    },
    // {
    //     path: "/resources",
    //     element: <ResourcesPage />,
    //     title: "Resources - IIITD SIGCHI",
    // },
    {
        path: "/contact",
        element: <ContactPage />,
        title: "Contact Us - IIITD SIGCHI",
    },
    {
        path: "*",
        element: <NotFound />,
        title: "Page Not Found - IIITD SIGCHI",
    },
];

export default pagesData;
