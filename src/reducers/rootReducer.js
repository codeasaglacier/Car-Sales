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
      const remainingFeatures = { id: action.payload }

      const removeFeature = ( i ) => {
        state.additionalFeatures.push( state.car.features.splice( i, 1 )[ 0 ])
      }
      return { ...state, additionalFeatures: removeFeature( remainingFeatures )}

    case 'BUY_ITEM':
      const newFeature = { id: action.payload }
      console.log( 'BUY_ITEM features:', state.car.features)
      console.log( 'BUY_ITEM car:', state.car)

      const newFeatures = ( i ) => {
        state.car.features.push( state.additionalFeatures.splice( i, 1 )[ 0 ])
      }
      return { ...state, features: newFeatures( newFeature ) }

    default:
      return state
  }
}