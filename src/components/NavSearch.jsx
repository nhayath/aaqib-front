import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function NavSearch({ isVisible, toggle }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchItems, setSearchItems] = useState([]);
    const [isActive, setIsActive] = useState(isVisible);

    useEffect(() => {
        async function fetchData() {
            let res = await fetch(
                `${process.env.API_URL}/phones/navSearch?q=${searchTerm}`
            );

            return await res.json();
        }

        if (searchTerm.length) {
            fetchData()
                .then((data) => {
                    setSearchItems(() => data.docs);
                })
                .catch((err) => console.log(err));
        } else {
            setSearchItems([]);
        }
    }, [searchTerm]);

    useEffect(() => {
        setIsActive(isVisible);
    }, [isVisible]);

    return (
        <>
            <div
                className={`nav-search bg-white ${
                    isVisible ? "is-active" : ""
                }`}
            >
                <div className="nav-search-control flex align-center">
                    <label htmlFor="search-box">
                        <span className="bi bi-search bi-search-icon text-grey"></span>
                    </label>
                    <input
                        type="text"
                        placeholder="search.."
                        autoComplete="nope"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                    <label htmlFor="search-box">
                        <span
                            className="bi bi-x bi-x-icon"
                            onClick={toggle}
                        ></span>
                    </label>
                </div>

                {/* search items */}
                {searchItems.length > 0 && (
                    <ul className="nav-search-result">
                        {searchItems.map((item) => {
                            return (
                                <li key={item.slug}>
                                    <Link
                                        href={`/offers/${item.slug}`}
                                        onClick={toggle}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </>
    );
}
