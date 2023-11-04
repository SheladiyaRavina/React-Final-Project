import React from "react";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";


const AdminLayout =()=>{
    return(
            <div>
            <AdminHeader/>
                <main style={{minHeight : '85vh'}}>
                    <Outlet/>
                </main>
            <AdminFooter/>
            </div>
    )
}

export default AdminLayout;