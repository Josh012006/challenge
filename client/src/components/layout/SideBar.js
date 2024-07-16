import { useState } from "react";

import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice"
import { Link } from "react-router-dom";


function SideBar({children}) {

    const dispatch = useDispatch();

    // A state to manage the dislay of the navbar for small sizes screens
    const [navDisplay, setNavDisplay] = useState("hidden");

    // Function to handle logout
    const handleLogout = () => {
        dispatch(logout());
    }


    // Function to handle sidebar toggle
    const handleToggle = () => {
        setNavDisplay(navDisplay === "hidden" ? "grid" : "hidden");
    }

    return (
        <div className="grid grid-cols-5">
            <div className="col-span-5 lg:col-span-1 bg-black h-full">
                <div className="flex justify-center items-center p-3 my-5 mx-5 border-b-4 rounded border-b-gray-500">
                    <img alt="brand" src="/brand.png" />
                </div>
                <i className="fa-solid fa-bars text-gray-500 text-3xl m-2 block lg:hidden py-1 px-2 rounded-lg cursor-pointer" onClick={handleToggle}></i>
                <nav className={`${navDisplay} grid-cols-1 lg:grid items-center my-2 lg:my-24`}>
                    <Link to="/admin/add" className="hover:bg-zinc-800 p-3 lg:p-5 w-full lg:text-xl text-lg font-bold text-center text-white lg:text-start">Faire des ajouts</Link>
                    <Link to="/admin" className="hover:bg-zinc-800 p-3 lg:p-5 w-full lg:text-xl text-white text-lg font-bold text-center lg:text-start">Mes tâches</Link>
                    <span className="hover:bg-zinc-800 p-3 lg:p-5 w-full lg:text-xl text-lg text-white font-bold cursor-pointer text-center lg:text-start" onClick={handleLogout}>Me déconnecter</span>
                </nav>
            </div>
            <div className="col-span-5 lg:col-span-4 h-full">{children}</div>
        </div>
    )
}



export default SideBar;