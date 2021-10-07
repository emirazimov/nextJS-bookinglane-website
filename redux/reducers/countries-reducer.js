const initial = {
  countries: [],
}

export const CountriesReducer = (state = initial, action) => {
  switch (action.type) {
    case "SET_COUNTRIES": {
      return { ...state, countries: action.payload }
    }
    default:
      return state
  }
}
