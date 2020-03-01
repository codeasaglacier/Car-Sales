export const addFeature = newFeature => {
  console.log( 'newFeature from action:', newFeature )
  return {
    type: 'BUY_ITEM',
    payload: newFeature
  }
}

export const removeFeature = remainingFeatures => {
  console.log( 'remainingFeatures from action:', remainingFeatures )
  return {
    type: 'REMOVE_FEATURE',
    payload: remainingFeatures
  }
}