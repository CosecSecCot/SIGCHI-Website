import { Route, Routes } from "react-router";
import pagesData from "./pagesData";
import PageTitle from "./pageTitle";

export default function Router() {
    const pageRoutes = pagesData.map(({ path, title, element }, idx) => {
        return (
            <Route
                key={idx}
                path={`/${path}`}
                element={
                    <>
                        <PageTitle title={title} />
                        {element}
                    </>
                }
            />
        );
    });

    return <Routes>{pageRoutes}</Routes>;
}
