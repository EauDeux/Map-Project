import React, { useEffect } from 'react'
import axios from 'axios'

import Signin from '../components/signin'
import PropTypes from 'prop-types'

const submit = (e, formState, setErrorMessage, history) => {
  e.preventDefault()
  // console.log(username)
  // console.log(password)
  // }

  if (!formState.username || !formState.password) {
    setErrorMessage('Les champs ne doivent pas êtres vide')
    return
  }

  axios({
    method: 'POST',
    url: 'https://easy-login-api.herokuapp.com/users/login',
    data: {
      username: formState.username,
      password: formState.password
    }
  })
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.headers['x-access-token'])
      history.push('/')
    })
    .catch(err => {
      setErrorMessage('Une erreur est survenue')
      console.log(err)
    })
}

const Login = ({ history }) => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log('Login -> token', token)
    if (token) {
      // eslint-disable-next-line react/prop-types
      history.push('/articles')
    }
  })
  return (
    <div>
      {/* <h1>Login</h1> */}
      <Signin submit={submit}></Signin>
    </div>
  )
}

Login.propTypes = {
  history: PropTypes.any
}

export default Login
