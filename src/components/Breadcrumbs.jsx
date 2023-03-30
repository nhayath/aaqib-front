import Link from "next/link";
export default function Breadcrumbs({ items }) {
    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className={item.path === "#" ? "is-active" : ""}
                    >
                        <Link href={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
