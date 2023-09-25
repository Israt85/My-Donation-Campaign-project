
const SingleDetails = ({card}) => {
    const { picture,title, description,price} = card;
    console.log("SingleDetails - card:", card);
    return (
       <div>
        <div className="max-w-full h-[500px] mx-auto px-20">
            <img className="relative w-full h-full pt-5" src={picture} alt="" />
            
            <button className="absolute mx-6 -mt-16 border-2 rounded-xl px-4 py-3 bg-red-500 text-lg font-medium text-white">Donate:${price} </button>
            <h2 className="text-4xl font-bold py-5">{title}</h2>
            <p>{description}</p>
        </div>
       </div>
    );
};

export default SingleDetails;
