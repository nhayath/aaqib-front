import Link from "next/link";

export default function OffersList({ items }) {
    let rows = [];
    items.map((d, idx) => {
        let row = (
            <article className="bg-white pdx-4 pdy-4" key={idx}>
                <figure className="grid-image">
                    {d.dealType !== "simonly" && (
                        <Link href={"/offers/" + d.slug}>
                            <img
                                src={d?.phone.image}
                                alt={d?.phone.name}
                                width="100%"
                            />
                        </Link>
                    )}

                    {d.dealType === "simonly" && (
                        <Link href={"/offers/" + d.slug}>
                            <img
                                src={`/${slugify(d.network)}.png`}
                                width="100%"
                            />
                        </Link>
                    )}
                </figure>
                {d.dealType !== "simonly" && (
                    <div className="text-center">
                        <Link href={"/offers/" + d.phone.slug}>
                            {d?.phone.name}
                        </Link>
                    </div>
                )}
                <div className="flex space-between mgy-2 bg-grey">
                    <div className="text-small text-grey">
                        <p>
                            {d.deal.data === -1
                                ? "Unlimited"
                                : d.deal.data + "GB"}{" "}
                            data
                        </p>
                        <p>
                            {d.deal.minutes === -1
                                ? "Unlimited"
                                : d.deal.minutes}{" "}
                            minutes
                        </p>
                        <p>
                            {d.deal.texts === -1 ? "Unlimited" : d.deal.texts}{" "}
                            sms
                        </p>
                        <p>{d.deal.contractLength} months</p>
                    </div>
                    <div className="flex align-center flex-column">
                        <div>
                            <span className="text-small text-grey uppercase">
                                per month
                            </span>
                            <h2 className="mgy-1">&pound;{d.deal.cost}</h2>{" "}
                            <span className="text-small text-grey">
                                Upfront
                            </span>{" "}
                            {"  "}
                            <strong className="text-grey">
                                &pound;{d.deal.upfrontCost || 0.0}
                            </strong>
                        </div>
                        <Link
                            href={d.url}
                            className="btn bg-primary text-white mgy-2"
                        >
                            Get the Deal
                        </Link>
                    </div>
                </div>
            </article>
        );

        rows.push(row);
    });

    return (
        <div className="grid grid-3d grid-2m gap-1">
            {items?.length > 0 ? rows : "No matches found"}
        </div>
    );
}

function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
