const initial = {
  trigger: false,
}

export const RequestDemoReducer = (state = initial, action) => {
  switch (action.type) {
    case "SET_REQUEST_DEMO": {
      return { ...state, trigger: action.payload }
    }
    default:
      return state
  }
}
