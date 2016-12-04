import * as types from '../constants/actionTypes'

const INIT_STATE = {
		error:null,
		loading:false,
		payload:{}
}

const fetchContentReducer = (state = INIT_STATE, action) => {
	const { type } = action

	switch(type) {
		case types.FETCH_CONTENTS:
			return {
					...INIT_STATE,
					loading:true

			}
		case types.FETCH_CONTENTS_SUCCESS:
			return {
					...INIT_STATE,
					loading:false,
					payload:action.payload
			}
		case type.FETCH_CONTENTS_FAILURE:
			return {
					...INIT_STATE,
					error:action.payload,
					loading:false			
			}
		default:
      return state
	}

}

export default fetchContentReducer
