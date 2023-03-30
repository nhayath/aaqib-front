import { useForm } from "react-hook-form";

export default function OfferEditForm({ doc, phone, token }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: doc,
        mode: "onChange",
    });

    const watchDealType = watch("dealType");

    const onSubmit = async (data) => {
        console.log(data);
        let url = `${process.env.API_URL}/offers/update/${doc._id}`;
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

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* deal type */}
                <div className="field is-horizontal">
                    <div className="field-label">
                        <label className="label">Type</label>
                    </div>

                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <label className="radio">
                                    <input
                                        type="radio"
                                        value="contract"
                                        {...register("dealType")}
                                    />{" "}
                                    Contract
                                </label>

                                <label className="radio">
                                    <input
                                        type="radio"
                                        value="simfree"
                                        {...register("dealType")}
                                    />{" "}
                                    Simfree
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* network */}
                {watchDealType === "contract" && (
                    <div className="field is-horizontal">
                        <label className="field-label">Network</label>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        {...register("network")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* data */}
                {watchDealType === "contract" && (
                    <div className="field is-horizontal">
                        <label className="field-label">Data</label>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="number"
                                        {...register("deal.data")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* minutes */}
                {watchDealType === "contract" && (
                    <div className="field is-horizontal">
                        <label className="field-label">Mintues</label>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="number"
                                        {...register("deal.minutes")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* texts */}
                {watchDealType === "contract" && (
                    <div className="field is-horizontal">
                        <label className="field-label">Texts</label>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="number"
                                        {...register("deal.texts")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Cost */}
                <div className="field is-horizontal">
                    <label className="field-label">Price</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number"
                                    step="any"
                                    {...register("deal.cost")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* upfront cost */}
                {watchDealType === "contract" && (
                    <div className="field is-horizontal">
                        <label className="field-label">Upfron cost</label>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="number"
                                        step="any"
                                        {...register("deal.upfrontCost")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* contract length */}
                {watchDealType === "contract" && (
                    <div className="field is-horizontal">
                        <label className="field-label">Contract length</label>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="number"
                                        {...register("deal.contractLength")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* store */}
                <div className="field is-horizontal">
                    <label className="field-label">Store</label>
                    <div className="field-body">
                        <div className="field is-narrow">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("store")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* url */}
                <div className="field is-horizontal">
                    <label className="field-label">Url</label>
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    {...register("url")}
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
