import { useForm } from "react-hook-form";
import Breadcrumbs from "@/components/Breadcrumbs";
import TopContractsForm from "@/components/TopContractsForm";

export default function AddNewTopContracts({ token, data }) {
    let pathItems = [
        {
            label: "Home",
            path: "/dashboard",
        },
        {
            label: "Top Contracts",
            path: "/dashboard/top-contracts",
        },
        {
            label: "Edit",
            path: "#",
        },
    ];

    return (
        <>
            <Breadcrumbs items={pathItems} />
            <TopContractsForm token={token} data={data} />
        </>
    );
}

export async function getServerSideProps({ req, query }) {
    let token = req.cookies.token;
    let res = await fetch(`${process.env.API_URL}/options/id/${query.id}`, {
        Accept: "application/json",
        headers: { Authorization: `Bearer ${token}` },
    });

    let data = await res.json();

    console.log(data);

    return { props: { token, data: data.doc } };
}
