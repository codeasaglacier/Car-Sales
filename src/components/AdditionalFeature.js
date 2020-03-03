import React from 'react';


const AdditionalFeature = ( { car, addFeature, feature } ) => {
  console.log( 'props from additionalFeature: ', car)
  return (
    <li>
      <button onClick = { addFeature } className="button">Add</button>
      { feature.name } ( + { feature.price } )
    </li>
  );
};

export default AdditionalFeature;
