import { combineReducers } from 'redux'

import { theme } from './theme'
import { popup } from './popup'
import { token } from './token'

export default combineReducers({
  theme,
  popup,
  token
})
