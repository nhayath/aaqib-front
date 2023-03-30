export default function HomeHero() {
    return (
        <div class="sub-header">
            <div class="container">
                <div
                    className="hero-image"
                    style={{ backgroundImage: `url("/cover.jpg")` }}
                >
                    <div class="hero-blur"></div>
                    <div class="sub-header-box box-section border-radius-15">
                        <h1 class="ts-1">Lets find your next phone</h1>
                        <h4 class="ts-4">at a price you'll love!</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
