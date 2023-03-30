import Link from "next/link";
export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <ul className="flex justify-center footer-menu">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/phones">Phones</Link>
                        </li>
                        <li>
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li>
                            <Link href="/terms">Terms</Link>
                        </li>
                    </ul>
                    <p className="text-center text-small text-grey">
                        &copy; All rights reserved
                    </p>
                </div>
            </div>
        </>
    );
}
