import { SET_CURRENT_WEATHER, SET_CITY, SET_FORECAST} from './weatherActionTypes'
import {searchCurrentWeather, searchForecast} from "../services/weatherService";

const setCity = city => {
    return {
        type: SET_CITY,
        city
    }
}

const setCurrentWeather = currentWeather => {
    return {
        type: SET_CURRENT_WEATHER,
        currentWeather
    }
}

const setForecest = forecast => {
    return {
        type: SET_FORECAST,
        forecast
    }
}

export const searchCity = city => async dispatch => {
    const currentWeather = await searchCurrentWeather(city)
    const forecast = await searchForecast(city)
    dispatch(setForecest(forecast))
    dispatch(setCurrentWeather(currentWeather))
    return dispatch(setCity(city))
}