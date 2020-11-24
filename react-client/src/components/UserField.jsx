import React from 'react'
import './UserField.css'

const UserField = ({type, value}) => {

    return (
        <div>
            <span className="typeSpan">{type}</span>
            <span className="valueSpan">{value}</span>
        </div>)
}

export default UserField