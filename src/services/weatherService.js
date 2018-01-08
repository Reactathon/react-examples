import axios from 'axios'

import staticWeather from './mockWeather'
import staticForecast from './mockForecast'


// const apiKey = 'a7931796817fdf207a1c086a06a0e9a6'
const apiKey = 'f041192cb0e36f6a317ea3f9801f563e'

export const searchCurrentWeather = async city => {
    let response = staticWeather

    try{
        response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                APPID: apiKey
            }
        })
    } catch(e) {
        console.error('Error calling weather endpoint using static weather content')
    }

    const {data} = response
    const {wind, main, weather} = data
    return {
        wind,
        conditions: weather[0],
        ...main
    }

}

export const searchForecast = async city => {

    let response = staticForecast
    try {
        response = await axios.get('http://api.openweathermap.org/data/2.5/forecast', {
            params: {
                q: city,
                APPID: apiKey
            }
        })
    } catch(e) {
        console.error('Error calling forecast endpoint using static forecast content')
    }

    return response.data.list
}