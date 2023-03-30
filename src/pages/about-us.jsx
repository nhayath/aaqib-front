import Head from "next/head";
import Image from "next/image";
import HomeHero from "../components/HomeHero";
import TopPicks from "../components/TopPicks";

export default function Home({ topPicks }) {
    return (
        <>
            <Head>
                <title>About Us</title>
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

            <div class="sub-header">
                <div class="container">
                    <div class="sub-header-box box-section border-radius-15">
                        <h1 class="ts-1">About Us</h1>
                    </div>
                </div>
            </div>
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
