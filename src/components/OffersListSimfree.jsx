import Link from "next/link";

export default function OffersListSimfree({ items }) {
    let rows = [];
    items.map((d, idx) => {
        let row = (
            <article className="bg-white pdx-4 pdy-4" key={idx}>
                <figure className="grid-image">
                    <Link href={"/offers/" + d.slug}>
                        <img
                            src={d.phone.image}
                            alt={d.phone.name}
                            width="100%"
                        />
                    </Link>
                </figure>
                <div className="text-center">
                    <Link href={"/offers/" + d.phone.slug}>{d.phone.name}</Link>
                </div>
                <div className="flex space-between mgy-2 bg-grey">
                    <div className="text-small">
                        <h2 className="mgy-1">&pound;{d.deal.cost}</h2>{" "}
                        <strong className="text-grey">
                            {d.deal.deliveryCost
                                ? "+£" + d.deal.deliveryCost + " Delivery"
                                : "Free Delivery"}
                        </strong>
                    </div>
                    <div className="flex align-center flex-column">
                        <Link
                            href={d.url}
                            className="btn bg-primary text-white mgy-2"
                        >
                            Get the Deal
                        </Link>

                        <div>
                            <i>from</i> {d.store}
                        </div>
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
