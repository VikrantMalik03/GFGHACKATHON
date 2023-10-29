import React, { useState } from 'react';
import doctorImg from '../images/switzerland.jpg';
import starIcon from '../images/Star.png'
import DoctorAbout from './PlaceAbout';
import Feedback from './Feedback';
import SlidePanel from './SlidePanel';

const DoctorDetails = () => {

  const [tab,setTab] = useState('about')

  return (
    <section>
      <div className="details-cont">
        <div className="details-subcont">

          <div className="details-img">
            <div className="details-main">
              <figure className='details-figure'>
                <img src={doctorImg} alt="" className='img-size'/>
              </figure>

              <div>
                <span className='detail-span'>Surgeon</span>
                <h3 className="switzeland">Switzerland</h3>
                <div className="vikrant">
                  <span className='harsh'>
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                  <span className='arin'>(272)</span>
                </div>

                <p className="detail-text">
                  Experienced surgeon and awarded in MD(medicine). 
                  <p className="detail-location">At Manipal Hospitals, Vijayawada</p> 
                </p>

              </div> 
            </div>

            <div className="about-feed">
              <button 
              onClick={()=> setTab('about')}
              className={`${tab=='about' && 'border-b border-solid border-primaryColor'} about`} >About</button>
              <button 
              onClick={()=> setTab('feedback')}
              className={`${tab=='feedback' && 'border-b border-solid border-primaryColor'} feed`}>Feedback</button>
            </div>

            <div className="mt-[50px]">
              {
                tab=='about' && <DoctorAbout/>
              }
              {
                tab=='feedback' && <Feedback/>
              }
            </div>

          </div>

          <div>
            <SlidePanel/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails;
