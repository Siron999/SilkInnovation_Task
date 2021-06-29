import React, {useContext, useEffect, useState} from 'react';
import {NavbarComponent} from "../components/navbar/Navbar";
import {SideBarComponent} from "../components/navbar/SideBar";
import {DashboardComponent} from "../components/dashboard/Dashboard";
import UserContext from "../context/UserContext";

export const HomeLayout = () => {
    const {userState, setUserState} = useContext(UserContext);

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const sidebarToggle = () => {
        setSidebarOpen((prev) => !prev);
    }

    return (
        <>
            <div className="d-flex flex-column">
                <NavbarComponent user={userState} sidebarOpen={sidebarOpen} sidebarToggle={sidebarToggle}/>
                <div className="d-flex flex-row">
                    <div>
                        <SideBarComponent sidebarOpen={sidebarOpen} sidebarToggle={sidebarToggle}/>
                    </div>
                    <DashboardComponent/>
                </div>
            </div>

        </>
    )
}