import React from 'react';
import { initialState } from './reducers/rootReducer'
import { connect } from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature } from './actions/Actions'

const App = ( { additionalPrice, car, additionalFeatures, addFeature, removeFeature } ) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header 
          car = { car } 
        />
        <AddedFeatures 
          car = { car }
          removeFeature = { removeFeature }
        />
      </div>
      <div className="box">
        <AdditionalFeatures 
          car = { car } 
          addFeature = { addFeature }
          additionalFeatures = { additionalFeatures }

        />
        <Total 
          car = { car } 
          additionalPrice = { additionalPrice }
        />
      </div>
    </div>
  );
};

const mapStateToProps = ( state = initialState ) => {
  console.log('mSTP state:', state)
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}
//{ nameWeCallBy: actualProps } === { write once if same }
//{ addFeature: addFeature } === { addFeature }
//{ removeFeature: removeFeature } === { removeFeature }
const mapDispatchToProps = { 
  addFeature, 
  removeFeature 
}

export default connect( mapStateToProps, mapDispatchToProps )( App );