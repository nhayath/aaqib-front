export default function PhoneOffers({ offers }) {
    const rows = [];
    offers.map((offer, idx) => {
        let row = (
            <div className="offer bg-white flex space-around" key={idx}>
                <div className="offer-start flex flex-row space-between flex-3">
                    <div className="offer-network flex-1 flex align-center justify-center flex-column">
                        <p className="text-small text-grey">Store</p>
                        <b>{offer.store}</b>
                    </div>
                    <div className="offer-tariff flex-3">
                        <p className="text-small text-grey">price</p>
                        &pound;{offer.deal.cost}
                    </div>
                </div>
                <div className="offer-end flex flex-2 flex-row space-between">
                    <div className="offer-cost flex-1"></div>
                    <div className="offer-cost flex-1 flex align-center justify-center flex-column">
                        <p>
                            <a
                                href={offer.url}
                                className="btn bg-primary text-white"
                            >
                                Get the deal
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
        rows.push(row);
    });
    return (
        <>
            <div className="offers-container">
                <div className="offers-list mgy-4">{rows}</div>
            </div>
        </>
    );
}
