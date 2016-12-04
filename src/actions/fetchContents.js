import * as types from '../constants/actionTypes'
import axios from 'axios'

const contentEndpointUrl =  'http://api.openweathermap.org/data/2.5/weather?appid=073c48738a252cd58eb4aff422ca27f6'

export const fetchContents = (units='metric',coordinates) => {
	const request = axios({
    method: 'get',
    url: contentEndpointUrl+"&units="+units+"&lat="+coordinates.latitude.toFixed(2)+ "&lon="+coordinates.longitude.toFixed(2),
    headers: []
  })
	return {
		type:types.FETCH_CONTENTS,
		payload:request
	}
}

export const fetchContentsSuccess = (data) => {
	return {
		type:types.FETCH_CONTENTS_SUCCESS,
		payload:data
	}
}

export const fetchContentsFailture = (error) => {
	return {
		type:types.FETCH_CONTENTS_SUCCESS,
		payload:error
	}
}
