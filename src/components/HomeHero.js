export default function HomeHero() {
    return (
        <div className="sub-header">
            <div className="container">
                <div
                    className="hero-image"
                    style={{ backgroundImage: `url("/cover.jpg")` }}
                >
                    <div className="hero-blur"></div>
                    <div className="sub-header-box box-section border-radius-15">
                        <h1 className="ts-1">Lets find your next phone</h1>
                        <h4 className="ts-4">at a price you'll love!</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
