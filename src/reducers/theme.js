import * as Actions from '../actions/theme'
import { lightTheme } from '../config/theme'

const initialState = {
  theme: lightTheme
}

export const theme = (state: any = initialState, action: any) => {
  switch (action.type) {
    case Actions.APPLY_THEME:
      return Object.assign({}, { theme: action.payload })
    default:
      return state
  }
}
