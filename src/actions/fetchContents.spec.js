import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../actions/fetchContents'
import * as types from '../constants//actionTypes'

import axios from 'axios'
import moxios from 'moxios'

// import nock from 'nock'
// import expect from 'expect'


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async fetch remote weather information', () => {
  beforeEach(() => moxios.install())

  afterEach(() => moxios.uninstall())

  const contentEndpointUrl =  'http://api.openweathermap.org/data/2.5/weather?appid=073c48738a252cd58eb4aff422ca27f6&units=metric&lat=-33.83&lon=151.02'

  const weatherJson = {
    "coord":{
      "lon":151.02,
      "lat":-33.83
    },
    "weather":[
      {
        "id":803,
        "main":"Clouds",
        "description":"broken clouds","icon":"04n"
      }],
    "base":"stations",
    "main":{
      "temp":24,
      "pressure":1016,
      "humidity":64,
      "temp_min":24,
      "temp_max":24
    },
    "visibility":10000,
    "wind":{
      "speed":1.5,
      "deg":30
    },
    "clouds":{"all":75},
    "dt":1480800600,
    "sys":{
      "type":1,
      "id":8233,
      "message":0.0082,
      "country":"AU",
      "sunrise":1480703875,
      "sunset":1480755274
    },
    "id":2164691,
    "name":"Granville",
    "cod":200
  }

  it('creates FETCH_CONTENTS_SUCCESS when fetching weather info has been done', () => {
    // nock('http://api.openweathermap.org')
    //   .get('/data/2.5/weather')
    //   .query({
    //     appid: '073c48738a252cd58eb4aff422ca27f6',
    //     units: 'metric',
    //     lat:-33.83,
    //     lon:151.02
    //   })
    //   .reply(200, weatherJson)

      moxios.stubRequest(contentEndpointUrl, {
        status: 200,
        response: weatherJson
      })

    const promise = new Promise((resolve, reject) => resolve({}))

    const expectedActions = [
      { type: types.FETCH_CONTENTS,payload:promise},
      { type: types.FETCH_CONTENTS_SUCCESS, payload:weatherJson}
    ]
    const store = mockStore({ fetchContents: {} })

    return store.dispatch(actions.fetchContents('metric',{latitude:-33.83,longitude:151.02})).payload
      .then(response => store.dispatch(actions.fetchContentsSuccess(response .data)))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
