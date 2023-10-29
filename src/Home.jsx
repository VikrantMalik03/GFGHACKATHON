import React from "react";
import homeImg from "../images/home.jpg";
import { useState } from 'react';
import DoctorList from "./Places/PlacesList";
// import travelImg from '../../images/travel-img02.png';
// import starIcon from '../../assets/images/Star.png';
// import DoctorAbout from './DoctorAbout';
// import Feedback from './Feedback';
// import SlidePanel from './SlidePanel';

const Home = () => {

    return (
        <>
            <div className="home-page">
            <img
                src={homeImg} // Replace with the URL of your image
                alt="Travel"
                className="background-image"
            />
            <div className="overlay-text">
                <h1>Travel With Us</h1>
            </div>
            </div>

            <DoctorList/>






        </>
    )
}

export default Home;