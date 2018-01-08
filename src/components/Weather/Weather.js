import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Typograph from 'material-ui/Typography'

import {searchCity} from "../../actions/weatherActions";
import {getWeather, getCity, getTemperatureForecast} from "../../reducers/weatherReducer";

import CitySearch from './CitySearch'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'


class Weather extends Component {

    static propTypes = {
        searchCity: PropTypes.func.isRequired,
        city: PropTypes.string,
        weather: PropTypes.object,
        match: PropTypes.object.isRequired,
        forecast: PropTypes.array.isRequired
    }

    setCity = city => {
        this.props.history.push(`/weather/${city}`)
    }

    render() {
        const {city, weather, forecast} = this.props
        return (<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typograph type="display2" style={{textAlign: 'center'}}>Weather</Typograph>
            <CitySearch searchCity={this.setCity}/>
            {city !== undefined && <CurrentWeather city={city} weather={weather}/>}<br/><br/>
            {city !== undefined && <Forecast forecast={forecast}/>}
        </div>)
    }

    componentDidMount() {
        this.loadCityWeather()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.city !== this.props.match.params.city)
            this.loadCityWeather()
    }

    loadCityWeather() {
        const city = this.props.match.params.city
        if (city) {
            this.props.searchCity(city)
        }
    }
}


const mapStateToProps = state => {
    return {
        city: getCity(state),
        weather: getWeather(state),
        forecast: getTemperatureForecast(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchCity: city => dispatch(searchCity(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)