import { useForm } from "react-hook-form";
import Breadcrumbs from "@/components/Breadcrumbs";
import AddNewPhone from "@/components/AddNewPhone";

export default function EditOffer({ token }) {
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
            label: "Add new",
            path: "#",
        },
    ];

    return (
        <>
            <Breadcrumbs items={pathItems} />
            <AddNewPhone token={token} />
        </>
    );
}

export async function getServerSideProps({ req }) {
    let token = req.cookies.token;

    return { props: { token } };
}
