import Link from "next/link";
import { useState } from "react";

export default function OffersFilter({ filters, onFilterChange }) {
    let [selectedFilters, setSelectedFilters] = useState({
        brand: [],
        network: [],
        contractLength: [],
        cost: [],
    });

    let toggleCheckbox = (facet, value) => {
        let arr = selectedFilters[facet];

        const idx = arr.indexOf(value);
        if (idx === -1) {
            arr.push(value);
        } else {
            arr.splice(idx, 1);
        }
        let kv = {};
        kv[facet] = arr;

        setSelectedFilters({ ...selectedFilters, ...kv });

        onFilterChange(formatFilters(selectedFilters));
    };

    let toggleRadio = (facet, value) => {
        let arr = selectedFilters[facet];
        if (arr.length) arr.splice(0, 1);
        let kv = {};
        arr.push(value);
        kv[facet] = arr;

        setSelectedFilters({ ...selectedFilters, ...kv });

        onFilterChange(formatFilters(selectedFilters));
    };

    let cbFilter = (name, buckets, inputType = "checkbox") => {
        let rows = [];
        buckets.map((bucket, idx) => {
            let row = bucket.count > 0 && (
                <li key={idx}>
                    <span>
                        {inputType === "checkbox" && (
                            <input
                                type={inputType}
                                name={name}
                                onChange={(e) =>
                                    toggleCheckbox(name, bucket._id)
                                }
                            />
                        )}

                        {inputType === "radio" && (
                            <input
                                name={name}
                                type={inputType}
                                onChange={(e) => toggleRadio(name, bucket._id)}
                            />
                        )}
                    </span>
                    {bucket._id} <span> ({bucket.count})</span>
                </li>
            );
            rows.push(row);
        });

        return (
            <div className="filter">
                <div className="uppercase text-small text-grey">{name}</div>
                <ul className="filter-list">{rows}</ul>
            </div>
        );
    };

    return (
        <div className="filters">
            {/* network */}
            {filters.networkFacet &&
                cbFilter("network", filters.networkFacet.buckets)}

            {/* brands */}
            {filters.brandsFacet &&
                cbFilter("brand", filters.brandsFacet.buckets)}

            {/* os */}
            {filters.contractLengthFacet &&
                cbFilter(
                    "contractLength",
                    filters.contractLengthFacet.buckets,
                    "radio"
                )}

            {/* os */}
            {/* os */}
            {filters.costFacet &&
                cbFilter("cost", filters.costFacet.buckets, "radio")}
        </div>
    );
}

function formatFilters(filters) {
    let urls = [];

    Object.keys(filters).forEach((key) => {
        if (filters[key].length) {
            urls.push(`${key}:${filters[key].join()}`);
        }
    });

    return urls.join("|");
}
