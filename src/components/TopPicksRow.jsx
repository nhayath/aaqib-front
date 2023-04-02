import Image from "next/image";
import { slugify } from "../utils/helper";

export default function TopPicksRow({ doc, isAdmin }) {
    return (
        <article className="bg-white pdx-4 pdy-4">
            <h2 className="ts-4">{doc.name}</h2>
            <figure>
                <img src={doc.image} />
            </figure>
            <div className="top-picks-data relative">
                <span className="text-bold">{doc.tariff.data} Data</span>
                <span className="text-small text-grey">
                    {doc.tariff.minutes} Mins & {doc.tariff.sms} SMS
                </span>
                <figure>
                    <img src={`/${slugify(doc.network)}.png`} width="24px" />
                </figure>
            </div>
            <div className="flex space-between">
                <div>
                    <p className="mg-0 text-bold">£{doc.tariff.upfront}</p>
                    <p className="mg-0 text-grey text-small">upfront cost</p>
                </div>
                <div>
                    <p className="mg-0 text-bold">£{doc.tariff.monthly}</p>
                    <p className="mg-0 text-grey text-small">per month</p>
                </div>
            </div>
            <div className="flex space-between mgt-4">
                <div>
                    <a className="btn bg-primary text-white" href="/">
                        Buy now
                    </a>
                    <i className="text-small text-grey"> from {doc.store}</i>
                </div>

                {isAdmin && (
                    <a
                        className="btn outline-primary"
                        href={`/dashboard/top-contracts/edit?id=${isAdmin.id}`}
                    >
                        Edit
                    </a>
                )}
            </div>
        </article>
    );
}
