import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Mainlayout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Mainlayout;