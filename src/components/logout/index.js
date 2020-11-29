import React from 'react'
import { useHistory } from 'react-router-dom'
// import {useDispatch} from 'react-redux'
// import {applyToken} from '../../actions/token'

import { StyledButton } from './Button.styled'

const Logout = () => {
  const history = useHistory()
  // const dispatch = useDispatch()
  // const isLog = (token: any) => {
  //   dispatch(applyToken)
  // }
  const isToken = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  const handleSignIn = () => {
    history.push('/login')
  }

  return (
    <>
      {isToken ? (
        <StyledButton theme={{ main: 'red' }} onClick={handleLogout}>
          Déconnexion
        </StyledButton>
      ) : (
        <StyledButton onClick={handleSignIn}>Login</StyledButton>
      )}
    </>
  )
}

export default Logout
