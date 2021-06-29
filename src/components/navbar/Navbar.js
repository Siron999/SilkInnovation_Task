import React, {useContext, useState} from 'react';
import {FormGroup, Input, Media, Nav, Navbar, NavItem, NavLink} from "reactstrap";
import './Navbar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faExpand, faBars, faToggleOn,faTimes} from '@fortawesome/free-solid-svg-icons';
import img1 from '../../images/1.png';
import UserContext from "../../context/UserContext";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

export const NavbarComponent = ({sidebarOpen, sidebarToggle}) => {
    const {userState, setUserState} = useContext(UserContext);
    return (
        <Navbar light expand="md" className="custom-navbar px-5">
            <Nav className="mr-auto" navbar>
                <div className="d-flex flex-column justify-content-center me-5" onClick={sidebarToggle}>
                    <NavItem>
                        <FontAwesomeIcon icon={(sidebarOpen)?faBars:faTimes} className="cursor-poiner"/>
                    </NavItem>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <NavItem>
                        <div className="search-box">
                            <Input
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                className="rounded-pill search-input"
                            />
                            <FontAwesomeIcon icon={faSearch} className="position-absolute text-400 search-box-icon"/>
                        </div>
                    </NavItem>
                </div>
                <div className="d-flex flex-column justify-content-center me-2">
                    <NavItem>
                        <select className="rounded-pill custom-select">
                            <option>EN</option>
                            <option>NEP</option>
                        </select>
                    </NavItem>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <NavItem>
                        <FontAwesomeIcon icon={faExpand}/>
                    </NavItem>
                </div>
            </Nav>
            <Nav navbar style={{marginLeft: "auto", marginRight: "auto"}}>
                <div className="d-flex flex-column justify-content-center">
                    <NavItem>
                        <img src={img1} alt="Avatar" className="custom-title"/>
                    </NavItem>
                </div>
            </Nav>
            <Nav navbar style={{marginLeft: "auto"}}>
                {(userState.user.name === '') ?
                    <>
                        <Button color="primary" tag={Link} to="/login" className="login-button">Login</Button>
                    </> :
                    <>
                        <div className="d-flex flex-column justify-content-center me-3">
                            <NavItem>
                                <FontAwesomeIcon icon={faToggleOn} size="lg"/>
                            </NavItem>
                        </div>
                        <div className="d-flex flex-column justify-content-center me-3">
                            <NavItem className="text-center">
                                <div className="custom-text-navbar"> Wallet Balance</div>
                                <div className="custom-text-navbar"> {userState.user.balance}</div>
                            </NavItem>
                        </div>
                        <div className="d-flex flex-column justify-content-center me-3">
                            <NavItem className="text-center">
                                <div className="custom-text-navbar"> {userState.user.name}</div>
                            </NavItem>
                        </div>
                        <NavItem id="profile">
                            <img src={userState.user.avatar} alt="Avatar"/>
                        </NavItem>
                    </>}
            </Nav>
        </Navbar>
    )
}