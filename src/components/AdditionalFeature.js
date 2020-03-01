import React from 'react';


const AdditionalFeature = ( { car, addFeature, feature } ) => {

  return (
    <li>
      <button onClick = { addFeature } className="button">Add</button>
      { feature.name } ( + { feature.price } )
    </li>
  );
};

export default AdditionalFeature;
