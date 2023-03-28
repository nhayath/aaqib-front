import Head from "next/head";
import Image from "next/image";
import HomeHero from "../components/HomeHero";
import TopPicks from "../components/TopPicks";

export default function Home() {
    return (
        <>
            <Head>
                <title>Find Your Dream Contract Phone</title>
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
                <TopPicks />
            </main>
        </>
    );
}
