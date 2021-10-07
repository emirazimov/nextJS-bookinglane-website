const initial = {
  trigger: false,
}

export const ContuctUsReducer = (state = initial, action) => {
  switch (action.type) {
    case "SET_CONTUCT_US": {
      return { ...state, trigger: action.payload }
    }
    default:
      return state
  }
}
