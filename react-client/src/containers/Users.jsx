import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import User from '../components/User'

const ALL_USERS_QUERY = gql`
query users {
    users {
      id
      name
      email
      phone
    }
  }
`

const styles = {
    container: {
        borderRadius: 12,
        backgroundColor: '#B7533D',
        margin: 30,
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 10
    }
}

const Users = () => (
    <Query query={ALL_USERS_QUERY}>
        {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>
            if (error) return <div>Error :(</div>
            return (
                <div style={styles.container}>
                    {data.users.map(user => {
                        return <User key={user.id} user={user} />
                    })}
                </div>
            )
        }}
    </Query>)

export default Users