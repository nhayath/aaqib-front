import { useForm } from "react-hook-form";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function EditPhone({ doc, token }) {
    var newDoc = doc;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: doc,
        mode: "onChange",
    });

    const onSubmit = async (data) => {
        let url = `${process.env.API_URL}/phones/${data._id}`;
        let res = await fetch(url, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        let newDoc = res.json();
        alert("updated...");
    };

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
            label: "Edit",
            path: "#",
        },
        {
            label: doc.name,
            path: "#",
        },
    ];

    return (
        <>
            <Breadcrumbs items={pathItems} />

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
                <div className="field is-horizontal">
                    <label className="field-label">Name</label>
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("name")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* brand */}
                <div className="field is-horizontal">
                    <label className="field-label">Brand</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("brand")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* slug */}
                <div className="field is-horizontal">
                    <label className="field-label">Slug</label>
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("slug")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* os */}
                <div className="field is-horizontal">
                    <div className="field-label">
                        <label className="label">OS</label>
                    </div>

                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <label className="radio">
                                    <input
                                        type="radio"
                                        value="iOS"
                                        {...register("os")}
                                    />{" "}
                                    iOS
                                </label>

                                <label className="radio">
                                    <input
                                        type="radio"
                                        value="Android"
                                        {...register("os")}
                                    />{" "}
                                    Android
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* features */}
                <div className="field is-horizontal">
                    <label className="field-label">Color</label>
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("features.color")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <label className="field-label">Screen Size</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("features.screenSize")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <label className="field-label">Storage</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("features.storage")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <label className="field-label">Memory</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("features.memory")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <label className="field-label">Battery</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("features.battery")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* description */}
                <div className="field is-horizontal">
                    <label className="field-label">Description</label>
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <textarea
                                    className="textarea lg"
                                    rows={5}
                                    cols={50}
                                    {...register("description")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* image */}
                <div className="field is-horizontal">
                    <label className="field-label">Image</label>
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("image")}
                                />
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

export async function getServerSideProps({ params, req }) {
    let token = req.cookies.token;

    let res = await fetch(`${process.env.API_URL}/phones/id/${params.id}`, {
        Accept: "application/json",
        headers: { Authorization: `Bearer ${token}` },
    });

    let data = await res.json();

    return { props: { doc: data.doc, token } };
}
