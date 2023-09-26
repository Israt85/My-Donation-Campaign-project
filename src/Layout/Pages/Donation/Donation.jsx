import { useEffect, useState } from "react";
import DonateCard from "./DonateCard";
import { useLoaderData } from "react-router-dom";

const Donation = () => {
    const [giveDonate, setGiveDonate] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const card = useLoaderData;
    console.log(card);

    useEffect(() => {
        const getCard = JSON.parse(localStorage.getItem('test'));
        setGiveDonate(getCard);
        console.log(getCard);
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                {isShow
                    ? giveDonate.map((dona) => (
                          <DonateCard key={dona.id} dona={dona}></DonateCard>
                      ))
                    : giveDonate.slice(0, 4).map((dona) => (
                          <DonateCard key={dona.id} dona={dona}></DonateCard>
                      ))}
            </div>
            {giveDonate.length > 4 && (
                <div className={!isShow ? "" : "hidden"}>
                    <button
                        onClick={() => setIsShow(!isShow)}
                        className="bg-green-700 px-5 py-2 text-center block mx-auto rounded-lg text-white"
                    >
                        Show All
                    </button>
                </div>
            )}
        </div>
    );
};

export default Donation;
