import { useLoaderData } from "react-router-dom";
import Banner from "../../../Components/Header/Banner/Banner";
import Cards from "../../../Components/Cards/Cards";


const Home = () => {
    const cards = useLoaderData();
    console.log(cards)
    return (
        <div>
            <Banner cards={cards}></Banner>
           <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;