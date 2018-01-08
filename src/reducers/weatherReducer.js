import {SET_CURRENT_WEATHER, SET_CITY, SET_FORECAST} from '../actions/weatherActionTypes'

const reducer = (state = {forecast: []}, action) => {
    switch (action.type) {
        case SET_CURRENT_WEATHER:
            const {currentWeather} = action
            return Object.assign({}, state, {currentWeather})
        case SET_CITY:
            const {city} = action
            return Object.assign({}, state, {city})
        case SET_FORECAST:
            const {forecast} = action
            return Object.assign({}, state, {forecast})
        default:
            return state

    }
}

export const getCity = state => {
    return state.weather.city
}

export const getWeather = state => {
    return state.weather.currentWeather
}

export const getTemperatureForecast = state => {
    const forecast = state.weather.forecast.map(entry => {
            return {
                date: entry.dt * 1000,
                temp: entry.main.temp - 273.15,
                high: entry.main.temp_max - 273.15,
                low: entry.main.temp_min - 273.15
            }
        }
    )

    return forecast
}

export default reducer