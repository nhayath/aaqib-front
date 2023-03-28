import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PhoneInfo from "@/components/PhoneInfo";
import PhoneOffers from "@/components/PhoneOffers";

export default function PhoneOffersPage({ data }) {
    return (
        <>
            <Head>
                <title>{data.phone.name}</title>
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
                <PhoneInfo phone={data.phone} />
                <PhoneOffers offers={data.offers} />
            </div>
        </>
    );
}

export async function getServerSideProps({ params }) {
    let url = `${process.env.API_URL}/offers/phone/${params.slug}`;
    let res = await fetch(url);
    let data = await res.json();
    return { props: { data } };
}
