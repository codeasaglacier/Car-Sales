//initial state is an object
export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}
//reducer is just a JS function
//state is the current state, action is always an object
//action mush always have a type, can have payload or other keys
//reducers always want immutable objects that return brand new objects
export const rootReducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case 'REMOVE_FEATURE':
      //make a new copy of state
      const newerState = { ...state }

      //create a feature variable for readability
      const removedFeature = action.payload

      //identify feature by id
      const removedId = removedFeature.id

      //filter state.car.features to get new array without selected id
      const newerCarFeatures = state.car.features.filter( item => item.id !== removedId )

      //addselected feature to newAdditionalFeatures
      const newAdditionalFeatures = [ ...state.additionalFeatures, removedFeature]

      //remove feature price from additionalPrice
      newerState.additionalPrice -= removedFeature.price

      //update copy of state to reflect changes
      newerState.car.features = newerCarFeatures
      newerState.additionalFeatures = newAdditionalFeatures
      //return new state
      return newerState

    case 'BUY_ITEM':
      //make a copy of state to manipulate
      const newState = { ...state }

      //create a feature variable for readability
      const feature =  action.payload

      //identify feature by id
      const id = feature.id

      //filter additionalFeatures array to get new array without the selected id
      const newAdditionalfeatures = state.additionalFeatures.filter( item => item.id !== id )
      
      //add the selected feature to car.feature
      const newCarFeatures = [ ...state.car.features, feature ]

      //add price of feature to the total
      newState.additionalPrice += feature.price

      //update copy of state to reflect changes
      newState.additionalFeatures = newAdditionalfeatures
      newState.car.features = newCarFeatures

      //return the new state
      return newState


    default:
      return state
  }
}