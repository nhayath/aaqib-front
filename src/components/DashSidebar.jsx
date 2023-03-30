import Link from "next/link";

export default function DashSidebar() {
    return (
        <>
            <ul className="dash-menu list-none">
                <li>
                    <Link href="/dashboard/phones">Phones</Link>
                </li>
                <li>
                    <Link href="/dashboard/top-contracts">Top Contracts</Link>
                </li>
                <li>
                    <Link href="/dashboard/users">Users</Link>
                </li>
            </ul>
        </>
    );
}
