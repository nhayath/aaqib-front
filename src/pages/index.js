import Head from "next/head";
import Image from "next/image";
import HomeHero from "../components/HomeHero";
import TopPicks from "../components/TopPicks";

export default function Home({ topPicks }) {
    return (
        <>
            <Head>
                <title>Compare Phones</title>
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

            <HomeHero />

            <main>
                <TopPicks docs={topPicks} />
            </main>
        </>
    );
}

export async function getServerSideProps({ req }) {
    let token = req.cookies.token;
    // console.log(token);
    let res = await fetch(
        `${process.env.API_URL}/options/m/top-contract-phone-deals`
    );

    let data = await res.json();

    return { props: { topPicks: data.docs } };
}
