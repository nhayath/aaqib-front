import { useState } from "react";
import Link from "next/link";
export default function Phones({ data, token }) {
    let [docs, setDocs] = useState(data.docs);
    const deletePhone = async (phone_id, phone_name) => {
        if (confirm(`Delete ${phone_name}`)) {
            try {
                console.log(`deleting ${phone_id}`, token);
                let status = await fetch(
                    `${process.env.API_URL}/phones/delete/${phone_id}`,
                    {
                        method: "DELETE",
                        Accept: "application/json",
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setDocs(docs.filter((d) => d._id !== phone_id));
            } catch (error) {
                alert(error.message);
            }
        }
    };
    const rows = [];
    docs.map((doc, idx) => {
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
                    <Link href={`/dashboard/phones/offers/${doc._id}`}>
                        Offers
                    </Link>
                    <Link
                        href={`/dashboard/phones/edit/${doc._id}`}
                        className="btn btn-outline"
                    >
                        Edit
                    </Link>
                    <Link
                        className="btn btn-outline"
                        href="#"
                        onClick={() => deletePhone(doc._id, doc.name)}
                    >
                        Delete
                    </Link>
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
    let res = await fetch(`${process.env.API_URL}/phones/all`, {
        Accept: "application/json",
        headers: { Authorization: `Bearer ${token}` },
    });

    let data = await res.json();

    return { props: { data, token } };
}
