import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {LineChart, CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis, Label} from 'recharts'
import * as d3 from 'd3'

class TemperatureChart extends Component {

    static propTypes = {
        data: PropTypes.array
    }

    render() {
        const {data} = this.props
        return (<LineChart width={700} height={250} data={data}
                           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="date" tickFormatter={d3.timeFormat('%b-%d %I%p')} />
            <YAxis><Label value='Temperature (C)' angle={-90} position='insideBottomLeft'/></YAxis>
            <Tooltip/>
            <Legend/>

            <Line type="monotone" dataKey="low" stroke="#4286f4"/>
            <Line type="monotone" dataKey="high" stroke="#f46241"/>
            <Line type="monotone" dataKey="temp" stroke="gray"/>
        </LineChart>)

    }
}

export default TemperatureChart