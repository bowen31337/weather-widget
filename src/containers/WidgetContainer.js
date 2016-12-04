import { connect } from 'react-redux'
import Widget from '../components/Widget'

import * as action from '../actions/fetchContents'
import { getCoordinates,getCoordinatesSuccess,getCoordinatesFailure } from '../actions/getCoordinates'

const mapStateToProps = (state) => {
  return {
  		weather:state.fetchContents || {},
  		coordinates:state.getCoordinates || {},
      showWind:window.WEATHER_WIDGET_CONFIG.showWind,
      units:window.WEATHER_WIDGET_CONFIG.units
  }
}

const mapDispatchToProps = (dispatch, ownPros) => {
  return {
   	fetchContents:(unit) => {
      let result = dispatch(getCoordinates()).payload
      result.then(
        response => {
          let coordinates = dispatch(getCoordinatesSuccess(response)).payload
          let result = dispatch(action.fetchContents(unit,coordinates)).payload
       		result.then(response => {
       				if (response.status === 200) {
    	            dispatch(action.fetchContentsSuccess(response.data))
              } else {
                dispatch(action.fetchContentsFailure(response.statusText))
              }
       		})
        },
        error => {
          dispatch(getCoordinatesFailure(error))
        }
      )

   	}
  }
}


const WidgetContainer = connect(mapStateToProps, mapDispatchToProps)(Widget)

export default WidgetContainer
