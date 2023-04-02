import Link from "next/link";
export default function Offers({ data }) {
    const rows = [];
    data.docs.map((doc, idx) => {
        let row = (
            <tr key={idx}>
                <td className="text-center">
                    <img
                        src={doc.phone.image}
                        style={{ maxWidth: 32 + "px", maxHeight: 32 + "px" }}
                    />
                </td>
                <td>{doc.phone.name}</td>
                <td>{doc.dealType}</td>
                <td>{doc.network}</td>
                <td>
                    <div className="flex flex-column">
                        <span>Cost: {doc.deal.cost}</span>
                        <span>
                            {doc.deal.upfrontCost &&
                                doc.deal.upfrontCost + "GB"}
                        </span>
                    </div>
                </td>
                <td>
                    <Link href={`/dashboard/phones/edit/${doc._id}`}>Edit</Link>
                </td>
            </tr>
        );

        rows.push(row);
    });
    return (
        <div className="dash-table-container bg-white">
            <table className="dash-table table-bordered">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Deal Type</th>
                        <th>Network</th>
                        <th>Terms</th>
                        <th>
                            <Link
                                href="/dashboard/phones/add"
                                className="btn bg-primary text-white"
                            >
                                + Add new
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export async function getServerSideProps({ req }) {
    let token = req.cookies.token;
    // console.log(token);
    let res = await fetch(`${process.env.API_URL}/offers/all`, {
        Accept: "application/json",
        headers: { Authorization: `Bearer ${token}` },
    });

    let data = await res.json();

    return { props: { data } };
}
