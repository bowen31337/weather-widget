const windSpeed = {
  "en":{
    "Settings": {
      "speed_interval": [0.0, 0.3],
      "desc": "0-1   Smoke rises straight up"
    },
    "Calm": {
      "speed_interval": [0.3, 1.6],
      "desc": "1-3 One can see downwind of the smoke drift"
    },
    "Light breeze":{
      "speed_interval": [1.6, 3.3],
      "desc": "4-6 One can feel the wind. The leaves on the trees move, the wind can lift small streamers."
    },
    "Gentle Breeze":{
      "speed_interval": [3.4, 5.5],
      "desc": "7-10 Leaves and twigs move. Wind extends light flag and pennants"
    },
    "Moderate breeze":{
      "speed_interval": [5.5, 8.0],
      "desc": "11-16   The wind raises dust and loose papers, touches on the twigs and small branches, stretches larger flags and pennants"
    },
    "Fresh Breeze":{
      "speed_interval": [8.0, 10.8],
      "desc": "17-21   Small trees in leaf begin to sway. The water begins little waves to peak"
    },
    "Strong breeze":{
      "speed_interval": [10.8, 13.9],
      "desc": "22-27   Large branches and smaller tribes moves. The whiz of telephone lines. It is difficult to use the umbrella. A resistance when running."
    },
    "High wind, near gale":{
      "speed_interval": [13.9, 17.2],
      "desc": "28-33   Whole trees in motion. It is hard to go against the wind."
    },
    "Gale":{
      "speed_interval": [17.2, 20.7],
      "desc": "34-40   The wind break twigs of trees. It is hard to go against the wind."
    },
    "Severe Gale":{
      "speed_interval": [20.8, 24.5],
      "desc": "41-47   All large trees swaying and throws. Tiles can blow down."
    },
    "Storm":{
      "speed_interval": [24.5, 28.5],
      "desc": "48-55   Rare inland. Trees uprooted. Serious damage to houses."
    },
    "Violent Storm":{
      "speed_interval": [28.5, 32.7],
      "desc": "56-63   Occurs rarely and is followed by destruction."
    },
    "Hurricane":{
      "speed_interval": [32.7, 64],
      "desc": "Occurs very rarely. Unusually severe damage."
    }
  }
}

const windDirection = {
  "en":{
    "North":{
      "deg_interval": [-11.25, 11.25]
    },
    "North-northeast":{
      "deg_interval": [11.25, 33.75]
    },
    "NorthEast":{
      "deg_interval": [33.75, 56.25]
    },
    "East-northeast":{
      "deg_interval": [56.25, 78.75]
    },
    "East":{
      "deg_interval": [78.75, 101.25]
    },
    "East-southeast":{
      "deg_interval": [101.25, 123.75]
    },
    "SouthEast":{
      "deg_interval": [123.75, 146.25]
    },
    "South-southeast":{
      "deg_interval": [146.25, 168.75]
    },
    "South":{
      "deg_interval": [168.75, 191.25]
    },
    "South-southwest":{
      "deg_interval": [191.25, 213.75]
    },
    "Southwest":{
      "deg_interval": [213.75, 236.25]
    },
    "West-southwest":{
      "deg_interval": [236.25, 258.75]
    },
    "West":{
      "deg_interval": [258.75, 281.25]
    },
    "West-northwest":{
      "deg_interval": [281.25, 303.75]
    },
    "Northwest":{
      "deg_interval": [303.75, 326.25]
    },
    "North-northwest":{
      "deg_interval": [326.25, 348.75]
    }
  }
}

export const getWindSpeedDesc = speed => {
  for( let prop in windSpeed.en){
    if(speed >= windSpeed.en[prop].speed_interval[0] && speed < windSpeed.en[prop].speed_interval[1]){
      return prop
    }
  }
}

export const getWindDirection = deg => {
  for( let prop in windDirection.en){
    if(deg >= windDirection.en[prop].deg_interval[0] && deg < windDirection.en[prop].deg_interval[1]){
      return prop
    }
  }
}
