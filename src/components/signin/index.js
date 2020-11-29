import React, { useState } from 'react'
// import axios from 'axios'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import { StyledForm, StyledSpan, SigninInput } from './Form.Styled'

// eslint-disable-next-line no-unused-vars
const Signin = ({ submit }) => {
  // const [username, setUserName] = useState('')
  // const [password, setPassword] = useState('')
  //Cette ligne permet de rassembler tous les input du form lorsqu'on a beaucoup de champs
  const [formState, setFormState] = useState({ username: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')

  const history = useHistory()

  return (
    <StyledForm onSubmit={e => submit(e, formState, setErrorMessage, history)}>
      <StyledSpan>Connexion</StyledSpan>
      <SigninInput
        placeholder='username'
        // onChange={e => setUserName(e.target.value)}
        onChange={e => setFormState({ ...formState, username: e.target.value })}
        type='text'
      ></SigninInput>
      <SigninInput
        placeholder='password'
        // onChange={e => setPassword(e.target.value)}
        onChange={e => setFormState({ ...formState, password: e.target.value })}
        type='password'
      ></SigninInput>
      <StyledSpan>{errorMessage}</StyledSpan>
      <SigninInput type='submit'></SigninInput>
    </StyledForm>
  )
}

Signin.propTypes = {
  submit: PropTypes.any
}

export default Signin
