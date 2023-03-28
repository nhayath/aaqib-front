import Link from "next/link";

export default function Dashboard() {
    return (
        <>
            <div className="container">
                <div className="dashboard flex flex-row gap-2">
                    <aside className="dash-sidebar w-20 bg-white">
                        sidebar
                    </aside>
                    <div className="dash-content w-80">
                        <div className="bg-white">
                            <div className="flex gap-1">
                                <div>
                                    <Link href="/dashboard/phones">Phones</Link>
                                </div>
                                <div>
                                    <Link href="/dashboard/offers">Offers</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function getServerSideProps({ req, res }) {
    if (req.cookies.token && req.cookies.user) {
        let token = req.cookies.token;
        let user = JSON.parse(req.cookies.user);
        return { props: { token, user } };
    } else {
        return { props: {} };
    }
}
