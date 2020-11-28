import { combineReducers } from 'redux'

import { theme } from './theme'
import { popup } from './popup'

export default combineReducers({
  theme,
  popup
})
