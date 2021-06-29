import React from 'react';
import img1 from "../../images/2.png";
import i1 from "../../images/i1.png";
import i2 from "../../images/i2.png";
import i3 from "../../images/i3.png";
import './Dashboard.css';
import {faPlusSquare} from "@fortawesome/free-regular-svg-icons";
import {faMobile,faPhone,faBolt,faWifi,faTv,faWater,faPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Row} from "reactstrap";

export const DashboardComponent = () => {
    return (
        <div className="mt-2 d-flex flex-row justify-content-center align-items-center me-auto ms-auto">
            <div className="MainBox">
                <div className="d-flex flex-row flex-wrap">
                    <div className="SmallBox">
                        <div className="my-2">
                            <img src={i1} alt="i1" className="custom-icons"/>
                        </div>
                        <div>
                            <p className="mt-2">Load Funds</p>
                        </div>
                    </div>
                    <div className="SmallBox">
                        <div>
                            <img src={i2} alt="i1" className="custom-icons"/>
                        </div>
                        <div>
                            <p className="mt-2">Bank Transfer</p>
                        </div>
                    </div>
                    <div className="SmallBox">
                        <div>
                            <img src={i3} alt="i1" className="custom-icons"/>
                        </div>
                        <div>
                            <p className="mt-2">Send Funds</p>
                        </div>
                    </div>
                </div>
                <div className="MediumBox">
                    <h5 className="mt-3 ms-3">Favorite Payments</h5>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <FontAwesomeIcon icon={faPlusSquare} size="2x"/>
                        </div>
                        <div>
                            <p className="mt-4 text-center custom-text">Click on the "+" button to add and get easy
                                access to your
                                favorite utility payments</p>
                        </div>
                    </div>
                </div>
                <div className="MediumBox">
                    <img src={img1} className="custom-banner" alt="banner"/>
                </div>
            </div>
            <div className="MainBox2">
                <h5 className="mt-3 ms-3">Utility Payments</h5>
                <div className="d-flex flex-row justify-content-start flex-wrap">
                    <div className="SmallBox">
                        <div className="mt-3">
                            <FontAwesomeIcon icon={faMobile} size="2x" className="custom-icon-color"/>
                        </div>
                        <div>
                            <p className="mt-2">Top-up</p>
                        </div>
                    </div>
                    <div className="SmallBox">
                        <div className="mt-3">
                            <FontAwesomeIcon icon={faPhone} size="2x" className="custom-icon-color"/>
                        </div>
                        <div>
                            <p className="mt-2">Landline</p>
                        </div>
                    </div>
                    <div className="SmallBox">
                        <div className="mt-3">
                            <FontAwesomeIcon icon={faBolt} size="2x" className="custom-icon-color"/>
                        </div>
                        <div>
                            <p className="mt-2">Electricity</p>
                        </div>
                    </div>
                    <div className="w-100 d-flex flex-row justify-content-start mb-2">
                        <div className="callback">Callback upto 5%</div>
                        <div className="callback">Callback upto 5%</div>
                    </div>
                    <div className="SmallBox">
                        <div className="mt-3">
                            <FontAwesomeIcon icon={faWifi} size="2x" className="custom-icon-color"/>
                        </div>
                        <div>
                            <p className="mt-2">Internet</p>
                        </div>
                    </div>
                    <div className="SmallBox">
                        <div className="mt-3">
                            <FontAwesomeIcon icon={faTv} size="2x" className="custom-icon-color"/>
                        </div>
                        <div>
                            <p className="mt-2">Television</p>
                        </div>
                    </div>
                    <div className="SmallBox">
                        <div className="mt-3">
                            <FontAwesomeIcon icon={faWater} size="2x" className="custom-icon-color"/>
                        </div>
                        <div>
                            <p className="mt-2">Water</p>
                        </div>
                    </div>
                    <div className="w-100 d-flex flex-row justify-content-start mb-2">
                        <div className="callback">Callback upto 5%</div>
                        <div className="callback">Callback upto 5%</div>
                    </div>
                    <div className="SmallBox">
                        <div className="mt-3">
                            <FontAwesomeIcon icon={faPlane} size="2x" className="custom-icon-color"/>
                        </div>
                        <div>
                            <p className="mt-2">Flight Bookings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}