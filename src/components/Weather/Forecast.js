import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Card, {CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography'

import TemperatureChart from './TemperatureChart'

class Forecast extends Component {

    static propTypes = {
        forecast: PropTypes.array
    }

    render() {
        return (
            <Card><Typography type="headline" component="h2">
                5 Day / 3 Hour Forecast
            </Typography>
                <CardContent>
                    <TemperatureChart data={this.props.forecast}/>
                </CardContent>
            </Card>
        )
    }
}

export default Forecast