import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../components/Layout";
import DashboardLayout from "../components/DashboardLayout";

export default function App({ Component, pageProps, router }) {
    const getLayout = router.pathname.includes("/dashboard")
        ? (page) => <DashboardLayout children={page} user={pageProps?.user} />
        : (page) => <Layout children={page} />;
    return <>{getLayout(<Component {...pageProps} />, pageProps)}</>;
}
