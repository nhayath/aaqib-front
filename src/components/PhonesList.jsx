import Link from "next/link";

export default function PhonesList({ items }) {
    let rows = [];
    items.map((d, idx) => {
        let row = (
            <article className="bg-white pdx-4 pdy-4" key={idx}>
                <figure className="grid-image">
                    <Link href={"/offers/" + d.slug}>
                        <img src={d.image} alt={d.name} width="100%" />
                    </Link>
                </figure>
                <div className="text-center">
                    <Link href={"/offers/" + d.slug}>{d.name}</Link>
                </div>
                <div className="flex space-between mgy-2 bg-grey">
                    <div>
                        {d?.deal?.contract && (
                            <>
                                <p className="text-small text-grey mg-1">
                                    contract from
                                </p>
                                <p className="mg-1">
                                    &pound;{d?.deal?.contract?.cost} month
                                </p>
                            </>
                        )}
                        {d?.deal?.simfree && (
                            <>
                                <p className="text-small text-grey mg-1">
                                    Simfree from
                                </p>
                                <p className="mg-1">
                                    &pound;{d?.deal?.simfree?.cost}
                                </p>
                            </>
                        )}
                    </div>
                    <div className="flex align-center">
                        <Link
                            href={"/offers/" + d.slug}
                            className="btn bg-primary text-white"
                        >
                            view deals
                        </Link>
                    </div>
                </div>
            </article>
        );

        rows.push(row);
    });

    return <div className="grid grid-3d grid-2m gap-1">{rows}</div>;
}
