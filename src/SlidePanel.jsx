import React from 'react';
import { Link } from 'react-router-dom';

const SlidePanel = () => {
  return (
    <div className='slide-panel'>
      <div className='sub-panel'>
        <p className='panel-title mt-0 font-semibold'>Fees:</p>
        <span className='fee text-headingColor font-bold'>
          Rs. 500
        </span>
      </div>
      <div className='time-slots'>
        <p className='panel-title'>
        Discover the world hassle-free with our Travel Assistant Bot. It's your perfect companion for planning and navigating your next adventure.
        </p>
        
      </div>
      <a className="book-button" target="_blank" href="https://mediafiles.botpress.cloud/278b1ea0-f055-46df-8df1-2318ce5dbe55/webchat/bot.html">Book an Appointment</a>
    </div>
  );
};

export default SlidePanel;