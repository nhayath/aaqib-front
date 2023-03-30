import Link from "next/link";
import TopPicksRow from "@/components/TopPicksRow";
export default function TopContracts({ data }) {
    const rows = [];
    data.docs.map((doc, idx) => {
        let row = (
            <TopPicksRow
                key={idx}
                doc={doc.value}
                isAdmin={{ id: doc._id, name: doc.name }}
            />
        );

        rows.push(row);
    });
    return (
        <div className="top-picks">
            <div className="container">
                <div className="box-section">
                    <h1 className="ts-4 uppercase">Top Contracts</h1>
                    <Link
                        href="/dashboard/top-contracts/add-new"
                        className="btn bg-primary text-white mgy-4"
                    >
                        Add new
                    </Link>
                </div>

                <div className="grid grid-4d grid-3t grid-2m gap-1 mgy-4">
                    {rows}
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps({ req }) {
    let token = req.cookies.token;
    // console.log(token);
    let res = await fetch(
        `${process.env.API_URL}/options/m/top-contract-phone-deals`,
        {
            Accept: "application/json",
            headers: { Authorization: `Bearer ${token}` },
        }
    );

    let data = await res.json();

    return { props: { data } };
}
