import React from 'react';
import AdditionalFeature from './AdditionalFeature';


const AdditionalFeatures = ( { car, addFeature, additionalFeatures } ) => {
  console.log( 'Car.Features.length @ AdditionalFeatures:',car.features.length)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      { additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature 
              key={item.id} 
              feature={item}
              addFeature = { addFeature }
              car = { car }
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
