import Image from "next/image";

export default function TopPicks() {
    let row = (
        <article class="bg-white pdx-4 pdy-4">
            <h2 class="ts-4">Apple iPhone 14</h2>
            <figure>
                <img
                    src="https://media.secure-mobiles.com/product-images/apple-iphone-14-plus-128gb-yellow.responsive-fx.png"
                    alt="Picture of the author"
                    width="100%"
                />
            </figure>
            <div class="top-picks-data relative">
                <span class="text-bold">250GB Data</span>
                <span class="text-small text-grey">Unlimited Mins & Texts</span>
                <figure>
                    <img
                        src="https://media.secure-mobiles.com/network-logos/listing/vodafone.webp"
                        width="24px"
                        height="24px"
                    />
                </figure>
            </div>
            <div class="flex space-between">
                <div>
                    <p class="mg-0 text-bold">£235.00</p>
                    <p class="mg-0 text-grey text-small">upfront cost</p>
                </div>
                <div>
                    <p class="mg-0 text-bold">£39.00</p>
                    <p class="mg-0 text-grey text-small">per month</p>
                </div>
            </div>
            <div class="flex space-between mgt-4">
                <a class="btn bg-primary text-white" href="/">
                    Buy now
                </a>
                <a class="btn outline-primary" href="/">
                    View all
                </a>
            </div>
        </article>
    );

    const rows = [];

    for (let i = 0; i < 4; i++) {
        rows.push(row);
    }
    return (
        <div class="top-picks">
            <div class="container">
                <div class="box-section">
                    <h1 class="ts-4 uppercase">Our top picks</h1>
                </div>

                <div class="grid grid-4d grid-3t grid-2m gap-1 mgy-4">
                    {rows}
                </div>
            </div>
        </div>
    );
}
