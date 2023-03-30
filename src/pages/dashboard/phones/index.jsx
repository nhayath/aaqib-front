import Link from "next/link";
export default function Phones({ data }) {
    const rows = [];
    data.docs.map((doc, idx) => {
        let row = (
            <tr key={idx}>
                <td className="text-center">
                    <img src={doc.image} />
                </td>
                <td>
                    <Link href={`/dashboard/phones/offers/${doc._id}`}>
                        {doc.name}
                    </Link>
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
                        <th>
                            <Link href="/dashboard/phones/add">
                                <Link
                                    href="/dashboard/phones/add"
                                    className="btn bg-primary text-white"
                                >
                                    + Add new
                                </Link>
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
    let res = await fetch(`${process.env.API_URL}/phones/all`, {
        Accept: "application/json",
        headers: { Authorization: `Bearer ${token}` },
    });

    let data = await res.json();

    return { props: { data } };
}
