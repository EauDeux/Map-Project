export const POPUP = 'POPUP'

export const applyPopup = (popup: any) => {
  return {
    type: POPUP,
    payload: popup
  }
}
