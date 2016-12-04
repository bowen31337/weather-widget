import React, {Component} from 'react'

import moment from 'moment'
// import loading from '../assets/images/infinity.gif'
import { getWindSpeedDesc, getWindDirection } from '../utils/windCal'




class Widget extends Component{
  componentWillMount(){
    this.props.fetchContents(this.props.units)
  }

  componentWillReceiveProps(nextProps) {
    // nextProps.fetchContents()
  }
  formateDateTime(string){
    string = string + '000'
    return moment.unix(string*1).format("h:mm A")
  }
  weather(weather,showWind=true) {
    if(weather.name){
      let symbol = '&#8457'
      if (window.WEATHER_WIDGET_CONFIG.units == "metric") symbol = '&#8451'
      return (
        <div>
          <h3>{window.WEATHER_WIDGET_CONFIG.title || weather.name}</h3>
          <div className="separator">
            <div className="inline-separator weather">
              <img src={'http://openweathermap.org/img/w/'+weather.weather[0].icon+'.png'}/>
              <span>{weather.weather[0].main}</span><br/>
              <span>{weather.weather[0].description}</span>
            </div>
            <div className="temperature">
              <img width="40px" src="https://cdn2.iconfinder.com/data/icons/medicine-9/512/temperature-512.png"/>
              <span className="temp">
                {Math.round(weather.main.temp)}
                <span dangerouslySetInnerHTML={{__html:symbol}}></span>
              </span>
            </div>
            <div className="clear"></div>
          </div>
          <table>
            {showWind &&<tr><td>Wind:</td><td> {getWindSpeedDesc(weather.wind.speed)} {weather.wind.speed} m/s, {getWindDirection(weather.wind.deg)} ({weather.wind.deg})</td></tr>}
            <tr><td>Humidity:</td><td> {weather.main.humidity}%</td></tr>
            <tr><td>Pressure:</td><td> {weather.main.pressure}%</td></tr>
            <tr><td>Sunrise:</td><td> {this.formateDateTime(weather.sys.sunrise)}</td></tr>
            <tr><td>Sunset:</td><td> {this.formateDateTime(weather.sys.sunset)}</td></tr>
           </table>
        </div>
      )
    }

  }



  render(){
    const {weather,coordinates,showWind} = this.props
    const loading = 'http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif'

    if(coordinates.loadding){
      return <div className="loader"><img src={loading} /></div>
    }

    if(coordinates.error){
      return <p> {coordinates.error} </p>
    }

    if(weather.loading) {
      return <div className="loader"><img src={loading} /></div>
    }

    if(weather.error){
      return <p> {weather.error} </p>
    }

    return (
      <div className="widget-wrapper">
      {this.weather(weather.payload,showWind)}
      </div>
    )
  }

}


export default Widget
