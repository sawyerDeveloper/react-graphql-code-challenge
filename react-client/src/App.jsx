import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Users from './containers/Users'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Users />
    </ApolloProvider>
  )
}

export default App
