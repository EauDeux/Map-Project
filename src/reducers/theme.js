import * as Actions from '../actions/theme'
import { darkTheme } from '../config/theme'

const initialState = {
  theme: darkTheme
}

export const theme = (state: any = initialState, action: any) => {
  switch (action.type) {
    case Actions.APPLY_THEME:
      return Object.assign({}, { theme: action.payload })
    default:
      return state
  }
}
