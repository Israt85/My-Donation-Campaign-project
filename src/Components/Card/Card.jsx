import { Link, useNavigate } from "react-router-dom";

const Card = ({card}) => {
    const {id,category,picture,title,category_bg, card_bg } = card;
     const cardStyle = {
    backgroundColor:card_bg ,
    color :category_bg
};


    return (
        <div >
           <Link to={`/card/${id}`}>
           <div className="my-10 mx-4 relative flex max-w-[15rem] flex-col rounded-xl text-gray-700 shadow-md" style={cardStyle}>
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
      src={picture}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-6">
    <h4 className=" w-24 rounded text-center block font-sans text-xl font-semibold border" style={{backgroundColor:category_bg, color: card_bg }}>
      {category}
    </h4>
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased" style={{color: category_bg }}>
     {title}
    </p>
  </div>
  
</div>
</Link>
        </div>
    );
};

export default Card;
