import React from 'react'
import PropTypes from 'prop-types'
import Card, {CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography'
import WeatherIcons from 'react-weathericons'

import './CurrentWeather.css'

const formatTemperature = temp => `${(temp - 273.15).toFixed(2)} ${String.fromCharCode(176)}C`

const CurrentWeather = ({city, weather}) => {

    const renderWeatherIcon = condition => {
        if(condition.includes('sun')) {
            return <WeatherIcons name='day-sunny' />
        } else if (condition.includes('snow')){
            return <WeatherIcons name='rain'/>
        } else if (condition.includes('rain')) {
            return <WeatherIcons name='snow'/>
        } else if(condition.includes('cloud')) {
            return <WeatherIcons name='cloud'/>
        } else {
            return <WeatherIcons name='day-sunny' />
        }
    }

    return (<Card style={{width: 350}}>
        <CardContent>
            <Typography type="headline" component="h2">
                <span style={{textTransform:'capitalize'}}>{city}</span>
            </Typography>
            <Typography tyle='display3'>{weather.conditions.description}</Typography>
            {renderWeatherIcon(weather.conditions.description)}
            <Typography type='display3'>{formatTemperature(weather.temp)}</Typography>


            <Typography>Humidity: {(weather.humidity).toFixed(2)}% </Typography>
            <Typography>Wind: {weather.wind.speed} km/h</Typography>
        </CardContent>
    </Card>)
}

CurrentWeather.propTypes = {
    city: PropTypes.string.isRequired,
    weather: PropTypes.object.isRequired
}

export default CurrentWeather