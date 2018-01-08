import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from "material-ui/es/Button/Button";
import TextField from "material-ui/TextField/TextField";

//An Example of using a style object instead of CSS
const citySearchContainerStyle = {
    width: 500,
    display: 'flex',
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
}

class CitySearch extends Component {

    static propTypes = {
        searchCity: PropTypes.func.isRequired
    }

    state = {
        city: ''
    }

    onChange = event => {
        this.setState({
            city: event.target.value
        })
    }

    searchCity = () => {
        const text = this.state.city
        if (text) {
            this.props.searchCity(this.state.city)
            this.setState({city: ''})
        }
    }

    render() {
        return (
            <div style={citySearchContainerStyle}>
                <TextField
                    id="city"
                    label="City"
                    margin="normal"
                    value={this.state.city}
                    onChange={this.onChange}
                />
                <Button raised onClick={this.searchCity}>
                    Search
                </Button>
            </div>
        )
    }
}

export default CitySearch