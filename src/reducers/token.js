import * as Actions from '../actions/token'

const initialState = {
  token: []
}

export const token = (state: any = initialState, action: any) => {
  switch (action.type) {
    case Actions.TOKEN:
      return Object.assign({}, { token: action.payload })
    default:
      return state
  }
}
