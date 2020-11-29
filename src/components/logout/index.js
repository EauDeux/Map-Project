import React from 'react'
import { useHistory } from 'react-router-dom'

import { StyledButton } from './Button.styled'

const Logout = () => {
  const history = useHistory()
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
