import React from 'react'
import UserField from './UserField'
import './User.css'

const User = ({user}) => {

    return (
        <div className="User">
            <UserField type="Name" value={user.name}/>
            <UserField type="Email" value={user.email}/>
            <UserField type="Phone" value={user.phone}/>
        </div>)
}

export default User