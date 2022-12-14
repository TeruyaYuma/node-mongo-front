import axios from "axios"

export const loginCall = async (user, dispatch) => {
    console.log('call')
    dispatch({type: 'LOGIN_START'})

    try{
        const res = await axios.post('/auth/login', user)
        dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
    }catch(err){
        console.log(err)
        dispatch({type: 'LOGIN_ERROR', payload: err.message})
    }
}