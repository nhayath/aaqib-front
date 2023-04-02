import Link from "next/link";
import { useState, useEffect } from "react";
import OffersList from "@/components/dashboard/OffersList";
import OfferFilters from "@/components/dashboard/OfferFilters";
import { useRouter } from "next/router";

export default function Offers({ token, data, cond }) {
    const router = useRouter();
    const [filters, setfilters] = useState("");
    const [offers, setOffers] = useState(data?.docs || []);
    const [isClient, setClient] = useState(false);

    const getFilteredData = (selectedFilters) => {
        setfilters(selectedFilters);
        setClient(true);
    };

    useEffect(() => {
        if (isClient) {
            fetchData(filters, token).then((newOffers) => {
                router.replace(`/dashboard/offers/simfree?${filters}`);
                setOffers(newOffers);
            });
        }
    }, [filters, isClient]);

    return (
        <>
            <h4>Simfree Phone Offers</h4>
            <OfferFilters
                dealType="simfree"
                cond={cond}
                filters={data.filters}
                onFilterChange={getFilteredData}
            />
            <br />
            <OffersList dealType="simfree" offers={offers} cond={cond} />
        </>
    );
}

export async function getServerSideProps({ req, query }) {
    let token = req.cookies.token;
    let args = [];
    let cond = {};
    if (query.phone_id) {
        args.push("phone_id=" + query.phone_id);
        cond.phone_id = query.phone_id;
    }
    if (query.network) {
        cond.network = query.network;
        args.push("network=" + query.network);
    }

    let url =
        `${process.env.API_URL}/offers/all?dealType=simfree&` + args.join("&");
    // console.log(token);
    let res = await fetch(url, {
        Accept: "application/json",
        headers: { Authorization: `Bearer ${token}` },
    });

    let data = await res.json();

    return { props: { token, data, cond } };
}

async function fetchData(filters, token) {
    try {
        let res = await fetch(
            `${process.env.API_URL}/offers/all?dealType=simfree&${filters}&aj=1`,
            {
                Accept: "application/json",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        let data = await res.json();

        return data.docs;
    } catch (error) {
        console.log(error.message);
    }
}
