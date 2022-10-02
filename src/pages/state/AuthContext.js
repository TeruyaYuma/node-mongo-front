import { createContext, useReducer } from 'react'
import { AuthReducer } from './AuthReducer'

const initialState = {
    user: null,
    isFetch: false,
    error: null
}

export const AuthContext = createContext(initialState)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    return (
        <AuthContext.Provider
          value={{
            user: state.user,
            isFetch: state.isFetch,
            error: state.error,
            dispatch
          }}
        >
          {children}
        </AuthContext.Provider>
    )
}