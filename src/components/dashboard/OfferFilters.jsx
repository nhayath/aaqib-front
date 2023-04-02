import Link from "next/link";
import { useState, useEffect } from "react";

export default function ContractOffers({
    dealType,
    cond,
    filters,
    onFilterChange,
}) {
    let [phoneId, setPhoneId] = useState(null);

    let [selectedFilters, setSelectedFilters] = useState({
        phone_id: cond?.phone_id || null,
        network: cond?.network || null,
    });

    const updateFilter = (obj) => {
        let newFilters = { ...selectedFilters, ...obj };
        setSelectedFilters(newFilters);
        let ff = formatFilters(newFilters);
        onFilterChange(ff);
    };

    let phoneOptions = [];
    let networkOptions = [];

    if (filters?.phones && dealType !== "simonly") {
        filters.phones.map((ph, idx) => {
            let row = (
                <option value={ph._id} key={idx}>
                    {ph.name}
                </option>
            );
            phoneOptions.push(row);
        });
    }

    if (filters?.network && dealType !== "simfree") {
        filters.networks.map((net, idx) => {
            if (net?._id?.length) {
                let row = (
                    <option value={net._id} key={idx}>
                        {net._id}
                    </option>
                );
                networkOptions.push(row);
            }
        });
    }

    return (
        <div className="flex flex-row">
            <div className="field is-horizontal">
                {dealType !== "simonly" && (
                    <div className="field-body">
                        <div className="field">
                            <div className="select">
                                <select
                                    onChange={(e) =>
                                        updateFilter({
                                            phone_id: e.target.value || null,
                                        })
                                    }
                                    defaultValue={cond?.phone_id || ""}
                                >
                                    <option value="">Select a phone</option>
                                    {phoneOptions}
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {dealType !== "simfree" && (
                    <div className="field-body">
                        <div className="field">
                            <div className="select">
                                <select
                                    defaultValue={cond?.network || ""}
                                    onChange={(e) =>
                                        updateFilter({
                                            network: e.target.value || null,
                                        })
                                    }
                                >
                                    <option value="">Select a network</option>
                                    {networkOptions}
                                </select>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function formatFilters(filters) {
    let arr = Object.keys(filters);
    let url = [];
    arr.forEach((a) => {
        if (filters[a]?.length) {
            let u = a + "=" + filters[a];
            url.push(u);
        }
    });

    return url.join("&");
}
