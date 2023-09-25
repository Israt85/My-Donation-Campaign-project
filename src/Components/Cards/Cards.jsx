
// import Card from "../Card/Card";

import Card from "../Card/Card";

const Cards = ({cards}) => {

    console.log(cards)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                cards?.map(card => <Card key={card.id} card={card}></Card> )
            }
        </div>
    );
};

export default Cards;