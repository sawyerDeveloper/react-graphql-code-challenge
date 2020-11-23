import React from 'react'
import UserField from './UserField'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10
    }
}

const User = ({user}) => {
    return (
        <div style={styles.container}>
            <UserField type="Name:" value={user.name}/>
            <UserField type="Email:" value={user.email}/>
            <UserField type="Phone:" value={user.phone}/>
        </div>)
}

export default User