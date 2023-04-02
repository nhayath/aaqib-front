import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function AddNewPhone({ token }) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            os: "Android",
        },
    });

    const onSubmit = async (data) => {
        try {
            let url = `${process.env.API_URL}/phones`;
            let res = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            let newDoc = await res.json();
            return router.push(`/dashboard/phones/offers/${newDoc.doc._id}`);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <>
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
                                    placeholder="phone name"
                                    {...register("name")}
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
                                    placeholder="phone-slug"
                                    type="text"
                                    {...register("slug")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* slug */}
                <div className="field is-horizontal">
                    <label className="field-label">Brand</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="brand e.g. Apple"
                                    {...register("brand")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* os */}
                <div className="field is-horizontal">
                    <label className="field-label">OS</label>
                    <div className="field-body">
                        <div className="field">
                            <div className="select">
                                <select {...register("os")}>
                                    <option value="iOS">iOS</option>
                                    <option value="Android">Android</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* color */}
                <div className="field is-horizontal">
                    <label className="field-label">Color</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="color e.g. Black"
                                    {...register("features.color")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Screen size */}
                <div className="field is-horizontal">
                    <label className="field-label">Screen size</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="screen size e.g. 5.6"
                                    {...register("features.screenSize")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* storage */}
                <div className="field is-horizontal">
                    <label className="field-label">Storage</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="storage e.g. 128GB"
                                    {...register("features.storage")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* color */}
                <div className="field is-horizontal">
                    <label className="field-label">Memory</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="memory e.g. 6GB"
                                    {...register("features.memory")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* battery */}
                <div className="field is-horizontal">
                    <label className="field-label">Battery</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="battery e.g. 5000mAh"
                                    {...register("features.battery")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* image */}
                <div className="field is-horizontal">
                    <label className="field-label">Image Url</label>
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="image e.g. http://www.example.com/image.jpg"
                                    {...register("image")}
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
