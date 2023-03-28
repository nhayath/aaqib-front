import { useForm } from "react-hook-form";
import { NextResponse } from "next/server";
import { useRouter } from "next/router";
import cookie from "js-cookie";

export default function Login() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        let doc = await login(data);
        if (doc.token && doc.user && doc.user?.role == "admin") {
            let res = NextResponse.next();
            cookie.set("token", doc.token, { path: "/" });
            cookie.set("user", JSON.stringify(doc.user), { path: "/" });
            console.log("redirecting...", cookie.get("token"));
            return router.push("/dashboard");
        }
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="login-form">
                        <h4>Login to Dashboard</h4>
                        <div className="fields flex flex-row">
                            <div className="label flex-1">Email</div>
                            <div className="control flex-2">
                                <input
                                    type="email"
                                    name="email"
                                    {...register("email")}
                                />
                            </div>
                        </div>
                        <div className="fields flex flex-row mgy-4">
                            <div className="label flex-2">Password</div>
                            <div className="control flex-2">
                                <input
                                    type="password"
                                    name="password"
                                    {...register("password")}
                                />
                            </div>
                        </div>

                        <div className="fields flex mgy-4">
                            <div className="control flex-1 flex align-center justify-center">
                                <button
                                    type="submit"
                                    className="btn bg-primary w-80 text-white"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

async function login(body) {
    try {
        let res = await fetch(`${process.env.API_URL}/users/login`, {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(body),
        });
        let data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
}
