import Link from "next/link";

export default function Dashboard() {
    return (
        <>
            <div class="sub-header">
                <div class="sub-header-box box-section border-radius-15">
                    <h1 class="ts-1">Welcome to my Dashboard</h1>
                    <h4 class="ts-4">Please choose an action</h4>
                    <div className="flex gap-1 justify-center mgy-4">
                        <div>
                            <Link href="/dashboard/phones">Phones</Link>
                        </div>
                        <div>
                            <Link href="/dashboard/top-contracts">
                                Top Contracts
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function getServerSideProps({ req, res }) {
    if (req.cookies.token && req.cookies.user) {
        let token = req.cookies.token;
        let user = JSON.parse(req.cookies.user);
        return { props: { token, user } };
    } else {
        return { props: {} };
    }
}
