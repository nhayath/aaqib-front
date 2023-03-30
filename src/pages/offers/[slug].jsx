import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PhoneInfo from "@/components/PhoneInfo";
import ContractPhoneOffers from "@/components/ContractPhoneOffers";
import SimfreePhoneOffers from "@/components/SimfreePhoneOffers";
import { useState } from "react";

export default function PhoneOffersPage({
    type,
    phone,
    simfreeOffers,
    contractOffers,
}) {
    const [dealType, setDealType] = useState(type);

    const onOptionChange = (e) => {
        setDealType(e.target.value);
    };
    return (
        <>
            <Head>
                <title>{phone.name}</title>
                <meta
                    name="description"
                    content="Looking for a contract phone deal, we are here to help."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <PhoneInfo phone={phone} />

                <div className="deal-type-select mgy-4">
                    <input
                        type="radio"
                        value="contract"
                        checked={dealType === "contract"}
                        onChange={onOptionChange}
                    />
                    Contract
                    <input
                        type="radio"
                        value="simfree"
                        checked={dealType === "simfree"}
                        onChange={onOptionChange}
                    />
                    Simfree
                </div>
                {dealType == "contract" && (
                    <ContractPhoneOffers offers={contractOffers} />
                )}

                {dealType == "simfree" && (
                    <SimfreePhoneOffers offers={simfreeOffers} />
                )}
            </div>
        </>
    );
}

export async function getServerSideProps({ params, query }) {
    let url = `${process.env.API_URL}/offers/phone/${params.slug}`;
    let res = await fetch(url);
    let data = await res.json();
    let type = query.type && query.type == "simfree" ? "simfree" : "contract";
    let contractOffers = data.offers.filter(
        (offer) => offer.dealType.toLowerCase() === "contract"
    );
    let simfreeOffers = data.offers.filter(
        (offer) => offer.dealType.toLowerCase() === "simfree"
    );
    return {
        props: { type, phone: data.phone, contractOffers, simfreeOffers },
    };
}
