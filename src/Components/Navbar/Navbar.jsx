import {NavLink} from "react-router-dom";
import Logo from "../Header/Logo/Logo";
const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between p-6">
            <div>
                <Logo></Logo>
            </div>

            <div className=" text-sm flex gap-4">
            <div>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold text-red-500 underline" : ""
                }
            >
                Home
            </NavLink>
            </div>
            <div>
            <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold text-red-500 underline" : ""
                }
            >
                Donation
            </NavLink>
            </div>
           <div>
           <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : ""
                }
            >
                Statistics
            </NavLink>
           </div>
            </div>
        </div>
       
        </div>
    );
};

export default Navbar;