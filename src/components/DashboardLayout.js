import DashboardNavbar from "./DashboardNavbar";
import DashSidebar from "./DashSidebar";

export default function Layout({ children, user }) {
    return (
        <>
            <DashboardNavbar user={user} />
            <main>
                <>
                    <div className="container">
                        <div className="dashboard flex flex-row gap-2">
                            <aside className="dash-sidebar w-20 bg-white">
                                <DashSidebar />
                            </aside>
                            <div className="dash-content w-80">{children}</div>
                        </div>
                    </div>
                </>
            </main>
            <footer>
                <div className="container">
                    <p className="text-small text-grey text-center">
                        &copy; All rights reserved
                    </p>
                </div>
            </footer>
        </>
    );
}
