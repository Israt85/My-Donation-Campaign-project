const Card = ({card}) => {
    const {Category,Picture,Title } = card;
    return (
        <div>
           <div className="my-10 mx-4 relative flex max-w-[15rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
      src={Picture}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {Category}
    </h4>
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
     {Title}
    </p>
  </div>
  
</div>
        </div>
    );
};

export default Card;