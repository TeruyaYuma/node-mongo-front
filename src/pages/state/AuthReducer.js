export const AuthReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetch: true,
        error: false
      }

    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFetch: false,
        error: false
      }

    case 'LOGIN_ERROR':
      return {
        user: null,
        isFetch: false,
        error: action.payload
      }
    default:
      return state   
  }
}