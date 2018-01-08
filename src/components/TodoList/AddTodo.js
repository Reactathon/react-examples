import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

import {addTodo} from '../../actions/todoActions'

import './AddTodo.css'

class AddTodo extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    state = {
        text: ''
    }

    onChange = event => {
        this.setState({
            text: event.target.value
        })
    }

    addTodo = () => {
        const text = this.state.text
        if(text) {
            this.props.addTodo(this.state.text)
            this.setState({text: ''})
        }
    }

    render() {
        return (
            <div className='container'>
                <TextField
                    id="todo"
                    label="Todo"
                    margin="normal"
                    value={this.state.text}
                    onChange={this.onChange}
                />
                <Button raised onClick={this.addTodo}>
                    Add Todo
                </Button>
            </div>
        )
    }


}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => dispatch(addTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)