import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export default function PhoneOffers({ phone, offers }) {
    const rows = [];
    offers.map((offer, idx) => {
        let row = (
            <tr key={idx}>
                <td>
                    <Link href={`${offer.url}`}>{offer.store}</Link>
                </td>
                <td className="text-center">
                    {offer.dealType.toLowerCase() == "contract"
                        ? offer.network
                        : "simfree"}
                </td>
                <td>{offer.dealType}</td>
                <td>
                    {offer.dealType.toLowerCase() === "contract" && (
                        <>
                            {offer.deal.data === -1
                                ? "Unlimited data"
                                : offer.deal.data + "GB"}
                            ,{" "}
                            {offer.deal.minutes === -1
                                ? "Unlimited"
                                : offer.deal.minutes}{" "}
                            mins,{" "}
                            {offer.deal.texts === -1
                                ? "Unlimited"
                                : offer.deal.texts}{" "}
                            sms
                        </>
                    )}
                </td>
                <td>
                    {offer.dealType.toLowerCase() === "contract" && (
                        <>
                            {offer.deal.cost}/pm,
                            {offer.deal.upfrontCost} upfront,{" "}
                            {offer.deal.contractLength}m
                        </>
                    )}

                    {offer.dealType.toLowerCase() === "simfree" && (
                        <>{offer.deal.cost}</>
                    )}
                </td>

                <td>
                    <Link
                        href={`/dashboard/phones/offers/edit-offer?id=${offer._id}`}
                    >
                        Edit
                    </Link>
                </td>
            </tr>
        );

        rows.push(row);
    });
    let pathItems = [
        {
            label: "Home",
            path: "/dashboard",
        },
        {
            label: "Phones",
            path: "/dashboard/phones",
        },
        {
            label: "Offers",
            path: "#",
        },
        {
            label: phone.name,
            path: "#",
        },
    ];
    return (
        <>
            <Breadcrumbs items={pathItems} />
            <Link
                className="btn bg-primary text-white mgy-4"
                href={`/dashboard/phones/offers/add-new-offer?id=${phone._id}`}
            >
                Add new
            </Link>
            <div className="dash-table-container bg-white">
                <table className="dash-table table-bordered">
                    <thead>
                        <tr>
                            <th>Store</th>
                            <th>Network</th>
                            <th>Type</th>
                            <th>Tariff</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        </>
    );
}

export async function getServerSideProps({ req, params }) {
    let token = req.cookies.token;

    let res = await fetch(
        `${process.env.API_URL}/offers/phone/id/${params.id}`,
        {
            Accept: "application/json",
            headers: { Authorization: `Bearer ${token}` },
        }
    );

    let data = await res.json();

    return { props: { phone: data.phone, offers: data.offers } };
}
