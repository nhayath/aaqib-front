import Link from "next/link";
export default function Users({ data }) {
    const rows = [];
    data.users.map((doc, idx) => {
        let row = (
            <tr key={idx}>
                <td className="text-center">{doc.name}</td>
                <td>{doc.email}</td>
                <td>{doc.role}</td>
                <td>
                    <Link href={`#`}>Edit</Link>
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>
                            <Link
                                href="/dashboard/users/add"
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
    let res = await fetch(`${process.env.API_URL}/users`, {
        Accept: "application/json",
        headers: { Authorization: `Bearer ${token}` },
    });

    let data = await res.json();

    return { props: { data } };
}
