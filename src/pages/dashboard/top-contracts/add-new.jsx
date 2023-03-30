import { useForm } from "react-hook-form";
import Breadcrumbs from "@/components/Breadcrumbs";
import TopContractsForm from "@/components/TopContractsForm";

export default function AddNewTopContracts({ token }) {
    let pathItems = [
        {
            label: "Home",
            path: "/dashboard",
        },
        {
            label: "Phones",
            path: "/dashboard/top-contracts",
        },
        {
            label: "Add new",
            path: "#",
        },
    ];

    return (
        <>
            <Breadcrumbs items={pathItems} />
            <TopContractsForm token={token} />
        </>
    );
}

export async function getServerSideProps({ req }) {
    let token = req.cookies.token;

    return { props: { token } };
}
