import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

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

const Users = () => (
<Query query={ALL_USERS_QUERY}>
    {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        return (
            <div>data</div>
        )
    }}
</Query>)

export default Users