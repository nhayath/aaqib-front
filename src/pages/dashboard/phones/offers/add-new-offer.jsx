import { useForm } from "react-hook-form";
import Breadcrumbs from "@/components/Breadcrumbs";
import OfferAddForm from "@/components/OfferAddForm";

export default function EditOffer({ phone, doc, token }) {
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
            label: phone.name,
            path: `/dashboard/phones/offers/${phone._id}`,
        },
        {
            label: "Add new",
            path: "#",
        },
    ];

    return (
        <>
            <Breadcrumbs items={pathItems} />
            <OfferAddForm phone={phone} token={token} />
        </>
    );
}

export async function getServerSideProps({ req, params, query }) {
    let token = req.cookies.token;

    let res = await fetch(`${process.env.API_URL}/phones/id/${query.id}`, {
        Accept: "application/json",
        headers: { Authorization: `Bearer ${token}` },
    });

    let data = await res.json();

    return { props: { phone: data.doc, token } };
}
