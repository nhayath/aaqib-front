import { useForm } from "react-hook-form";
import Breadcrumbs from "@/components/Breadcrumbs";
import OfferEditForm from "@/components/OfferEditForm";

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
            label: "Edit",
            path: "#",
        },
    ];

    return (
        <>
            <Breadcrumbs items={pathItems} />
            <OfferEditForm phone={phone} doc={doc} token={token} />
        </>
    );
}

export async function getServerSideProps({ req, params, query }) {
    let token = req.cookies.token;

    let res = await fetch(`${process.env.API_URL}/offers/id/${query.id}`, {
        Accept: "application/json",
        headers: { Authorization: `Bearer ${token}` },
    });

    let data = await res.json();

    return { props: { phone: data.phone, doc: data.doc, token } };
}
