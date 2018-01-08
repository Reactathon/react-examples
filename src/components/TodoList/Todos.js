import React from 'react'
import PropTypes from 'prop-types'

import './Todos.css'

const Todos = ({todos, onClick}) => {

    const renderedTodos = todos.map(todo => {
        // Set the key to the id and the class based on the
        const {id, text, completed} = todo
        const className = completed ? 'completed' : 'uncompleted'
        return <li key={id} onClick={() => onClick(id)} className={className}>{text}</li>
    })

    return (<ul>{renderedTodos}</ul>)
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Todos