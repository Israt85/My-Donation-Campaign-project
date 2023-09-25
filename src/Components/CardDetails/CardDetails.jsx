import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleDetails from "../SingleDetails/SingleDetails";


const CardDetails = () => {
    const [card, setCard] = useState([]);
    const {id} = useParams();
    

    const cards = useLoaderData()
    console.log(cards)

    console.log("CardDetails - id:", id);
console.log("CardDetails - cards:", cards);

useEffect(() => {
    console.log("id from URL:", id);
    console.log("cards:", cards);

    const findCard = cards.find((card) => card.id === id);
    console.log("findCard:", findCard);

    setCard(findCard);
}, [id, cards]);

   
   console.log("CardDetails - card:", typeof(card));
   
    
    return (
        <div>
          <SingleDetails card={card} ></SingleDetails>
        </div>
    );
};

export default CardDetails;