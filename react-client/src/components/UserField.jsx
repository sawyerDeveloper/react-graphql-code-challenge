import React from 'react'

const styles = {
    container: {
        color: '#D5D5D5'
    }
}

const UserField = ({type, value}) => {
    return (
        <div style={styles.container}>
            <span>{type} </span>
            <span>{value}</span>
        </div>)
}

export default UserField