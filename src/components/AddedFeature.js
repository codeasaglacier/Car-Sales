import React from 'react';

/*we need to pass in feature to properly display the name and price in onClick*/

const AddedFeature = ( { car, removeFeature, feature } ) => {
  console.log( 'props from addedFeature: ', car)

  return (
    <li>
      <button onClick = { () => removeFeature( feature ) } className="button">X</button>
      { feature.name }
    </li>
  );
};

export default AddedFeature;
