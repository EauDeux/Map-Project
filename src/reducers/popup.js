import * as Actions from '../actions/popup'

const initialState = {
  popup: []
}

export const popup = (state: any = initialState, action: any) => {
  switch (action.type) {
    case Actions.POPUP:
      return Object.assign({}, { popup: action.payload })
    default:
      return state
  }
}
