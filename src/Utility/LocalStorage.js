// const getCardInfo = ()=>{
//     const cardInfo = localStorage.getItem("card")
//     console.log(cardInfo)
//     if(cardInfo){
//         return JSON.parse (cardInfo)
//     }
//     return [];
// }
// const saveCardInfo = (id) =>{
//     const saveCard = getCardInfo();
//     const exist = saveCard.find((cardId) => cardId===id);
//     if(!exist){
//         saveCard.push(id);
//         localStorage.setItem('card', JSON.stringify(saveCard))
//     }
// }

// export{ getCardInfo, saveCardInfo};
const getCardInfo = () => {
    const cardInfo = JSON.parse(localStorage.getItem('id'));
    console.log('Card info from localStorage:', cardInfo);
    // if (cardInfo) {
    //     return JSON.parse(cardInfo);
    // }
    // return [];
}

const saveCardInfo = (id) => {
    const savedCard = getCardInfo();
    console.log('Saved card IDs before:', savedCard);

    const exist = savedCard?.find((cardId) => cardId === id);
    if (!exist) {
        savedCard.push(id);
        localStorage.setItem('id', JSON.stringify(savedCard));
        console.log('Saved card IDs after:', savedCard);
    }
}
 export{saveCardInfo, getCardInfo}

