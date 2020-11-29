export const TOKEN = 'TOKEN'

export const applyToken = (token: any) => {
  return {
    type: TOKEN,
    payload: token
  }
}
