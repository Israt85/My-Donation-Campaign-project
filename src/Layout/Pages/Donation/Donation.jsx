import { useEffect, useState } from "react";
import DonateCard from "./DonateCard";
import { useLoaderData } from "react-router-dom";

const Donation = () => {
    const [giveDonate, setGiveDonate] = useState([]);
    const card = useLoaderData
    console.log(card)


    useEffect(() => {
        const getCard = JSON.parse(localStorage.getItem('test'));
        setGiveDonate(getCard)
        console.log(getCard)
    }, []); // Make sure to add 'donates' as a dependency here
        
    return (
        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            {giveDonate.map((dona) => (
                <DonateCard key={dona.id} dona={dona}></DonateCard>
            ))}
        </div>
    );
};

export default Donation;
