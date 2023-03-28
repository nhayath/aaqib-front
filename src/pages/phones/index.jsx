import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PhonesList from "../../components/PhonesList";
import PhonesFilter from "../../components/PhonesFilter";

export default function Phones({ data }) {
    const [items, setItems] = useState(data.docs || []);
    const facet = data.filters;
    const [filters, setFilters] = useState(facet);
    const [curPage, setCurPage] = useState(data.curPage);
    const [totalPages, setTotalPages] = useState(data.totalPages);
    const [selectedFilters, setSelectedFilters] = useState("");
    const [isActive, setActive] = useState(false);
    const toggleClass = () => setActive(!isActive);

    const getFilteredData = (_selectedFilters) => {
        setSelectedFilters(_selectedFilters);
        searchPhones(_selectedFilters).then((data) => {
            setItems(data.docs);
            setTotalPages(data.totalPages);
            setCurPage(1);
        });
    };

    const loadMore = () => {
        searchPhones(selectedFilters, parseInt(curPage) + 1).then((data) => {
            setItems([...items, ...data.docs]);
            setCurPage(data.curPage);
        });
    };

    return (
        <>
            <Head>
                <title>All Phones</title>
                <meta
                    name="description"
                    content="Looking for a contract phone deal, we are here to help."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* main */}

            <div className="container">
                <div
                    className={`flex w-full space-between gap-1 content-catalog ${
                        isActive ? "is-active" : ""
                    }`}
                >
                    <div className="mob-filter">
                        <button
                            className="btn bg-black text-white w-full btn-filter-toggle"
                            onClick={toggleClass}
                        >
                            Filter
                        </button>
                    </div>
                    <aside className="content-sidebar">
                        <PhonesFilter
                            filters={filters}
                            onFilterChange={getFilteredData}
                        />

                        <div className="mob-filter-apply mgy-4 mgx-4">
                            <button
                                className="btn btn-filter-apply w-full bg-black text-white"
                                onClick={toggleClass}
                            >
                                Apply Filter
                            </button>
                        </div>
                    </aside>
                    <section className="content-body">
                        <PhonesList items={items} />
                    </section>
                </div>

                {curPage < totalPages && (
                    <div className="flex align-center justify-center load-more mgy-4">
                        <button
                            className="btn btn-load-more bg-primary"
                            onClick={loadMore}
                        >
                            Load more..
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${process.env.API_URL}/phones/search`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data: data } };
}

async function searchPhones(fq = null, page = 1) {
    let url = `${process.env.API_URL}/phones/search?`;
    let args = [];
    if (fq) args.push(`fq=${fq}`);
    if (page) args.push(`page=${page}`);

    url = url + args.join("&");

    let res = await fetch(url);
    let data = await res.json();
    return data;
}
