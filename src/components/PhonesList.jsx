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
                <div class="text-center">
                    <Link href={"/offers/" + d.slug}>{d.name}</Link>
                </div>
            </article>
        );

        rows.push(row);
    });

    return <div className="grid grid-3d grid-2m gap-1">{rows}</div>;
}
