
const Card = ({card}) => {
    const {Category,Picture,Title,Category_bg, Card_bg } = card;
     const cardStyle = {
    backgroundColor:Card_bg ,
    color :Category_bg
};

    return (
        <div>
           <div className="my-10 mx-4 relative flex max-w-[15rem] flex-col rounded-xl text-gray-700 shadow-md" style={cardStyle}>
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
      src={Picture}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-6">
    <h4 className=" w-24 rounded text-center block font-sans text-xl font-semibold border" style={{backgroundColor:Category_bg, color: Card_bg }}>
      {Category}
    </h4>
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased" style={{color: Category_bg }}>
     {Title}
    </p>
  </div>
  
</div>
        </div>
    );
};

export default Card;
