import * as types from '../constants/actionTypes'


export const getCoordinates = () => {
  const promise = new Promise((resolve, reject) => {
    navigator || reject("Your browser doesn't support Navigator API")
    navigator.geolocation.getCurrentPosition(position =>resolve(position.coords))
  })
  return {
      type: types.GET_COORDINATES,
      payload:promise
    }
}
export const getCoordinatesSuccess = data => ({
  type: types.GET_COORDINATES_SUCCESS,
  payload:data
})
export const getCoordinatesFailure = error => ({
  type: types.GET_COORDINATES_FAILURE,
  payload:error
})
