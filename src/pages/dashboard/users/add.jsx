import { useForm } from "react-hook-form";
import Breadcrumbs from "@/components/Breadcrumbs";
import AddNewUserForm from "@/components/AddNewUserForm";

export default function AddNewuser({ token }) {
    let pathItems = [
        {
            label: "Home",
            path: "/dashboard",
        },
        {
            label: "Users",
            path: "/dashboard/users",
        },
        {
            label: "Add new",
            path: "#",
        },
    ];

    return (
        <>
            <Breadcrumbs items={pathItems} />
            <AddNewUserForm token={token} />
        </>
    );
}

export async function getServerSideProps({ req }) {
    let token = req.cookies.token;

    return { props: { token } };
}
