import React from "react";
import { places } from '../assets/places';
import PlacesCard from './PlacesCard';

const PlacesList = () => {
  return (
    <div className='doctor-list'>
      {places.map((place) => 
        <PlacesCard key={place.id} place={place} />
      )}
    </div>
  );
};

export default PlacesList;
