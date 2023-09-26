
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveCardInfo } from '../../Utility/LocalStorage';
const SingleDetails = ({ card }) => {
    const { id, picture, title, description, price } = card;
    console.log("SingleDetails - card:", card);

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
            <div className="max-w-7xl h-[500px] mx-auto px-20">
                <img className="relative w-full h-full pt-5" src={picture} alt="" />

                <button onClick={notify} className="hover:bg-red-800 absolute mx-6 -mt-16 border-2 rounded-xl px-4 py-3 bg-red-500 text-lg font-medium text-white">Donate:${price} </button>
                <h2 className="text-4xl font-bold py-5">{title}</h2>
                <p>{description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleDetails;
