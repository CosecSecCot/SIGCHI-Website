import { BrowserRouter } from "react-router";
import Router from "./pages/router";
import ScrollToTop from "./utils/scrollToTop";

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Router />
        </BrowserRouter>
    );
}
