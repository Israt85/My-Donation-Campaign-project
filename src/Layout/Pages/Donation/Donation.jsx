import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getCardInfo } from "../../../Utility/LocalStorage";
import DonateCard from "./DonateCard";

const Donation = () => {
    const [giveDonate, setGiveDonate] = useState([])
    const donates = useLoaderData();
    

    useEffect(()=>{
         const  donateIds = getCardInfo()
           if(donates.length>0){
            const donation = [];
            for (const id of donateIds){
                const donate = donates.find((donate => donate.id === id));
                if(donate){
                    donation.push(donate)
                }
            }
            setGiveDonate(donation)
           }
           
    },[])
    return (
        <div>
            {
                giveDonate.map((dona => <DonateCard key={dona.id} dona={dona}></DonateCard> ))
            }
        </div>
    );
};

export default Donation;