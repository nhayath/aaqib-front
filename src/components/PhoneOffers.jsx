export default function PhoneOffers({ offers }) {
    const rows = [];
    offers.map((offer, idx) => {
        let row = (
            <div className="offer bg-white flex space-around" key={idx}>
                <div className="offer-start flex flex-row space-between flex-3">
                    <div class="offer-network flex-1 flex align-center justify-center flex-column">
                        <p className="text-small text-grey">Network</p>
                        <b>{offer.network}</b>
                    </div>
                    <div className="offer-tariff flex-3">
                        <p class="text-grey text-small">Plan Includes</p>
                        <p>
                            <strong>
                                {offer.deal.data === -1
                                    ? "Unlimited"
                                    : `${offer.deal.data}GB`}
                            </strong>{" "}
                            data
                        </p>
                        <p>
                            <strong>
                                {offer.deal.minutes === -1
                                    ? "Unlimited"
                                    : `${offer.deal.minutes}`}
                            </strong>{" "}
                            minutes
                        </p>
                        <p>
                            <strong>
                                {offer.deal.texts === -1
                                    ? "Unlimited"
                                    : `${offer.deal.minutes}`}
                            </strong>{" "}
                            texts
                        </p>
                    </div>
                </div>
                <div className="offer-end flex flex-2 flex-row space-between">
                    <div className="offer-cost flex-1">
                        <p className="text-small text-grey">Upfront cost:</p>
                        <p>&pound;{offer.deal.upfrontCost}</p>
                        <p className="text-small text-grey">Monthly cost:</p>
                        <p class="text-bold">&pound;{offer.deal.cost}</p>
                    </div>
                    <div className="offer-cost flex-1 flex align-center justify-center flex-column">
                        <strong>{offer.deal.contractLength}</strong> months
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
