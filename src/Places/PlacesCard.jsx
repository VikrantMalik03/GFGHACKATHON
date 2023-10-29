import React from "react";
import starIcon from "../../images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ place }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialization,
    totalPatients,
    hospital,
  } = place ;

  const imgStyle = {
    width: '330px', 
    height: 'auto', 
  };

  return (
    <div className="doctor-card">
      <div className="doctor-image">
        <img src={photo} style={imgStyle} alt="" />
      </div>
      <h2 className="doctor-name">{name}</h2>
      <div className="doctor-info">
        <span className="specialization-badge">{specialization}</span>
        <div className="rating">
          <span className="rating-text">
            <img src={starIcon} alt="" /> {avgRating}
          </span>
          <span className="total-rating">({totalRating})</span>
        </div>
      </div>
      <div className="patient-info">
        <h3 className="patient-count">+{totalPatients} patients</h3>
        <p className="hospital-info">At {hospital}</p>
      </div>
      <Link to="/information" className="arrow-link">
        <BsArrowRight className="arrow-icon" />
      </Link>
    </div>
  );
};

export default DoctorCard;
