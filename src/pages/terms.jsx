import Head from "next/head";

export default function Home({ topPicks }) {
    return (
        <>
            <Head>
                <title>Terms and Conditions</title>
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

            <div className="sub-header">
                <div className="container">
                    <div className="sub-header-box box-section border-radius-15">
                        <h1 className="ts-1">Terms & Conditions</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
