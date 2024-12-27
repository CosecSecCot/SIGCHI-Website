import HomePage from "./Home";

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
];

export default pagesData;
