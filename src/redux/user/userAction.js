import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from "./userType";
import axios from "axios";

export const fetch_users_request = () => {
    return{
        type: FETCH_USERS_REQUEST
    }
}
export const fetch_users_success = users => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetch_users_failure = error => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetch_users_request())
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // response.data is the users
          const users = response.data
          dispatch(fetch_users_success(users))
        })
        .catch(error => {
          // error.message is the error message
          const errormessage = error.message
          dispatch(fetch_users_failure(errormessage))
        })
    }
  }