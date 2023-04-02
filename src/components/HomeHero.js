import Link from "next/link";
export default function HomeHero() {
    return (
        <div className="sub-header">
            <div className="container">
                <div
                    className="hero-image"
                    style={{ backgroundImage: `url("/cover-3.jpg")` }}
                >
                    <div className="hero-blur"></div>
                    <div className="sub-header-box box-section border-radius-15">
                        <h1 className="ts-1">Lets find your next phone</h1>
                        <div className="flex align-center justify-center mgy-4">
                            <Link className="btn btn-pill" href="/contracts">
                                Contract
                            </Link>
                            <Link
                                className="btn btn-pill"
                                href="/simfree-offers"
                            >
                                Simfree
                            </Link>
                            <Link
                                className="btn btn-pill"
                                href="/simonly-offers"
                            >
                                Simonly
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
