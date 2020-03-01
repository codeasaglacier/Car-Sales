import React from 'react';


const AddedFeature = ( { car, removeFeature } ) => {
  console.log( 'props from addedFeature: ', car)

  return (
    <li>
      <button onClick = { removeFeature } className="button">X</button>
      { car.feature.name }
    </li>
  );
};

export default AddedFeature;
