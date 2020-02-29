import React from 'react';
import { initialState}
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {


  const removeFeature = item => {
    // dispatch an action here to remove an item
    dispatch( { type: 'REMOVE_FEATURE' } )
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    dispatch( { type: 'BUY_ITEM' } )
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
