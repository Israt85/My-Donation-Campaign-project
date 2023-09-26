
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingleDetails = ({ card }) => {
    const { id, picture, title, description, price, category_bg} = card;

    const notify = () => {
        toast("Wow!!! You donated Successfully");
        const addedDonationArray = [];
        const getCard = JSON.parse(localStorage.getItem('test'))

        if (!getCard) {
            addedDonationArray.push(card)
            localStorage.setItem('test', JSON.stringify(addedDonationArray))
        }
        else {
            const exist = getCard.find(phone => phone.id === id)
            if (!exist) {
                addedDonationArray.push(...getCard, card)
                localStorage.setItem('test', JSON.stringify(addedDonationArray))
            }
            else{
                console.log('already ache');
            }
        }


    }
    return (
        <div>
            <div className="max-w-5xl h-[400px] mx-auto px-20">
                <div className="relative w-full h-full pt-2">
                <img className="relative w-full h-full pt-2" src={picture} alt="" />
                
                <div className='w-full h-20 absolute -mt-20 bg-black opacity-50'> </div>
                <button onClick={notify} className="absolute block -mt-16 mx-6 border-2 rounded-xl px-4 py-3 text-lg font-medium text-white"style={{backgroundColor:category_bg}} >Donate:${price} </button>
                
                <h2 className="text-4xl font-bold py-4">{title}</h2>
                <p>{description}</p>
            </div>
            </div>
            <div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleDetails;
