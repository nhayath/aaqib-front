import DashboardNavbar from "./DashboardNavbar";

export default function Layout({ children, user }) {
    return (
        <>
            <DashboardNavbar user={user} />
            <main>{children}</main>
            <footer>footer</footer>
        </>
    );
}
