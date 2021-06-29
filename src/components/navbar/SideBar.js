import React from 'react';
import {Nav, Navbar, NavItem, NavLink} from "reactstrap";
import './Navbar.css';
import {Link} from "react-router-dom";
import {faHome,faMoneyCheck,faWallet,faServer,faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const SideBarComponent = ({sidebarOpen, sidebarToggle})=>{
    return(
        <Navbar className={`${(sidebarOpen)?`sidebarContainer`:`sidebarContainer close`} d-flex flex-column justify-content-center align-items-center p-0`}>
           <Nav vertical className="mb-auto mt-5 d-flex align-items-center">
               <NavItem>
                   <NavLink tag={Link} className={"nav py-0 d-flex align-items-center justify-content-center"}
                            to={""}>
                       <div className={"d-flex flex-column align-items-center"}>
                           <FontAwesomeIcon icon={faHome} size="lg"/>
                           <p>Home</p>
                       </div>
                   </NavLink>
               </NavItem>
               <NavItem>
                   <NavLink tag={Link} className={"nav py-0 d-flex align-items-center justify-content-center"}
                            to={""}>
                       <div className={"d-flex flex-column align-items-center"}>
                           <FontAwesomeIcon icon={faMoneyCheck} size="lg"/>
                           <p>Transactions</p>
                       </div>
                   </NavLink>
               </NavItem>
               <NavItem>
                   <NavLink tag={Link} className={"nav py-0 d-flex align-items-center justify-content-center"}
                            to={""}>
                       <div className={"d-flex flex-column align-items-center"}>
                           <FontAwesomeIcon icon={faWallet} size="lg"/>
                           <p>My Wallet</p>
                       </div>
                   </NavLink>
               </NavItem>
               <NavItem>
                   <NavLink tag={Link} className={"nav py-0 d-flex align-items-center justify-content-center"}
                            to={""}>
                       <div className={"d-flex flex-column align-items-center"}>
                           <FontAwesomeIcon icon={faServer} size="lg"/>
                           <p>Services</p>
                       </div>
                   </NavLink>
               </NavItem>
               <NavItem>
                   <NavLink tag={Link} className={"nav py-0 d-flex align-items-center justify-content-center"}
                            to={""}>
                       <div className={"d-flex flex-column align-items-center"}>
                           <FontAwesomeIcon icon={faUser} size="lg"/>
                           <p>Account</p>
                       </div>
                   </NavLink>
               </NavItem>
           </Nav>
        </Navbar>
    )
}