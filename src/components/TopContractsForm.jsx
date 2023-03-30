import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function AddNewTopContractsForm({ token, data }) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: data?.value || {},
    });

    const onSubmit = async (formData) => {
        // console.log(formData);
        let body = {
            name: "top-contract-phone-deals",
            value: formData,
        };
        let url = data?._id
            ? `${process.env.API_URL}/options/update/${data._id}`
            : `${process.env.API_URL}/options/add`;
        // console.log(url);
        let res = await fetch(url, {
            method: data?._id ? "PATCH" : "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });

        let newDoc = res.json();
        return router.push(`/dashboard/top-contracts`);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* deal type */}
                <div className="field is-horizontal">
                    <div className="field-label">
                        <label className="label">Name</label>
                    </div>

                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input"
                                    placeholder="phone name"
                                    type="text"
                                    {...register("name")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* network */}

                <div className="field is-horizontal">
                    <label className="field-label">Network</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="network e.g: Vodafone"
                                    {...register("network")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* network */}

                <div className="field is-horizontal">
                    <label className="field-label">Image</label>
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="image e.g: http://www.io.com/image.jpg"
                                    {...register("image")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* monthly */}
                <div className="field is-horizontal">
                    <label className="field-label">Monthly</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="e.g: 45.55"
                                    {...register("tariff.monthly")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* monthly */}
                <div className="field is-horizontal">
                    <label className="field-label">Upfront</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="e.g: 29.99"
                                    {...register("tariff.upfront")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* data */}
                <div className="field is-horizontal">
                    <label className="field-label">Data</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="e.g: 100GB"
                                    {...register("tariff.data")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* minutes */}
                <div className="field is-horizontal">
                    <label className="field-label">Minutes</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="e.g: 100 or Unlimited"
                                    {...register("tariff.minutes")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* minutes */}
                <div className="field is-horizontal">
                    <label className="field-label">SMS</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="e.g: 100 or Unlimited"
                                    {...register("tariff.sms")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* length */}
                <div className="field is-horizontal">
                    <label className="field-label">Contract Length</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="e.g: 24"
                                    {...register("tariff.contractLength")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* store */}
                <div className="field is-horizontal">
                    <label className="field-label">Seller</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="e.g: O2"
                                    {...register("store")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* store */}
                <div className="field is-horizontal">
                    <label className="field-label">URL</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="e.g: http://www.o2.co.uk/offer"
                                    {...register("url")}
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
