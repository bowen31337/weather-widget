import * as types from '../constants/actionTypes'

const INIT_STATE = {
		payload:{},
		loading:false,
		error:null
}

const getCoordinates = (state = INIT_STATE, action) => {
	const { type } = action

	switch(type) {
		case types.GET_COORDINATES:
			return {
					...INIT_STATE,
					loading:true
			}
		case types.GET_COORDINATES_SUCCESS:
			return {
					...INIT_STATE,
					payload:action.payload,
					loading:false,
			}
		case types.GET_COORDINATES_FAILURE:
			return {
					...INIT_STATE,
					error:action.payload,
					loading:false
			}
		default:
      return state
	}

}

export default getCoordinates
