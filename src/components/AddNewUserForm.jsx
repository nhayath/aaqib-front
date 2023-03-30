import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function OfferAddForm({ phone, token }) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            role: "user",
        },
    });

    const watchDealType = watch("dealType");

    const onSubmit = async (data) => {
        console.log(data);
        let url = `${process.env.API_URL}/users/create`;
        let res = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        let newDoc = res.json();
        return router.push(`/dashboard/users`);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* name */}

                <div className="field is-horizontal">
                    <label className="field-label">Name</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    placeholder="full name"
                                    type="text"
                                    {...register("name")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* email */}
                <div className="field is-horizontal">
                    <label className="field-label">Email</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    placeholder="yourid@mail.com"
                                    type="email"
                                    {...register("email")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* email */}
                <div className="field is-horizontal">
                    <label className="field-label">Password</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    placeholder="your secret"
                                    type="password"
                                    {...register("password")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* role */}
                <div className="field is-horizontal">
                    <label className="field-label">Role</label>
                    <div className="field-body">
                        <div className="field">
                            <div className="select">
                                <select {...register("role")}>
                                    <option value="admin">Admin</option>
                                    <option value="user">user</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <label className="field-label"></label>
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <button
                                    type="submit"
                                    className="btn bg-primary text-white"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
