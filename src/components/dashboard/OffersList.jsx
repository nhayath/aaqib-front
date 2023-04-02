import Link from "next/link";
import { useState, useEffect } from "react";
import cookie from "js-cookie";

export default function OffersList({ dealType, offers, cond }) {
    let [rOffers, setOffers] = useState(offers);

    useEffect(() => {
        setOffers(offers);
    }, [offers]);

    const deleteOffer = async (offer_id) => {
        if (confirm(`This will permanently delete the doc`)) {
            try {
                let token = cookie.get("token");
                // console.log(`deleting ${offer_id}`, token);
                let status = await fetch(
                    `${process.env.API_URL}/offers/delete/${offer_id}`,
                    {
                        method: "DELETE",
                        Accept: "application/json",
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setOffers(offers.filter((d) => d._id !== offer_id));
            } catch (error) {
                alert(error.message);
            }
        }
    };

    const rows = [];
    rOffers.map((doc, idx) => {
        let row = (
            <tr key={idx}>
                {doc.dealType !== "simonly" && (
                    <>
                        <td className="text-center">
                            <img
                                src={doc.phone.image}
                                style={{
                                    maxWidth: 32 + "px",
                                    maxHeight: 32 + "px",
                                }}
                            />
                        </td>
                        <td>
                            <Link
                                href={`/dashboard/phones/offers/${doc.phone._id}`}
                            >
                                {doc.phone.name}
                            </Link>
                        </td>
                    </>
                )}

                {dealType === "simfree" && (
                    <>
                        <td>{doc.store}</td>
                    </>
                )}
                {doc.dealType !== "simfree" && <td>{doc.network}</td>}
                <td>
                    <div className="flex flex-column">
                        <span>&pound;{doc.deal.cost} per month</span>
                        <span>&pound;{doc.deal.upfrontCost} upfront</span>
                    </div>
                </td>
                <td>
                    <Link
                        className="btn btn-outline"
                        href={`/dashboard/phones/offers/edit-offer?id=${doc._id}`}
                    >
                        Edit
                    </Link>
                    <Link
                        className="btn btn-outline"
                        href="#"
                        onClick={() => deleteOffer(doc._id)}
                    >
                        Delete
                    </Link>
                </td>
            </tr>
        );

        rows.push(row);
    });
    return (
        <div className="dash-table-container bg-white">
            <table className="dash-table table-bordered">
                <thead>
                    <tr>
                        {dealType !== "simonly" && (
                            <>
                                <th>Image</th>
                                <th>Name</th>
                            </>
                        )}
                        {dealType !== "simfree" && (
                            <>
                                <th>Network</th>
                                <th>Terms</th>
                            </>
                        )}
                        {dealType == "simfree" && (
                            <>
                                <th>Store</th>
                            </>
                        )}
                        {dealType === "simfree" && <th>Cost</th>}
                        <th>
                            <Link
                                href={`/dashboard/offers/add-new?dealType=${dealType}${
                                    cond?.phone_id
                                        ? "&phone_id=" + cond.phone_id
                                        : ""
                                }`}
                                className="btn bg-primary text-white"
                            >
                                + Add new
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}
