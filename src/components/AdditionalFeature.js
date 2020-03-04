import React from 'react';

/*we need to pass in feature to properly display the name and price in onClick*/

const AdditionalFeature = ( { car, addFeature, feature } ) => {
  console.log( 'props from additionalFeature: ', car)
  return (
    <li>
      <button onClick = { () => addFeature( feature ) } className="button">Add</button>
      { feature.name } ( + { feature.price } )
    </li>
  );
};

export default AdditionalFeature;
