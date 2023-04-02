import Link from "next/link";

export default function DashSidebar() {
    return (
        <>
            <div className="flex flex-column">
                <h4 className="mgx-4">Phones</h4>
                <ul className="dash-menu">
                    <li>
                        <Link href="/dashboard/phones">Phones</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/phones/add">Add new phone</Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-column">
                <h4 className="mgx-4">Offers</h4>
                <ul className="dash-menu">
                    <li>
                        <Link href="/dashboard/offers/contract">Contract</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/offers/simfree">Simfree</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/offers/simonly">Simonly</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/offers/add-new">
                            Add New Offer
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-column">
                <h4 className="mgx-4">Options</h4>
                <ul className="dash-menu">
                    <li>
                        <Link href="/dashboard/top-contracts">
                            Top Contracts
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-column">
                <h4 className="mgx-4">Users</h4>
                <ul className="dash-menu">
                    <li>
                        <Link href="/dashboard/users">All Users</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/users/add">Add New User</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
