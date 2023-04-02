import { useForm } from "react-hook-form";
import Breadcrumbs from "@/components/Breadcrumbs";
import OfferAddForm from "@/components/OfferAddForm";

export default function AddOffer({ phones, doc, token, cond }) {
    let pathItems = [
        {
            label: "Home",
            path: "/dashboard",
        },
        {
            label: "Phones",
            path: "/dashboard/offers",
        },
        {
            label: "Add new",
            path: "#",
        },
    ];

    return (
        <>
            <Breadcrumbs items={pathItems} />
            <OfferAddForm phones={phones} token={token} cond={cond} />
        </>
    );
}

export async function getServerSideProps({ req, params, query }) {
    let token = req.cookies.token;

    let res = await fetch(`${process.env.API_URL}/phones/all?limit=all`, {
        Accept: "application/json",
        headers: { Authorization: `Bearer ${token}` },
    });

    let data = await res.json();

    return { props: { phones: data.docs, token, cond: query } };
}
