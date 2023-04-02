import { useRouter } from "next/router";
import cookie from "js-cookie";

export default function logout() {
    return (
        <div className="container">
            <div className="flex align-center justify-center">
                Processing...
            </div>
        </div>
    );
}

export async function getServerSideProps({ params, query }) {
    cookie.remove("token");
    cookie.remove("user");
    return {
        redirect: {
            destination: "/",
            permanent: false,
        },
    };
}
