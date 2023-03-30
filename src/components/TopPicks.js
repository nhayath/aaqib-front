import Image from "next/image";
import TopPicksRow from "./TopPicksRow";

export default function TopPicks({ docs }) {
    const rows = [];
    docs.map((doc, idx) => {
        let row = <TopPicksRow key={idx} doc={doc.value} />;

        rows.push(row);
    });
    return (
        <div className="top-picks">
            <div className="container">
                <div className="mg-4 text-center">
                    <h1 className="ts-4 uppercase">Our top picks</h1>
                </div>

                <div className="grid grid-4d grid-3t grid-2m gap-1 mgy-4">
                    {rows}
                </div>
            </div>
        </div>
    );
}
