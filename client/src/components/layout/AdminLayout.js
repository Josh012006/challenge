import SideBar from "./SideBar";

import { Outlet, useLocation } from "react-router-dom";


function AdminLayout () {

    const location = useLocation();
    const isLoginPage = location.pathname === '/admin/login';

    if(isLoginPage) {
        return <div className="bg-stone-100">
            <Outlet />
        </div>
    }
    else {
        return(
            <SideBar>
                <div className="bg-stone-100">
                    <Outlet />
                </div>
            </SideBar>
        )
    }
}



export default AdminLayout;