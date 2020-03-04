import React from 'react';
import AddedFeature from './AddedFeature';


const AddedFeatures = ( { car, removeFeature, features } ) => {
  console.log( 'Car at AddedFeatures:', car)
  // console.log( 'Features.length:', features.length)
  return (
    <div className="content">
      <h6>Added features:</h6>
      { car.features.length ? (
        <ol type="1">
          { car.features.map(item => (
            <AddedFeature 
              key={item.id} 
              feature={item}
              car = { car }
              removeFeature = { removeFeature }
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
