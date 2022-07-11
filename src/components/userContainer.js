import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userAction'

function UserContainer ({ userDetails, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])
  return( 
    userDetails.loading ? (
    <h2>Loading</h2>
  ) : userDetails.error ? (
    <h2>{userDetails.error}</h2>
  ) : (
    <div>
      <h2>Users Name List</h2>
      <div>
        {userDetails.users.map(
          user => <p>{user.name}</p>
        )}
      </div>
    </div>
  )
  
  )
}

const mapStateToProps = state => {
  return {
    userDetails: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)


