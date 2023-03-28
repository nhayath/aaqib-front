import Link from "next/link";
import { useState } from "react";

export default function PhonesList({ filters, onFilterChange }) {
    let [selectedFilters, setSelectedFilters] = useState({
        brand: [],
        os: [],
        color: [],
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

    let cbFilter = (name, buckets) => {
        let rows = [];
        buckets.map((bucket, idx) => {
            let row = (
                <li key={idx}>
                    <span>
                        <input
                            type="checkbox"
                            onChange={(e) => toggleCheckbox(name, bucket._id)}
                        />
                    </span>
                    {bucket._id} <span> ({bucket.count})</span>
                </li>
            );
            rows.push(row);
        });

        return (
            <div className="filter">
                <div className="uppercase text-bold">{name}</div>
                <ul className="filter-list">{rows}</ul>
            </div>
        );
    };

    return (
        <div className="filters">
            {/* brands */}
            {filters.brandsFacet &&
                cbFilter("brand", filters.brandsFacet.buckets)}

            {/* os */}
            {filters.osFacet && cbFilter("os", filters.osFacet.buckets)}

            {/* os */}
            {filters.colorFacet &&
                cbFilter("color", filters.colorFacet.buckets)}
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
