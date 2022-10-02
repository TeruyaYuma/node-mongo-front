import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import { loginCall } from '../ActionCalls'
import { AuthContext } from '../state/AuthContext'

export const Login = () => {
  const { dispatch, user, isFetch, error } = useContext(AuthContext)
  const {register, handleSubmit} = useForm()
  console.log(error)

  const onSubit = (data,e) => {
    e.preventDefault()
    
    loginCall(
      {
        email: data.email,
        password: data.password
      },
      dispatch
    )
  }
    return (
      <div style={{display: 'flex', height: '100vw'}}>
        <div style={{flexBasis: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          SNS
        </div>

        <div style={{flexBasis: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <form onSubmit={handleSubmit(onSubit)}>
            <label style={{display: 'block'}}>
              email
              <input 
                type="email"
                required
                {...register('email')}
              />
            </label >
            <label style={{display: 'block'}}>
              passowrd
              <input 
                type="password" 
                required
                {...register('password')}
              />
            </label>
            <input type="submit" />
          </form>
        </div>  
      </div>
    )
}