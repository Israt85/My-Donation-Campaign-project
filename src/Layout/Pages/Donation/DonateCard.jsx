
const DonateCard = ({dona}) => {
    const {id,category,picture,title,category_bg, card_bg,text_button_bg } = dona||[]
    
    
    return (
        <div className="w-full">
            <div className="relative my-2 flex mx-2 flex-row rounded-xl bg-clip-border shadow-md" style={{backgroundColor:card_bg}}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-4">
                    <div>
                        <h4 className=" w-24 rounded text-center block font-sans text-xl font-semibold border" style={{ backgroundColor: category_bg,color: text_button_bg }}>
                            {category}
                        </h4>
                        <p className="mt-3 block font-sans text-xl font-normal leading-relaxed antialiased" style={{ color:text_button_bg }}>
                            {title}
                        </p>
                    </div>
                    <a className="inline-block" href="#">
                        <button
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold"
                            type="button" style={{backgroundColor: category_bg}}
                        >
                            View Details
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DonateCard;