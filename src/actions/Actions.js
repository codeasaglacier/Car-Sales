export const addFeature = feature => {
  console.log( 'newFeature from action:', feature )
  return {
    type: 'BUY_ITEM',
    payload: feature
  }
}

export const removeFeature = feature => {
  console.log( 'remainingFeatures from action:', feature )
  return {
    type: 'REMOVE_FEATURE',
    payload: feature
  }
}