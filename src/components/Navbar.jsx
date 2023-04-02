import Link from "next/link";
import { useState } from "react";
import NavSearch from "./NavSearch";

export default function Navbar() {
    const [isActive, setActive] = useState(false);
    const [showNavSearch, setShowNavSearch] = useState(false);
    const toggleClass = () => setActive(!isActive);
    const toggleNavSearch = () => setShowNavSearch(!showNavSearch);

    return (
        <header className="header">
            <div className="container">
                <NavSearch isVisible={showNavSearch} toggle={toggleNavSearch} />
                <nav className={isActive ? "nav-bar is-active" : "nav-bar"}>
                    <div className="nav-mob-search-icon hidden-desktop">
                        <span
                            className="bi bi-search"
                            onClick={toggleNavSearch}
                        ></span>
                    </div>
                    <div className="nav-start">
                        <div className="nav-logo">
                            <Link href="/">uFind</Link>
                        </div>
                    </div>
                    <div className="nav-end">
                        <ul className="nav-menu">
                            <li>
                                <Link
                                    href="/phones"
                                    onClick={() => setActive(false)}
                                >
                                    Phones
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contracts"
                                    onClick={() => setActive(false)}
                                >
                                    Contracts
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/simfree-offers"
                                    onClick={() => setActive(false)}
                                >
                                    Simfree
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/simonly-offers"
                                    onClick={() => setActive(false)}
                                >
                                    Simonly
                                </Link>
                            </li>
                            <li className="hidden-mob">
                                <span
                                    className="bi bi-search"
                                    onClick={toggleNavSearch}
                                ></span>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-toggle">
                        <button
                            id="btn-nav-toggle"
                            className="btn-nav-toggle bg-transparent border-none"
                            type="button"
                            aria-controls="header__navigation"
                            aria-expanded="false"
                            onClick={toggleClass}
                        >
                            <div className="nav-toggle-icon-open">
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        width: 1.35 + "rem",
                                        fill: "black",
                                    }}
                                >
                                    <path d="m3.23076923 15.4615385c-1.78430492 0-3.23076923-1.4464647-3.23076923-3.2307693 0-1.7843045 1.44646431-3.2307692 3.23076923-3.2307692s3.23076923 1.4464647 3.23076923 3.2307692c0 1.7843046-1.44646431 3.2307693-3.23076923 3.2307693zm8.76923077 0c-1.7843049 0-3.23076923-1.4464647-3.23076923-3.2307693 0-1.7843045 1.44646433-3.2307692 3.23076923-3.2307692s3.2307692 1.4464647 3.2307692 3.2307692c0 1.7843046-1.4464643 3.2307693-3.2307692 3.2307693zm8.7692308 0c-1.784305 0-3.2307693-1.4464647-3.2307693-3.2307693 0-1.7843045 1.4464643-3.2307692 3.2307693-3.2307692 1.7843049 0 3.2307692 1.4464647 3.2307692 3.2307692 0 1.7843046-1.4464643 3.2307693-3.2307692 3.2307693z"></path>
                                </svg>
                            </div>
                            <div className="nav-toggle-icon-close">
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        width: 1.35 + "rem",
                                        fill: "black",
                                    }}
                                >
                                    <path
                                        d="m21.2325621 4.63841899c.526819-.52681908.5246494-1.38313114-.0035241-1.9113046l.0438476.04384757c-.5287653-.52876531-1.3869798-.52784878-1.9113046-.00352402l-7.065629 7.06562899c-.1634497.16344977-.4265682.16533585-.591904 0l-7.06562901-7.06562899c-.52681908-.52681907-1.38313114-.52464944-1.9113046.00352402l.04384757-.04384757c-.52876531.52876532-.52784878 1.38697983-.00352402 1.9113046l7.06562899 7.06562901c.16344977.1634497.16533585.4265682 0 .591904l-7.06562899 7.065629c-.52681907.5268191-.52464944 1.3831311.00352402 1.9113046l-.04384757-.0438476c.52876532.5287654 1.38697983.5278488 1.9113046.0035241l7.06562901-7.065629c.1634497-.1634498.4265682-.1653359.591904 0l7.065629 7.065629c.5268191.526819 1.3831311.5246494 1.9113046-.0035241l-.0438476.0438476c.5287654-.5287653.5278488-1.3869798.0035241-1.9113046l-7.065629-7.065629c-.1634498-.1634497-.1653359-.4265682 0-.591904z"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
