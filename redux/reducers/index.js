import { combineReducers } from "redux"
import { ContuctUsReducer } from "./ContuctUs"
import { instaImagesReducer } from "./instaImagesReducer"
import { RequestDemoReducer } from "./RequestDemoReducer"

const initial = {
  people: [],
  planets: [],
}

export const appReducer = (state = initial, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  app: appReducer,
  instagram: instaImagesReducer,
  requestDemo: RequestDemoReducer,
  contuctUs: ContuctUsReducer,
})

export default rootReducer
