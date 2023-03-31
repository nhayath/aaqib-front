export default function PhoneInfo({ phone }) {
    return (
        <div className="flex space-between w-full bg-white pd-8 phone-info">
            <div className="pi-image">
                <div className="w-full">
                    <img src={phone.image} alt={phone.name} />
                </div>
            </div>

            <div className="pi-details">
                <h1>{phone.name}</h1>
                <article className="hidden-mob">{phone.description}</article>
                <ul className="pi-features mg-0 pd-0">
                    <li className="flex gap-1 mgy-1">
                        <span>Color: </span>
                        <span>{phone.features.color}</span>
                    </li>
                    <li className="flex gap-1 mgy-1">
                        <span>Screen Size: </span>
                        <span>{phone.features.screenSize}</span>
                    </li>
                    <li className="flex gap-1 mgy-1">
                        <span>Storage: </span>
                        <span>{phone.features.storage}</span>
                    </li>
                    <li className="flex gap-1 mgy-1">
                        <span>Memory: </span>
                        <span>{phone.features.memory}</span>
                    </li>
                    <li className="flex gap-1 mgy-1">
                        <span>Battery: </span>
                        <span>{phone.features.battery}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
