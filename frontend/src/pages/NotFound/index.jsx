import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main className="w-full h-[90vh] flex justify-center items-center">
                <h1 className="font-barlow text-[24px] md:text-[96px]">
                    <span className="font-bold">404</span> - Page Not Found
                </h1>
            </main>
            <Footer />
        </>
    );
}
